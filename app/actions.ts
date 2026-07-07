"use server";

import { API_URL } from "@/lib/api-url";

// Xato KODLARI qaytariladi (matn emas) — klient tomonda joriy tilga tarjima qilinadi.
export type FieldErrorCode = "required" | "invalid";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  fieldErrors: {
    name?: FieldErrorCode;
    email?: FieldErrorCode;
    message?: FieldErrorCode;
  };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot: botlar to'ldiradigan yashirin maydon
  const website = String(formData.get("website") ?? "").trim();

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "required";
  if (!email) fieldErrors.email = "required";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "invalid";
  if (!message) fieldErrors.message = "required";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  // Murojaat backend'ga lead sifatida yuboriladi — superadmin panelda
  // kanban/ro'yxatda ko'rinadi va u yerdan boshqariladi.
  try {
    const res = await fetch(`${API_URL}/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, website: website || undefined }),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("[contact] Lead yuborishda xato:", res.status, await res.text());
      return { status: "error", fieldErrors: {} };
    }
  } catch (err) {
    console.error("[contact] Backend bilan aloqa xatosi:", err);
    return { status: "error", fieldErrors: {} };
  }

  return { status: "success", fieldErrors: {} };
}

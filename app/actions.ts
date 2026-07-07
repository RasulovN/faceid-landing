"use server";

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

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "required";
  if (!email) fieldErrors.email = "required";
  else if (!EMAIL_RE.test(email)) fieldErrors.email = "invalid";
  if (!message) fieldErrors.message = "required";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  // Backend'da hozircha kontakt-so'rovlar uchun endpoint mavjud emas,
  // shuning uchun xabar server logiga yoziladi. Endpoint tayyor bo'lganda
  // shu yerda API'ga POST so'rov yuboriladi.
  console.log("[contact] Yangi murojaat:", { name, email, message });

  return { status: "success", fieldErrors: {} };
}

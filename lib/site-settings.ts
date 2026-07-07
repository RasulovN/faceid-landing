import { API_URL } from "./api-url";

export interface SiteSettings {
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  workingHours: string;
  telegram: string;
  instagram: string;
  facebook: string;
  youtube: string;
  linkedin: string;
  twitter: string;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T | null;
  error: { code: string; message: string } | null;
}

/** Backend ishlamaganda ko'rsatiladigan zaxira qiymatlar (matnlar i18n'dan olinadi, bular fallback). */
export const FALLBACK_SETTINGS: SiteSettings = {
  contactEmail: "info@faceid.uz",
  contactPhone: "+998 71 200 00 00",
  contactAddress: "Toshkent sh., Mirobod tumani, Amir Temur ko‘chasi 108",
  workingHours: "Du–Ju: 09:00–18:00, Sh: 10:00–14:00",
  telegram: "",
  instagram: "",
  facebook: "",
  youtube: "",
  linkedin: "",
  twitter: "",
};

/** Sayt sozlamalarini backend'dan oladi. Xato bo'lsa fallback qaytariladi. */
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const res = await fetch(`${API_URL}/settings/public`, { next: { revalidate: 120 } });
    if (!res.ok) return FALLBACK_SETTINGS;
    const json = (await res.json()) as ApiEnvelope<SiteSettings>;
    if (!json.success || !json.data) return FALLBACK_SETTINGS;
    return { ...FALLBACK_SETTINGS, ...json.data };
  } catch {
    return FALLBACK_SETTINGS;
  }
}

/** Ijtimoiy tarmoq havolalarini tartiblangan ro'yxat sifatida qaytaradi (faqat to'ldirilganlari). */
export function socialLinks(s: SiteSettings): { key: string; url: string }[] {
  return (
    [
      { key: "telegram", url: s.telegram },
      { key: "instagram", url: s.instagram },
      { key: "facebook", url: s.facebook },
      { key: "youtube", url: s.youtube },
      { key: "linkedin", url: s.linkedin },
      { key: "twitter", url: s.twitter },
    ] as const
  ).filter((x) => x.url && x.url.trim().length > 0);
}

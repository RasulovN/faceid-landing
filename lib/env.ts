/**
 * Barcha URL/port sozlamalari uchun YAGONA manba — qiymatlar .env dan o'qiladi.
 *
 * DIQQAT: NEXT_PUBLIC_* o'zgaruvchilar Next.js tomonidan BUILD paytida statik
 * almashtiriladi, shuning uchun ular shu yerda to'g'ridan-to'g'ri (literal)
 * ko'rinishda yozilishi shart — dinamik process.env[name] ishlamaydi.
 *
 * .env kalitlari:
 *   PORT                     — landing'ning o'z porti (scripts/next-with-env-port.mjs o'qiydi)
 *   NEXT_PUBLIC_SITE_URL     — saytning kanonik manzili (SEO: canonical/OG/sitemap)
 *   NEXT_PUBLIC_API_URL      — backend API (domen yoki to'liq .../api/v1)
 *   NEXT_PUBLIC_CLIENT_URL   — SPA (login/register) manzili
 */

/** Dev muhit uchun standart qiymatlar — .env berilmaganda ishlatiladi */
export const DEV_DEFAULTS = {
  siteUrl: "http://localhost:3001",
  apiUrl: "http://localhost:3000",
  clientUrl: "http://localhost:5173",
} as const;

function pick(value: string | undefined, fallback: string): string {
  const v = value?.trim();
  return (v ? v : fallback).replace(/\/+$/, "");
}

/** Saytning o'z manzili (SEO) */
export const RAW_SITE_URL = pick(process.env.NEXT_PUBLIC_SITE_URL, DEV_DEFAULTS.siteUrl);

/** Backend API xom manzili (normallashtirish api-url.ts da) */
export const RAW_API_URL = pick(process.env.NEXT_PUBLIC_API_URL, DEV_DEFAULTS.apiUrl);

/** Yagona client SPA manzili (eski nom NEXT_PUBLIC_COMPANY_PANEL_URL ham qo'llab-quvvatlanadi) */
export const RAW_CLIENT_URL = pick(
  process.env.NEXT_PUBLIC_CLIENT_URL ?? process.env.NEXT_PUBLIC_COMPANY_PANEL_URL,
  DEV_DEFAULTS.clientUrl,
);

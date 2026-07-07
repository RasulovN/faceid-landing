import { RAW_API_URL } from "./env";

/**
 * Backend API manzilini normallashtiradi (.env: NEXT_PUBLIC_API_URL):
 * - faqat domen berilsa (masalan https://api.faceid.uz yoki http://localhost:3000)
 *   oxiriga /api/v1 avtomatik qo'shiladi;
 * - to'liq berilsa (…/api/v1) o'zgarishsiz qoladi;
 * - oxiridagi ortiqcha / belgilar olib tashlanadi.
 */
export function normalizeApiUrl(raw: string): string {
  const base = raw.trim().replace(/\/+$/, "");
  return /\/api\/v\d+$/.test(base) ? base : `${base}/api/v1`;
}

/** Backend API bazaviy manzili (doim …/api/v1 bilan tugaydi) */
export const API_URL = normalizeApiUrl(RAW_API_URL);

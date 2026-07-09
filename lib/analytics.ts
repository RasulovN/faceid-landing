/**
 * Tashrif analitikasi yordamchilari — OPT-OUT: anonim kuzatuv standart yoqiq,
 * foydalanuvchi bannerda "Rad etish"ni bossa o'chadi (AnalyticsTracker shuni
 * tekshiradi). visitorId (365 kun) qaytgan mehmonni, sessionId (tab sessiyasi)
 * bitta kirish davrini anglatadi. Hech qanday shaxsiy ma'lumot yig'ilmaydi.
 */

import { API_URL } from "@/lib/api-url";

export type ConsentValue = "granted" | "denied";

const CONSENT_KEY = "faceid-consent";
const VISITOR_KEY = "faceid-vid";
const SESSION_KEY = "faceid-sid";
const SENT_KEY = "faceid-visit-sent";
/** Rozilik banneri qarori o'zgarganda tracker'ga xabar beruvchi custom event */
export const CONSENT_EVENT = "faceid-consent-change";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

export function setConsent(value: ConsentValue): void {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

function uuid(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

/** visitorId'ni oladi; mavjud bo'lmasa yaratadi va firstVisit=true qaytaradi */
function ensureVisitorId(): { visitorId: string; firstVisit: boolean } {
  const existing = localStorage.getItem(VISITOR_KEY);
  if (existing) return { visitorId: existing, firstVisit: false };
  const visitorId = uuid();
  localStorage.setItem(VISITOR_KEY, visitorId);
  return { visitorId, firstVisit: true };
}

function ensureSessionId(): string {
  const existing = sessionStorage.getItem(SESSION_KEY);
  if (existing) return existing;
  const sessionId = uuid();
  sessionStorage.setItem(SESSION_KEY, sessionId);
  return sessionId;
}

async function post(path: string, body: unknown, keepalive = false): Promise<void> {
  try {
    await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive,
    });
  } catch {
    // Analitika hech qachon sahifa ishini buzmasligi kerak — xato yutiladi
  }
}

/** Sessiya boshida bitta tashrif yozuvi yuboradi (dublikatdan sessionStorage saqlaydi) */
export async function trackVisit(locale: string): Promise<void> {
  const sessionId = ensureSessionId();
  if (sessionStorage.getItem(SENT_KEY)) return;
  sessionStorage.setItem(SENT_KEY, "1");

  const { visitorId, firstVisit } = ensureVisitorId();
  const params = new URLSearchParams(window.location.search);
  const referrer =
    document.referrer && !document.referrer.startsWith(window.location.origin)
      ? document.referrer
      : undefined;

  await post("/public/site-analytics/visit", {
    visitorId,
    sessionId,
    path: window.location.pathname || "/",
    referrer,
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
    locale,
    screenWidth: window.screen?.width,
    screenHeight: window.screen?.height,
    firstVisit,
  });
}

/** Sessiya davomiyligi uchun heartbeat (davomiylikni server o'zi hisoblaydi) */
export function sendHeartbeat(keepalive = false): void {
  const sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId || !sessionStorage.getItem(SENT_KEY)) return;
  void post("/public/site-analytics/heartbeat", { sessionId }, keepalive);
}

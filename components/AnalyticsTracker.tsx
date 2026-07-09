"use client";

import { useEffect, useRef } from "react";
import { useI18n } from "@/lib/i18n";
import { CONSENT_EVENT, getConsent, sendHeartbeat, trackVisit } from "@/lib/analytics";

/** Heartbeat oralig'i va yuqori chegarasi (30 daqiqadan keyin yuborilmaydi) */
const HEARTBEAT_INTERVAL_MS = 20_000;
const HEARTBEAT_MAX_MS = 30 * 60 * 1000;

/**
 * Tashriflarni kuzatuvchi komponent (UI chizmaydi).
 * OPT-OUT model: anonim statistika (sahifa, hudud, qurilma) rozilik so'ralmasdanoq
 * yoziladi — shaxsiy ma'lumot yig'ilmaydi (visitorId tasodifiy UUID). Foydalanuvchi
 * bannerda "Rad etish"ni bossagina kuzatuv ishlamaydi. Tashrif yozilgach har 20
 * soniyada heartbeat yuboriladi — davomiylik shundan hisoblanadi; tab
 * yashiringanida keepalive bilan oxirgi signal ketadi.
 */
export default function AnalyticsTracker() {
  const { locale } = useI18n();
  const started = useRef(false);

  useEffect(() => {
    let intervalId: number | undefined;
    const startedAt = Date.now();

    const start = () => {
      if (started.current) return;
      started.current = true;

      void trackVisit(locale);

      intervalId = window.setInterval(() => {
        if (Date.now() - startedAt > HEARTBEAT_MAX_MS) {
          window.clearInterval(intervalId);
          return;
        }
        if (document.visibilityState === "visible") sendHeartbeat();
      }, HEARTBEAT_INTERVAL_MS);
    };

    const onVisibility = () => {
      // Tab yopilishi/yashirilishida oxirgi davomiylik signali (keepalive)
      if (document.visibilityState === "hidden" && started.current) sendHeartbeat(true);
    };

    const onConsent = (e: Event) => {
      if ((e as CustomEvent<string>).detail === "granted") start();
    };

    // "denied" bo'lmasa (hali qaror yo'q yoki granted) — kuzatuv darhol boshlanadi
    if (getConsent() !== "denied") start();
    window.addEventListener(CONSENT_EVENT, onConsent);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      document.removeEventListener("visibilitychange", onVisibility);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
    // locale faqat birinchi yuborishda ishlatiladi — qayta obuna shart emas
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

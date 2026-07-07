"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { getConsent, setConsent } from "@/lib/analytics";
import { IconShieldCheck } from "@/components/icons";

/**
 * Cookie-rozilik banneri — birinchi tashrifda pastda chiqadi.
 * Qabul qilinsa analitika (hudud, qurilma, tashrif vaqti) yoqiladi;
 * rad etilsa hech narsa yig'ilmaydi. Qaror localStorage'da saqlanadi.
 */
export default function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Qaror hali berilmagan bo'lsa, kontent o'qila boshlagach ko'rsatamiz
    if (getConsent() === null) {
      const timer = window.setTimeout(() => setVisible(true), 800);
      return () => window.clearTimeout(timer);
    }
  }, []);

  if (!visible) return null;

  const decide = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={t.cookies.title}
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-xl rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-2xl shadow-zinc-900/15 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/95 dark:shadow-black/40 sm:inset-x-auto sm:left-4 sm:bottom-4 sm:p-5"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-brand-50 p-2 dark:bg-brand-500/10">
          <IconShieldCheck className="h-5 w-5 text-brand-600 dark:text-brand-400" />
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-zinc-900 dark:text-white">{t.cookies.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {t.cookies.message}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => decide("denied")}
          className="rounded-xl border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
        >
          {t.cookies.decline}
        </button>
        <button
          type="button"
          onClick={() => decide("granted")}
          className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
        >
          {t.cookies.accept}
        </button>
      </div>
    </div>
  );
}

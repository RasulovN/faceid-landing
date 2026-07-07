"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  LOCALES,
  dictionaries,
  type Dict,
  type Locale,
} from "./dictionaries";

const STORAGE_KEY = "faceid-locale";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function isLocale(v: string | null): v is Locale {
  return v != null && (LOCALES as readonly string[]).includes(v);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // SSR va birinchi klient render — default locale (hydration mos bo'lishi uchun).
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
    } else {
      const nav = navigator.language.toLowerCase();
      const guessed: Locale = nav.startsWith("ru") ? "ru" : nav.startsWith("en") ? "en" : DEFAULT_LOCALE;
      setLocaleState(guessed);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALE_META[locale].htmlLang;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export { LOCALE_META, LOCALES };
export type { Locale };

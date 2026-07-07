"use client";

import { LOGIN_URL, REGISTER_URL } from "@/lib/urls";
import { useI18n } from "@/lib/i18n";
import { LogoMark } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import type { SiteSettings } from "@/lib/site-settings";

export default function Footer({ settings }: { settings: SiteSettings }) {
  const { t } = useI18n();

  const productLinks = [
    { href: "#imkoniyatlar", label: t.nav.features },
    { href: "#qanday-ishlaydi", label: t.nav.how },
    { href: "#tariflar", label: t.nav.tariffs },
    { href: "#faq", label: t.nav.faq },
  ];

  const accountLinks = [
    { href: LOGIN_URL, label: t.actions.login },
    { href: REGISTER_URL, label: t.footer.register },
    { href: "#aloqa", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5" aria-label={`${t.brand} — bosh sahifa`}>
              <LogoMark className="h-8 w-8" />
              <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
                {t.brand}
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {t.footer.tagline}
            </p>
            <SocialLinks settings={settings} className="mt-5" />
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.footer.product}</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.footer.account}</p>
            <ul className="mt-4 space-y-2.5">
              {accountLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-zinc-100 pt-6 dark:border-zinc-800 sm:flex-row">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.footer.rights}</p>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">{t.footer.city}</p>
        </div>
      </div>
    </footer>
  );
}

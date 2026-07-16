"use client";

import { useEffect, useState } from "react";
import { LOGIN_URL, REGISTER_URL } from "@/lib/urls";
import { useI18n } from "@/lib/i18n";
import { IconMenu, IconUser, IconX, LogoMark } from "@/components/icons";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#imkoniyatlar", label: t.nav.features },
    { href: "#qanday-ishlaydi", label: t.nav.how },
    { href: "#tariflar", label: t.nav.tariffs },
    { href: "#faq", label: t.nav.faq },
    { href: "#aloqa", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-zinc-200 bg-white/80 shadow-sm backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label={`${t.brand} — bosh sahifa`}>
          <LogoMark className="h-8 w-8" />
          <span className="text-base font-bold tracking-tight text-zinc-900 dark:text-white">
            {t.brand}
          </span>
        </a>

        {/* To'liq nav faqat lg+ (planshetda 5 havola + tugmalar sig'maydi — hamburger qoladi) */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Asosiy navigatsiya">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={LOGIN_URL}
            className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
          >
            {t.actions.login}
          </a>
          <a
            href={REGISTER_URL}
            className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md hover:shadow-brand-600/25"
          >
            {t.actions.startFree}
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href={LOGIN_URL}
            aria-label={t.actions.login}
            title={t.actions.login}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <IconUser className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
            aria-label={menuOpen ? t.actions.closeMenu : t.actions.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white/95 px-4 pb-4 pt-2 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-950/95 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobil navigatsiya">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-zinc-100 pt-3 dark:border-zinc-800">
            {/* "Kirish" endi navbar'dagi user ikonkasi — bu yerda faqat asosiy CTA qoladi */}
            <a
              href={REGISTER_URL}
              className="rounded-xl bg-brand-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              {t.actions.startFree}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

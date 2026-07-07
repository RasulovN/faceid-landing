"use client";

import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { IconArrowUp } from "@/components/icons";

/** Tugma ko'rinadigan minimal scroll chuqurligi (px) */
const SHOW_AFTER = 480;

/**
 * O'ng pastki burchakdagi "yuqoriga qaytish" tugmasi — sahifa pastga
 * aylantirilgandagina paydo bo'ladi, bosilganda tepaga silliq qaytaradi.
 */
export default function ScrollToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      ticking.current = false;
      setVisible(window.scrollY > SHOW_AFTER);
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.actions.scrollTop}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-zinc-700 shadow-lg shadow-zinc-900/10 backdrop-blur transition-all duration-300 hover:bg-brand-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-200 dark:shadow-black/30 dark:hover:bg-brand-600 dark:hover:text-white sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      <IconArrowUp className="h-5 w-5" />
    </button>
  );
}

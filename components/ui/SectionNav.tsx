"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { TouchEvent as ReactTouchEvent } from "react";
import { useI18n } from "@/lib/i18n";

/** Sahifadagi bo'limlar tartibi — page.tsx dagi section id'lari bilan bir xil */
const SECTION_IDS = ["imkoniyatlar", "qanday-ishlaydi", "tariflar", "faq", "aloqa"] as const;

/** Rail ko'rinadigan minimal scroll (px) — hero ustida xalaqit bermasin */
const SHOW_AFTER = 160;
/** Harakatsizlikdan keyin g'ildirak yashirinadigan vaqt (ms) */
const HIDE_AFTER_MS = 3000;
/** Bitta bo'lim almashishi uchun kerakli barmoq surish masofasi (px) */
const SWIPE_STEP = 44;
/** G'ildirakning bitta qatori balandligi (px) */
const ROW_H = 28;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Mobil rejimdagi tezkor bo'lim navigatsiyasi — iOS uslubidagi g'ildirak (wheel picker).
 * - Joriy bo'lim markazda yorqin turadi; yuqori/pastdagilari asta xiralashadi.
 * - Bo'lim nomiga tegilsa — o'sha bo'limga silliq o'tadi.
 * - G'ildirak ustida barmoqni yuqoriga/pastga surish — keyingi/oldingi bo'limga o'tkazadi.
 * - O'ng yuqorida turadi va yarim shaffof — sahifani o'qishga xalaqit bermaydi.
 */
export default function SectionNav() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const ticking = useRef(false);
  const hideTimer = useRef<number | null>(null);

  // Gesture holati (re-render qilmaslik uchun ref'larda)
  const touchStartY = useRef(0);
  const gestureBaseIndex = useRef(0);
  const gestureLastTarget = useRef<number | null>(null);
  const wheelLockUntil = useRef(0);

  const labels = [t.nav.features, t.nav.how, t.nav.tariffs, t.nav.faq, t.nav.contact];

  /** Ko'rsatib turadi va 5 soniyalik harakatsizlik taymerini qayta yoqadi */
  const keepAlive = useCallback(() => {
    if (window.scrollY <= SHOW_AFTER) return; // hero ustida ko'rsatilmaydi
    setVisible(true);
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => setVisible(false), HIDE_AFTER_MS);
  }, []);

  useEffect(() => {
    const update = () => {
      ticking.current = false;
      keepAlive();
      // Ekranning yuqori 35% chizig'idan o'tgan oxirgi bo'lim — joriy bo'lim
      const refLine = window.scrollY + window.innerHeight * 0.35;
      let current = 0;
      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= refLine) current = i;
      });
      setActiveIndex(current);
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, [keepAlive]);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, index));
    const behavior = prefersReducedMotion() ? ("auto" as const) : ("smooth" as const);
    document.getElementById(SECTION_IDS[clamped])?.scrollIntoView({ behavior, block: "start" });
    return clamped;
  }, []);

  const onTouchStart = (e: ReactTouchEvent) => {
    keepAlive();
    touchStartY.current = e.touches[0].clientY;
    gestureBaseIndex.current = activeIndex;
    gestureLastTarget.current = null;
  };

  const onTouchMove = (e: ReactTouchEvent) => {
    keepAlive();
    // Barmoq yuqoriga surilsa (delta > 0) — keyingi bo'lim, pastga — oldingi.
    const delta = touchStartY.current - e.touches[0].clientY;
    const steps = Math.round(delta / SWIPE_STEP);
    if (steps === 0) return;
    const target = Math.max(0, Math.min(SECTION_IDS.length - 1, gestureBaseIndex.current + steps));
    if (target !== gestureLastTarget.current) {
      gestureLastTarget.current = target;
      goTo(target);
    }
  };

  /** Desktop'da tekshirish qulay bo'lishi uchun: g'ildirak ustida scroll ham ishlaydi */
  const onWheel = (e: React.WheelEvent) => {
    keepAlive();
    const now = Date.now();
    if (now < wheelLockUntil.current) return;
    wheelLockUntil.current = now + 450;
    goTo(activeIndex + (e.deltaY > 0 ? 1 : -1));
  };

  return (
    <nav
      aria-label={t.nav.quickNav}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onWheel={onWheel}
      style={{ height: ROW_H * 5 }}
      className={`fixed left-1 top-20 z-40 flex touch-none select-none items-center overflow-hidden pl-1 pr-2 transition-all duration-300 lg:hidden ${
        visible ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-4 opacity-0"
      }`}
    >
      {/* Markazdagi tanlangan qator uchun yengil ajratuvchi fon */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-1 top-1/2 -translate-y-1/2 rounded-lg bg-brand-500/[0.07] dark:bg-brand-400/[0.08]"
        style={{ height: ROW_H }}
      />

      {/* G'ildirak: ro'yxat markaziy qatorga siljitiladi, chetlari yumshoq so'nadi */}
      <div
        className="relative w-[104px]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 26%, #000 74%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 26%, #000 74%, transparent 100%)",
        }}
      >
        <ul
          className="flex flex-col transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${ROW_H * 2 - activeIndex * ROW_H}px)` }}
        >
          {SECTION_IDS.map((id, i) => {
            const dist = Math.abs(i - activeIndex);
            const isActive = i === activeIndex;
            return (
              <li key={id} style={{ height: ROW_H }} className="flex items-center justify-start">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={isActive ? "true" : undefined}
                  style={{
                    opacity: isActive ? 1 : dist === 1 ? 0.5 : dist === 2 ? 0.28 : 0.15,
                  }}
                  className={`w-full truncate px-2 text-left transition-all duration-300 ${
                    isActive
                      ? "text-[12px] font-semibold text-brand-600 dark:text-brand-300"
                      : "text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {labels[i]}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

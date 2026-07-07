"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconArrowRight,
  IconCheck,
  IconLocation,
  IconMonitor,
  IconScanFace,
  IconSmartphone,
} from "@/components/icons";
import { REGISTER_URL } from "@/lib/urls";

const TAB_ICONS = [IconMonitor, IconSmartphone, IconScanFace] as const;
const ACCENTS = [
  "from-brand-600 to-violet-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
] as const;

/** Tablar avtomatik almashinadigan interval (ms) */
const AUTO_MS = 6000;

type Dict = ReturnType<typeof useI18n>["t"];

/* ---------------- Mockup: Web panel (brauzer oynasi) ---------------- */
const BARS = [50, 72, 58, 88, 66, 80, 62] as const;

function DashboardMock({ t }: { t: Dict }) {
  const h = t.hero;
  const feed = [
    { initials: "DA", name: "Dilnoza A.", time: "09:41", late: false },
    { initials: "JK", name: "Jasur K.", time: "09:12", late: true },
    { initials: "MN", name: "Malika N.", time: "08:58", late: false },
  ];
  const stats = [
    { label: h.statPresent, value: "42", tone: "text-emerald-600 dark:text-emerald-400" },
    { label: h.statLate, value: "3", tone: "text-amber-600 dark:text-amber-400" },
    { label: h.statAbsent, value: "2", tone: "text-rose-600 dark:text-rose-400" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 truncate rounded-full bg-zinc-100 px-3 py-1 text-[10px] text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
          {h.mockUrl}
        </div>
      </div>
      <div className="flex">
        <div className="hidden w-28 shrink-0 flex-col gap-1 border-r border-zinc-100 p-2.5 dark:border-zinc-800 sm:flex">
          {h.menu.map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-2 py-1.5 text-[10px] font-medium ${
                i === 1
                  ? "bg-brand-50 text-brand-600 dark:bg-brand-600/15 dark:text-brand-300"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-3 p-3.5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">{h.mockToday}</p>
            <p className="text-[9px] text-zinc-400 dark:text-zinc-500">07.07.2026</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-zinc-100 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-800/50"
              >
                <p className={`text-sm font-bold ${s.tone}`}>{s.value}</p>
                <p className="text-[9px] text-zinc-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-2 lg:grid-cols-5">
            <div className="space-y-1.5 rounded-xl border border-zinc-100 p-2.5 dark:border-zinc-800 lg:col-span-3">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                  {h.mockLive}
                </p>
              </div>
              {feed.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[8px] font-bold text-brand-600 dark:bg-brand-600/15 dark:text-brand-300">
                    {item.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-medium text-zinc-800 dark:text-zinc-200">{item.name}</p>
                    <p className="text-[8px] text-zinc-400 dark:text-zinc-500">{item.time}</p>
                  </div>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                      item.late
                        ? "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400"
                        : "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                    }`}
                  >
                    {item.late ? h.statusLate : h.statusCame}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col rounded-xl border border-zinc-100 p-2.5 dark:border-zinc-800 lg:col-span-2">
              <p className="text-[9px] font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {h.mockWeek}
              </p>
              <div className="mt-2 flex flex-1 items-end gap-1.5">
                {BARS.map((bar, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t ${i === 3 ? "bg-brand-600" : "bg-brand-200 dark:bg-brand-600/40"}`}
                    style={{ height: `${bar}%`, minHeight: 8 }}
                  />
                ))}
              </div>
              <div className="mt-1.5 flex justify-between text-[7px] text-zinc-400 dark:text-zinc-500">
                {h.days.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mockup: Xodim ilovasi (telefon) ---------------- */
function MobileMock({ t }: { t: Dict }) {
  const m = t.showcase.mock;
  const days = [
    { d: "Dush", time: "09:03 – 18:12", late: false },
    { d: "Sesh", time: "09:19 – 18:05", late: true },
    { d: "Chor", time: "08:57 – 18:20", late: false },
  ];
  return (
    <div className="mx-auto w-[236px] rounded-[2.2rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-xl dark:border-zinc-700">
      <div className="overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-brand-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        {/* status bar + notch */}
        <div className="relative flex items-center justify-between px-5 pt-2 text-[9px] font-semibold text-zinc-500 dark:text-zinc-400">
          <span>09:41</span>
          <span className="absolute left-1/2 top-1.5 h-3 w-14 -translate-x-1/2 rounded-full bg-zinc-900 dark:bg-zinc-700" />
          <span>100%</span>
        </div>
        <div className="space-y-3 px-4 pb-5 pt-3">
          <p className="text-[13px] font-bold text-zinc-900 dark:text-white">{m.greeting} 👋</p>
          {/* check-in kartasi */}
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-violet-600 p-3.5 text-white shadow-lg shadow-brand-600/25">
            <div className="flex items-center gap-3">
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <span className="absolute inset-0 animate-ping rounded-full border border-white/40" />
                <IconScanFace className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[13px] font-bold">{m.checkedIn}</p>
                <p className="text-[10px] text-white/80">09:41 · {m.entry}</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-white/10 px-2 py-1.5 text-[10px]">
              <IconLocation className="h-3.5 w-3.5" />
              {m.office}
            </div>
          </div>
          {/* haftalik tarix */}
          <div className="space-y-1.5">
            {days.map((row) => (
              <div
                key={row.d}
                className="flex items-center justify-between rounded-xl border border-zinc-100 bg-white px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200">{row.d}</span>
                <span className="text-[9px] text-zinc-400 dark:text-zinc-500">{row.time}</span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${row.late ? "bg-amber-400" : "bg-emerald-400"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Mockup: Planshet terminali (kiosk) ---------------- */
function KioskMock({ t }: { t: Dict }) {
  const m = t.showcase.mock;
  return (
    <div className="mx-auto w-[300px] rounded-[1.6rem] border-[7px] border-zinc-900 bg-zinc-950 shadow-xl dark:border-zinc-700">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1rem] bg-zinc-950">
        {/* kamera fon */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(99,102,241,0.18),transparent_60%)]" />
        {/* status bar */}
        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-3 py-2 text-[9px] font-medium text-zinc-300">
          <span className="rounded-full bg-white/10 px-2 py-0.5 backdrop-blur">{m.office}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {m.offlineReady}
          </span>
        </div>
        {/* yuz ovali */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-[46%] w-[42%]">
            <div className="absolute inset-0 rounded-[50%] border-2 border-brand-400/90" />
            <div className="absolute inset-0 animate-ping rounded-[50%] border border-brand-400/40" />
            <IconScanFace className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-brand-300/70" />
          </div>
        </div>
        {/* natija kartasi */}
        <div className="absolute inset-x-3 bottom-3 z-10 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-zinc-900/80 p-2.5 backdrop-blur-md">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
            <IconCheck className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-bold text-white">{m.welcome}, Sardor T.</p>
            <p className="text-[9px] text-zinc-400">08:47 · {m.entry}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const MOCKS = [DashboardMock, MobileMock, KioskMock] as const;

export default function Showcase() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = t.showcase.items;

  // Avtomatik almashinuv (hover/reduced-motion'da to'xtaydi)
  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % items.length), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, items.length]);

  const select = useCallback((i: number) => setActive(i), []);

  const item = items[active];
  const Mock = MOCKS[active];

  return (
    <section id="mahsulot" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {t.showcase.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t.showcase.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">{t.showcase.subtitle}</p>
        </Reveal>

        {/* Tablar */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap justify-center gap-2">
          {items.map((tab, i) => {
            const Icon = TAB_ICONS[i];
            const isActive = i === active;
            return (
              <button
                key={tab.tag}
                type="button"
                onClick={() => select(i)}
                aria-pressed={isActive}
                className={`relative inline-flex items-center gap-2 overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="showcase-tab"
                    className={`absolute inset-0 -z-10 bg-gradient-to-r ${ACCENTS[i]}`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon className="h-4 w-4" />
                {tab.tag}
              </button>
            );
          })}
        </Reveal>

        {/* Kontent */}
        <div
          className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${active}`}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1"
            >
              <span
                className={`inline-flex items-center rounded-full bg-gradient-to-r ${ACCENTS[active]} bg-clip-text px-0 text-xs font-bold uppercase tracking-wider text-transparent`}
              >
                {item.tag}
              </span>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                {item.description}
              </p>
              <ul className="mt-6 space-y-3">
                {item.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${ACCENTS[active]} text-white`}
                    >
                      <IconCheck className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={REGISTER_URL}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                {t.showcase.cta}
                <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </AnimatePresence>

          <div className="relative order-1 lg:order-2">
            {/* rang aurasi */}
            <div
              aria-hidden
              className={`absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr ${ACCENTS[active]} opacity-15 blur-3xl transition-colors duration-500`}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={`mock-${active}`}
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: -12 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Mock t={t} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

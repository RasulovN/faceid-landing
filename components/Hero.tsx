"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { REGISTER_URL } from "@/lib/urls";
import { useI18n } from "@/lib/i18n";
import { IconArrowRight, IconCheck } from "@/components/icons";
import HeroRobot from "@/components/ui/HeroRobot";

const BARS = [45, 70, 55, 90, 65, 80, 60] as const;

function DashboardMockup() {
  const { t } = useI18n();
  const h = t.hero;

  const feed = [
    { initials: "DA", name: "Dilnoza A.", time: "09:41", status: h.statusCame, tone: "emerald" },
    { initials: "JK", name: "Jasur K.", time: "09:12", status: h.statusLate, tone: "amber" },
    { initials: "MN", name: "Malika N.", time: "08:58", status: h.statusCame, tone: "emerald" },
    { initials: "ST", name: "Sardor T.", time: "08:47", status: h.statusCame, tone: "emerald" },
  ];

  const stats = [
    { label: h.statPresent, value: "42", tone: "text-emerald-600 dark:text-emerald-400" },
    { label: h.statLate, value: "3", tone: "text-amber-600 dark:text-amber-400" },
    { label: h.statAbsent, value: "2", tone: "text-rose-600 dark:text-rose-400" },
    { label: h.statVacation, value: "5", tone: "text-zinc-500 dark:text-zinc-400" },
  ];

  return (
    // Planshetda (lg dan past) mockup butun konteynerga cho'zilib ketmasin
    <div className="relative mx-auto w-full max-w-2xl">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-tr from-brand-600/25 via-brand-400/15 to-transparent blur-3xl dark:from-brand-500/30 dark:via-brand-500/10"
      />
      <div className="rotate-1 rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-indigo-950/10 transition-transform duration-500 hover:rotate-0 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-black/40">
        <div className="flex items-center gap-3 border-b border-zinc-100 px-4 py-3 dark:border-zinc-800">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 rounded-full bg-zinc-100 px-3 py-1 text-[10px] text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
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
              <p className="text-[9px] text-zinc-400 dark:text-zinc-500">06.07.2026 · 09:41</p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
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

            <div className="grid gap-2 sm:grid-cols-5">
              <div className="space-y-1.5 rounded-xl border border-zinc-100 p-2.5 dark:border-zinc-800 sm:col-span-3">
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
                        item.tone === "emerald"
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                          : "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col rounded-xl border border-zinc-100 p-2.5 dark:border-zinc-800 sm:col-span-2">
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
    </div>
  );
}

export default function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const h = t.hero;
  // 3D robot yuklanib bo'lgach desktop'da mockup o'rnini unga bo'shatamiz
  const [robotReady, setRobotReady] = useState(false);

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay } }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36">
      {/* Asosiy fon: yuqoridan pastga silliq bazaviy qatlam */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-to-b from-brand-50/80 via-white/0 to-transparent dark:from-brand-950/30 dark:via-zinc-950/0"
      />
      {/* Brand nuri — o'ng yuqorida (robot ortida) */}
      <div
        aria-hidden
        className="absolute -top-24 right-[-6rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.20),transparent_62%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(99,102,241,0.28),transparent_62%)]"
      />
      {/* Violet nuri — chap tomonda, matn ostida iliqlik */}
      <div
        aria-hidden
        className="absolute -top-10 left-[-8rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.14),transparent_60%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(139,92,246,0.20),transparent_60%)]"
      />
      {/* Nozik nuqtali fon */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(79,70,229,0.07)_1px,transparent_0)] [background-size:32px_32px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(129,140,248,0.08)_1px,transparent_0)]"
      />

      {/*
        Hero fonidagi interaktiv NEXBOT roboti (faqat lg+).
        Kontent grid'i pointer-events-none bo'lgani uchun bo'sh joylarda sichqoncha
        harakati canvas'ga yetadi — robot boshi kursorni kuzatadi.
      */}
      <div
        aria-hidden
        style={{
          // Radial mask: robot atrofi (o'ng-markaz) to'liq ko'rinadi, chetlardagi
          // sahna nuri (jumladan chap-yuqoridagi oq dog') fonga singib yo'qoladi.
          maskImage:
            "radial-gradient(68% 72% at 72% 46%, #000 42%, rgba(0,0,0,0.35) 72%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(68% 72% at 72% 46%, #000 42%, rgba(0,0,0,0.35) 72%, transparent 100%)",
        }}
        className={`absolute inset-0 z-[1] hidden overflow-hidden transition-opacity duration-1000 lg:block ${
          robotReady ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Robot orqasidagi brand aura */}
        <div className="absolute right-[8%] top-1/2 -z-10 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-600/25 via-brand-400/15 to-transparent blur-3xl dark:from-brand-500/30 dark:via-brand-500/10" />
        {/* Robot o'ng-pastga surilib kattalashtiriladi — matn zonasi bo'sh qoladi */}
        <div
          className="h-full w-full"
          style={{ transform: "translateX(25%) translateY(10%) scale(1.2)" }}
        >
          <HeroRobot onReady={() => setRobotReady(true)} />
        </div>
      </div>

      <div className="relative z-[2] mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:pointer-events-none lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="lg:pointer-events-auto">
          <motion.span
            {...rise(0)}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-600/30 dark:bg-brand-600/10 dark:text-brand-300"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-600 dark:bg-brand-400" />
            {h.badge}
          </motion.span>
          <motion.h1
            {...rise(0.08)}
            className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-[3.4rem]"
          >
            {h.titleA}{" "}
            <span className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent dark:from-brand-400 dark:to-violet-400">
              {h.titleHighlight}
            </span>{" "}
            {h.titleB}
          </motion.h1>
          <motion.p
            {...rise(0.16)}
            className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400"
          >
            {h.subtitle}
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={REGISTER_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30"
            >
              {t.actions.startFree}
              <IconArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#qanday-ishlaydi"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-base font-semibold text-zinc-700 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600"
            >
              {t.actions.demo}
            </a>
          </motion.div>
          <motion.div
            {...rise(0.32)}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400"
          >
            {[h.trust1, h.trust2, h.trust3].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <IconCheck className="h-4 w-4 text-emerald-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`${robotReady ? "" : "lg:pointer-events-auto"} ${reduce ? "" : "animate-float"}`}
        >
          {/* Robot tayyor bo'lgach desktop'da mockup silliq yo'qoladi (mobil'da qoladi).
              framer-motion inline opacity qo'ymasligi uchun alohida o'ramda. */}
          <div
            className={`transition-opacity duration-700 ${
              robotReady ? "lg:pointer-events-none lg:opacity-0" : ""
            }`}
          >
            <DashboardMockup />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { Application } from "@splinetool/runtime";

// Spline runtime katta (~1.5MB) — faqat kerak bo'lganda, alohida chunk bo'lib yuklanadi
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

/**
 * NEXBOT — robot character concept (Spline community, CC0). Kursorni kuzatib turadi.
 * Rasmiy viewer'dan (my.spline.design/nexbotrobotcharacterconcept-…) ajratib olingan
 * sahna public/nexbot.splinecode sifatida self-host qilinadi: tashqi CDN'ga
 * bog'liq emas, watermark yo'q va fonni shaffof boshqara olamiz.
 */
const SCENE_URL = "/nexbot.splinecode";

/** Robot faqat shu kenglikdan boshlab yuklanadi (mobil trafik/battery tejaladi) */
const DESKTOP_QUERY = "(min-width: 1024px)";

interface HeroRobotProps {
  /** Sahna to'liq yuklanib, ko'rsatishga tayyor bo'lganda chaqiriladi */
  onReady?: () => void;
}

/**
 * Hero fonidagi interaktiv 3D robot (NEXBOT).
 * - Faqat desktop (lg+) va brauzer bo'sh qolganda (idle) yuklanadi — LCP'ga ta'sir qilmaydi.
 * - Yuklanmaguncha ko'rinmaydi: hero'dagi dashboard mockup fallback bo'lib turadi,
 *   sahna tayyor bo'lgach robot silliq fade-in bo'ladi (almashishni Hero boshqaradi).
 * - Xato/sekin tarmoqda hech narsa buzilmaydi — mockup joyida qolaveradi.
 */
export default function HeroRobot({ onReady }: HeroRobotProps) {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!window.matchMedia(DESKTOP_QUERY).matches) return;

    // Robot kursorni kuzatish uchun — demak sichqoncha bor foydalanuvchigagina kerak.
    // Birinchi pointermove'dan keyin, brauzer bo'shagach (idle) yuklaymiz: haqiqiy
    // foydalanuvchi uchun sezilmas kechikish, LCP/TBT o'lchovlariga esa mutlaqo ta'sir yo'q.
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    const hasIdle = typeof window.requestIdleCallback === "function";

    const arm = () => {
      if (hasIdle) idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
      else timeoutId = window.setTimeout(() => setShouldLoad(true), 800);
    };
    window.addEventListener("pointermove", arm, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointermove", arm);
      if (idleId !== undefined && hasIdle) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  if (!shouldLoad) return null;

  /**
   * Sahnani chin shaffof qilamiz, shunda canvas ortidagi sahifa foni (light/dark)
   * ko'rinadi va robot atrofida qora/oq blok qolmaydi.
   *
   * Muhim: public setBackgroundColor(...) rang normalizatoridan o'tadi va alpha'ni
   * har doim 1 (shaffofmas) qilib qo'yadi — string ham, obyekt ham foyda bermaydi
   * (obyektda setStyle xato berib, qora-opaque rang qaytadi; aynan shu sabab robot
   * orqasi qorayib qolardi). Shuning uchun faol sahifaning bgColor.a maydonini
   * to'g'ridan-to'g'ri 0 ga o'rnatamiz: render sikli clear-alpha sifatida shu
   * qiymatni o'qiydi (WebGL kontekst alpha:true bilan yaratilgan).
   */
  const handleLoad = (app: Application) => {
    try {
      // 1) bgColor mavjudligini kafolatlaymiz (rang ahamiyatsiz — alpha 0 bo'ladi).
      //    Public metod har doim opaque mr instance yaratib activePage'ga biriktiradi.
      app.setBackgroundColor("#0b0b12");
      // 2) O'sha bgColor'ning alpha'sini 0 ga tushiramiz — render clear-alpha shundan olinadi.
      const internal = app as unknown as {
        _scene?: { activePage?: { bgColor?: { a: number } } };
        _requestRenderAutoMode?: () => void;
      };
      const bg = internal._scene?.activePage?.bgColor;
      if (bg && typeof bg.a === "number") {
        bg.a = 0;
        internal._requestRenderAutoMode?.();
      }
    } catch {
      // Ichki tuzilma o'zgargan bo'lsa ham robot baribir ishlayveradi
    }
    onReady?.();
  };

  return (
    <Spline
      scene={SCENE_URL}
      onLoad={handleLoad}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    />
  );
}

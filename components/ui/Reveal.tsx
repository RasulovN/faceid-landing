"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Kechikish (soniyada) — ketma-ket paydo bo'lish uchun. */
  delay?: number;
  /** Yo'nalish: pastdan (default), chapdan, o'ngdan yoki faqat fade. */
  from?: "up" | "left" | "right" | "none";
  as?: "div" | "li" | "section";
}

const OFFSET = 24;

export function Reveal({ children, className, delay = 0, from = "up", as = "div" }: RevealProps) {
  const reduce = useReducedMotion();

  const initial =
    from === "none" || reduce
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: from === "up" ? OFFSET : 0,
          x: from === "left" ? -OFFSET : from === "right" ? OFFSET : 0,
        };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Ketma-ket bolalarni jonlantirish uchun konteyner + element variantlari. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

export default function Stats() {
  const { t } = useI18n();

  return (
    <section className="border-y border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
            {t.stats.title}
          </h2>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{t.stats.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {t.stats.items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08} className="text-center">
              <p className="bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-brand-400 dark:to-violet-400 sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { IconChart, IconTablet, IconUserPlus } from "@/components/icons";

const ICONS = [IconUserPlus, IconTablet, IconChart] as const;

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="qanday-ishlaydi" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {t.how.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t.how.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">{t.how.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.how.steps.map((step, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="relative h-full rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                  <span
                    aria-hidden
                    className="absolute right-6 top-6 text-5xl font-extrabold text-zinc-100 dark:text-zinc-800"
                  >
                    {i + 1}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-600/15 dark:text-brand-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-zinc-900 dark:text-white">
                    {i + 1}. {step.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

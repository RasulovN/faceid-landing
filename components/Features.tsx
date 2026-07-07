"use client";

import {
  IconActivity,
  IconBuildings,
  IconCalculator,
  IconMapPin,
  IconScale,
  IconScanFace,
  IconShieldCheck,
  IconSpreadsheet,
} from "@/components/icons";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";

const ICONS = [
  IconScanFace,
  IconMapPin,
  IconShieldCheck,
  IconCalculator,
  IconScale,
  IconActivity,
  IconSpreadsheet,
  IconBuildings,
] as const;

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="imkoniyatlar" className="bg-white py-20 dark:bg-zinc-900/50 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {t.features.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">{t.features.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={feature.title} delay={(i % 4) * 0.08}>
                <div className="group h-full rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-600/40 dark:hover:bg-zinc-800/60">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-600/15 dark:text-brand-400 dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                    <Icon className="h-[22px] w-[22px]" />
                  </div>
                  <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {feature.description}
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

"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { IconMonitor, IconScanFace, IconSmartphone } from "@/components/icons";

const ICONS = [IconMonitor, IconSmartphone, IconScanFace] as const;
const ACCENTS = [
  "from-brand-600 to-violet-600",
  "from-emerald-500 to-teal-600",
  "from-amber-500 to-orange-600",
] as const;

export default function Showcase() {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-24">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.showcase.items.map((item, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
                  <div
                    aria-hidden
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${ACCENTS[i]} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
                  />
                  <div
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${ACCENTS[i]} text-white shadow-lg`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="mt-6 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {item.description}
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

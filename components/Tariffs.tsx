"use client";

import { type Tariff } from "@/lib/tariffs";
import { daysToMonths, formatSum } from "@/lib/format";
import { REGISTER_URL } from "@/lib/urls";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { IconCheck } from "@/components/icons";

function isHighlighted(tariff: Tariff, index: number, total: number): boolean {
  if (tariff.name.toLowerCase().includes("business")) return true;
  return total >= 3 && index === Math.floor(total / 2);
}

export default function Tariffs({ tariffs }: { tariffs: Tariff[] }) {
  const { t } = useI18n();
  const hasBusiness = tariffs.some((x) => x.name.toLowerCase().includes("business"));

  const limitLines = (tariff: Tariff): string[] => [
    tariff.maxBranches >= 99 ? t.tariffs.unlimitedBranches : t.tariffs.branches(tariff.maxBranches),
    t.tariffs.employees(tariff.maxEmployees),
    t.tariffs.devices(tariff.maxDevices),
    t.tariffs.history(daysToMonths(tariff.historyRetentionDays)),
  ];

  return (
    <section id="tariflar" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {t.tariffs.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t.tariffs.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">{t.tariffs.subtitle}</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {tariffs.map((tariff, index) => {
            const highlighted = hasBusiness
              ? tariff.name.toLowerCase().includes("business")
              : isHighlighted(tariff, index, tariffs.length);
            return (
              <Reveal key={tariff.id} delay={index * 0.1}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:bg-zinc-900 ${
                    highlighted
                      ? "border-2 border-brand-600 bg-gradient-to-b from-brand-50/60 to-white dark:from-brand-600/10 dark:to-zinc-900 lg:-translate-y-2"
                      : "border-zinc-200 dark:border-zinc-800"
                  }`}
                >
                  {highlighted && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3.5 py-1 text-xs font-semibold text-white shadow-sm shadow-brand-600/30">
                      {t.tariffs.popular}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{tariff.name}</h3>
                  <p className="mt-1.5 min-h-[2.5rem] text-sm text-zinc-500 dark:text-zinc-400">
                    {tariff.description}
                  </p>
                  <p className="mt-5 flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                      {formatSum(tariff.priceMonthly)}
                    </span>
                    <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {t.tariffs.perMonth}
                    </span>
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {[...limitLines(tariff), ...tariff.features].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300"
                      >
                        <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={REGISTER_URL}
                    className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:shadow-md ${
                      highlighted
                        ? "bg-brand-600 text-white hover:bg-brand-700 hover:shadow-brand-600/30"
                        : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-600"
                    }`}
                  >
                    {t.actions.tryFree}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-400 dark:text-zinc-500">{t.tariffs.note}</p>
      </div>
    </section>
  );
}

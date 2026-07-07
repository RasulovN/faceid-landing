"use client";

import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { IconChevronDown } from "@/components/icons";

export default function Faq() {
  const { t } = useI18n();

  return (
    <section id="faq" className="bg-white py-20 dark:bg-zinc-900/50 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
            {t.faq.subtitlePre}{" "}
            <a href="#aloqa" className="font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">
              {t.faq.subtitleLink}
            </a>{" "}
            {t.faq.subtitlePost}
          </p>
        </Reveal>

        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <details className="group rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm transition-shadow open:bg-white open:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:open:bg-zinc-800/60">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-semibold text-zinc-900 dark:text-white [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <IconChevronDown className="h-5 w-5 shrink-0 text-zinc-400 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="px-6 pb-5 leading-relaxed text-zinc-500 dark:text-zinc-400">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import ContactForm from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { IconClock, IconMail, IconMapPin, IconPhone } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import type { SiteSettings } from "@/lib/site-settings";

export default function Contact({ settings }: { settings: SiteSettings }) {
  const { t } = useI18n();

  const items = [
    {
      icon: IconMail,
      label: t.contact.emailLabel,
      value: settings.contactEmail,
      href: settings.contactEmail ? `mailto:${settings.contactEmail}` : undefined,
    },
    {
      icon: IconPhone,
      label: t.contact.phoneLabel,
      value: settings.contactPhone,
      href: settings.contactPhone ? `tel:${settings.contactPhone.replace(/\s/g, "")}` : undefined,
    },
    { icon: IconMapPin, label: t.contact.addressLabel, value: settings.contactAddress, href: undefined },
    { icon: IconClock, label: t.contact.hoursLabel, value: settings.workingHours, href: undefined },
  ].filter((item) => item.value);

  return (
    <section id="aloqa" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">{t.contact.subtitle}</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-8 md:grid-cols-2">
          <Reveal from="left" className="space-y-4">
            {items.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-600/15 dark:text-brand-400">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-zinc-900 transition-colors hover:text-brand-600 dark:text-white dark:hover:text-brand-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-zinc-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <SocialLinks settings={settings} className="pt-1" />
          </Reveal>

          <Reveal from="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

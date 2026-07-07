import { socialLinks, type SiteSettings } from "@/lib/site-settings";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTelegram,
  IconTwitterX,
  IconYoutube,
} from "@/components/icons";
import type { SVGProps } from "react";

const ICONS: Record<string, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  telegram: IconTelegram,
  instagram: IconInstagram,
  facebook: IconFacebook,
  youtube: IconYoutube,
  linkedin: IconLinkedin,
  twitter: IconTwitterX,
};

const LABELS: Record<string, string> = {
  telegram: "Telegram",
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  twitter: "X (Twitter)",
};

export function SocialLinks({ settings, className = "" }: { settings: SiteSettings; className?: string }) {
  const links = socialLinks(settings);
  if (links.length === 0) return null;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {links.map(({ key, url }) => {
        const Icon = ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={LABELS[key]}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-brand-600/40 dark:hover:text-brand-400"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}

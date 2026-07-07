import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import CookieConsent from "@/components/CookieConsent";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

const TITLE = "FaceID Davomat — Yuz orqali avtomatik davomat tizimi";
const DESCRIPTION =
  "Xodimlar davomatini yuzni tanish orqali avtomatik nazorat qiling: kiosk planshet, mobil geo check-in, avtomatik oylik hisob-kitobi, jarima va bonuslar, real-time monitoring va Excel hisobotlar. 14 kun bepul sinov.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  category: "business",
  keywords: [
    "davomat tizimi",
    "yuzni tanish",
    "face id davomat",
    "xodimlar nazorati",
    "oylik hisob-kitobi",
    "attendance system",
    "O'zbekiston",
    "HR avtomatlashtirish",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: TITLE,
    description:
      "Kiosk planshet va mobil geo check-in orqali aldab bo'lmaydigan davomat nazorati. Oylik avtomatik hisoblanadi, hisobotlar bir tugma bilan tayyor.",
    locale: "uz_UZ",
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAFA" },
    { media: "(prefers-color-scheme: dark)", color: "#09090B" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={manrope.variable} suppressHydrationWarning>
      <body className="bg-zinc-50 font-sans text-zinc-900 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <Providers>
          {children}
          <CookieConsent />
          <AnalyticsTracker />
        </Providers>
      </body>
    </html>
  );
}

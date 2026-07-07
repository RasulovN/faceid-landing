import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),
  title: "FaceID Davomat — Yuz orqali avtomatik davomat tizimi",
  description:
    "Xodimlar davomatini yuzni tanish orqali avtomatik nazorat qiling: kiosk planshet, mobil geo check-in, avtomatik oylik hisob-kitobi, jarima va bonuslar, real-time monitoring va Excel hisobotlar. 14 kun bepul sinov.",
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
  openGraph: {
    title: "FaceID Davomat — Yuz orqali avtomatik davomat tizimi",
    description:
      "Kiosk planshet va mobil geo check-in orqali aldab bo'lmaydigan davomat nazorati. Oylik avtomatik hisoblanadi, hisobotlar bir tugma bilan tayyor.",
    locale: "uz_UZ",
    type: "website",
    url: "http://localhost:3001",
    siteName: "FaceID Davomat",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={manrope.variable} suppressHydrationWarning>
      <body className="bg-zinc-50 font-sans text-zinc-900 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

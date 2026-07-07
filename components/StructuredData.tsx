import { dictionaries } from "@/lib/i18n/dictionaries";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * JSON-LD strukturaviy ma'lumotlar (schema.org) — Google boy natijalari uchun:
 * Organization + WebSite + SoftwareApplication + FAQPage.
 * Server komponent: kontent asosiy (uz) lug'atdan build paytida olinadi.
 */
export default function StructuredData() {
  const uz = dictionaries.uz;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/apple-touch-icon.png`,
          width: 180,
          height: 180,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "uz",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: SITE_NAME,
        description:
          "Yuzni tanish orqali xodimlar davomatini avtomatik nazorat qiluvchi SaaS platforma: kiosk planshet, mobil geo check-in, avtomatik oylik hisob-kitobi va hisobotlar.",
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "UZS",
          description: "14 kun bepul sinov davri",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: uz.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify natijasi faqat bizning statik lug'atdan — XSS xavfi yo'q
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

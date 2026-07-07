# FaceID Davomat — Landing sahifa

"FaceID Davomat" SaaS mahsuloti uchun marketing landing sahifasi.
Next.js 14 (App Router) + TypeScript (strict) + Tailwind CSS 3.

## Ishga tushirish

```bash
pnpm install
cp .env.example .env.local   # kerak bo'lsa qiymatlarni o'zgartiring
pnpm dev                     # http://localhost:3001
```

Production build:

```bash
pnpm build
pnpm start                   # http://localhost:3001
```

## Muhit o'zgaruvchilari

| O'zgaruvchi | Tavsif | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Backend API bazaviy manzili | `http://localhost:3000/api/v1` |
| `NEXT_PUBLIC_COMPANY_PANEL_URL` | Kompaniya paneli (login/register) | `http://localhost:5174` |

## Tuzilishi

- `app/layout.tsx` — SEO metadata (uz), Inter font (next/font)
- `app/page.tsx` — bitta sahifa: Hero, Qanday ishlaydi, Imkoniyatlar, Tariflar, FAQ, Aloqa
- `app/actions.ts` — kontakt formasi uchun Server Action (hozircha payload'ni server logiga yozadi, backend'da endpoint tayyor bo'lganda API'ga ulanadi)
- `app/sitemap.ts`, `app/robots.ts` — SEO fayllar
- `components/` — barcha bo'lim komponentlari, inline SVG ikonkalar (`icons.tsx`)
- `lib/tariffs.ts` — tariflarni olish + fallback ma'lumotlar
- `lib/format.ts` — pul (tiyin → so'm) va muddat formatlash

## Tariflar bo'limi haqida

`Tariffs` — server komponent. U `GET ${NEXT_PUBLIC_API_URL}/tariffs` so'rovini
`revalidate: 300` (5 daqiqa kesh) bilan yuboradi, `{ success, data, error }`
konvertini ochadi, faqat `isActive` tariflarni `sortOrder` bo'yicha ko'rsatadi.

Backend ishlamasa yoki xato qaytarsa, sahifa buzilmaydi — `lib/tariffs.ts`
ichidagi statik zaxira tariflar (Start / Business / Enterprise) ko'rsatiladi.
Narxlar tiyinda saqlanadi va `499 000 so'm` ko'rinishida formatlanadi.
# faceid-landing

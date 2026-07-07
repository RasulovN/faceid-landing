import { RAW_SITE_URL } from "./env";

/**
 * Saytning kanonik (production) manzili — SEO metadata, sitemap, robots va
 * JSON-LD hammasi shu qiymatdan oladi (.env: NEXT_PUBLIC_SITE_URL).
 * Deploy'da haqiqiy domenga o'rnating (masalan https://faceid.uz).
 */
export const SITE_URL = RAW_SITE_URL;

export const SITE_NAME = "FaceID Davomat";

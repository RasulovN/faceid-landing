import { API_URL } from "./api-url";

export interface Tariff {
  id: string;
  name: string;
  description: string;
  /** Oylik narx, tiyinda (1 so'm = 100 tiyin) */
  priceMonthly: number;
  maxBranches: number;
  maxEmployees: number;
  maxDevices: number;
  historyRetentionDays: number;
  features: string[];
  isActive: boolean;
  sortOrder: number;
}

interface ApiEnvelope<T> {
  success: boolean;
  data: T | null;
  error: { code: string; message: string } | null;
}

/**
 * Backend ishlamay qolgan holatda ko'rsatiladigan zaxira (fallback) tariflar.
 * Narxlar tiyinda saqlanadi: 19_900_000 tiyin = 199 000 so'm.
 */
export const FALLBACK_TARIFFS: Tariff[] = [
  {
    id: "fallback-start",
    name: "Start",
    description: "Kichik jamoalar uchun: bitta filial, asosiy davomat nazorati.",
    priceMonthly: 19_900_000,
    maxBranches: 1,
    maxEmployees: 15,
    maxDevices: 1,
    historyRetentionDays: 90,
    features: ["FaceID kiosk", "Excel hisobotlar", "Telegram xabarnomalar"],
    isActive: true,
    sortOrder: 1,
  },
  {
    id: "fallback-business",
    name: "Business",
    description: "O'sayotgan kompaniyalar uchun: bir nechta filial va to'liq avtomatlashtirish.",
    priceMonthly: 49_900_000,
    maxBranches: 3,
    maxEmployees: 50,
    maxDevices: 3,
    historyRetentionDays: 365,
    features: [
      "FaceID kiosk + mobil geo check-in",
      "Avtomatik oylik hisob-kitobi",
      "Jarima va bonus qoidalari",
      "Excel hisobotlar",
    ],
    isActive: true,
    sortOrder: 2,
  },
  {
    id: "fallback-enterprise",
    name: "Enterprise",
    description: "Yirik tarmoqlar uchun: cheksiz filiallar va kengaytirilgan qo'llab-quvvatlash.",
    priceMonthly: 120_000_000,
    maxBranches: 999,
    maxEmployees: 200,
    maxDevices: 10,
    historyRetentionDays: 1095,
    features: [
      "Barcha Business imkoniyatlari",
      "Shaxsiy menejer",
      "Ustuvor texnik yordam",
      "API integratsiya",
    ],
    isActive: true,
    sortOrder: 3,
  },
];

/**
 * Tariflarni backend'dan oladi. Server ishlamasa yoki javob noto'g'ri bo'lsa,
 * statik zaxira tariflar qaytariladi — sahifa hech qachon bo'sh qolmaydi.
 */
export async function getTariffs(): Promise<Tariff[]> {
  try {
    const res = await fetch(`${API_URL}/tariffs`, { next: { revalidate: 300 } });
    if (!res.ok) {
      return FALLBACK_TARIFFS;
    }
    const json = (await res.json()) as ApiEnvelope<Tariff[]>;
    if (!json.success || !Array.isArray(json.data) || json.data.length === 0) {
      return FALLBACK_TARIFFS;
    }
    return json.data
      .filter((t) => t.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder);
  } catch {
    return FALLBACK_TARIFFS;
  }
}

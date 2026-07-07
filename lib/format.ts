/**
 * Pul formatlash: tiyin -> so'm, minglik ajratgich sifatida bo'sh joy.
 * Misol: 49_900_000 tiyin -> "499 000"
 */
export function formatSum(tiyin: number): string {
  const som = Math.round(tiyin / 100);
  return som.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** Tarix saqlash muddati: kun -> oy (taxminan 30 kun = 1 oy). */
export function daysToMonths(days: number): number {
  return Math.max(1, Math.round(days / 30));
}

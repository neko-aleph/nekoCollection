import type { TitleDate } from "../types/title.ts";

export function formatDate(date: TitleDate) {
  return date.year && date.month && date.day
    ? `${date.year}-${String(date.month).padStart(2, "0")}-${String(date.day).padStart(2, "0")}`
    : "Unknown";
}

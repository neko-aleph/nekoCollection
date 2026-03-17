import type { TitleName } from "../types/title.ts";

export function formatTitle(title: TitleName) {
  return title.romaji || title.english || title.native || "Unknown";
}

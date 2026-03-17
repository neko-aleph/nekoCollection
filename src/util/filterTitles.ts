import type { BaseTitle } from "../types/title.ts";

export function filterTitles<T extends BaseTitle>(titles: T[]) {
  return titles.filter(
    (title) => title && title.type && title.type !== "NOVEL",
  );
}

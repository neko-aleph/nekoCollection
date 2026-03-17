import { useApi } from "../api/client.ts";
import type { MangaTitle } from "../types/title.ts";

export function useManga(titleId: string, source: string) {
  return useApi<MangaTitle>(
    `/meta/anilist-manga/info/${titleId}?provider=${source}`,
  ).json();
}

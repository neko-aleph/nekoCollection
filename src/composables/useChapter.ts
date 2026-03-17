import { useApi } from "../api/client.ts";
import type { Page } from "../types/media.ts";

export function useChapter(source: string, chapterId: string) {
  return useApi<Page[]>(
    `/meta/anilist-manga/read?chapterId=${chapterId}&provider=${source}`,
  ).json();
}

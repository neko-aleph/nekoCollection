import { useApi } from "../api/client.ts";
import type { SearchResult } from "../types/searchResult.ts";

export function useTrendingManga() {
  return useApi<SearchResult>(`/meta/anilist-manga/trending?perPage=22`).json();
}

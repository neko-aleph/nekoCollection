import { useApi } from "../api/client.ts";
import type { SearchResult } from "../types/searchResult.ts";

export function useTrendingAnime() {
  return useApi<SearchResult>(`/meta/anilist/trending?perPage=22`).json();
}

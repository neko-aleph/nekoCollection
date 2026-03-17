import { useApi } from "../api/client.ts";
import type { SearchResult } from "../types/searchResult.ts";

export function usePopularAnime() {
  return useApi<SearchResult>(`/meta/anilist/popular?perPage=22`).json();
}

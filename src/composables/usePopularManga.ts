import { useApi } from "../api/client.ts";
import type { SearchResult } from "../types/searchResult.ts";

export function usePopularManga() {
  return useApi<SearchResult>(`/meta/anilist-manga/popular?perPage=22`).json();
}

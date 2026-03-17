import type { BaseTitle } from "./title.ts";

export interface SearchResult {
  currentPage: number;
  hasNextPage: boolean;
  results: TitleResult[];
}

export interface TitleResult extends BaseTitle {
  popularity: string;
  description: string;
  genres: string[];
  color: string;
  totalEpisodes: number;
  currentEpisodeCount: number;
  releaseDate: number;
}

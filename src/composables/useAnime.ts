import { useApi } from "../api/client.ts";
import type { Title } from "../types/title.ts";

export function useAnime(titleId: string) {
  return useApi<Title>(`/meta/anilist/info/${titleId}`).json();
}

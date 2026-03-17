import { ref } from "vue";
import { useApi } from "../api/client.ts";
import type { SearchResult, TitleResult } from "../types/searchResult.ts";
import { filterTitles } from "../util/filterTitles.ts";

export function useSearch(query: string, isManga: boolean) {
  const titles = ref<TitleResult[]>([]);
  const page = ref(1);
  const hasNextPage = ref(true);
  const isFetching = ref(false);

  const loadMore = async () => {
    if (!query || !hasNextPage.value || isFetching.value) return;

    isFetching.value = true;
    const { data, isFinished } = await useApi<SearchResult>(
      () =>
        `/meta/${isManga ? "anilist-manga" : "anilist"}/${encodeURIComponent(query)}?page=${page.value}&perPage=50`,
      { refetch: true },
    )
      .get()
      .json();

    if (data.value && isFinished.value) {
      titles.value.push(...filterTitles<TitleResult>(data.value.results));
      page.value++;
      hasNextPage.value = data.value.hasNextPage;
    }

    isFetching.value = false;
  };

  loadMore();

  return {
    titles,
    loadMore,
  };
}

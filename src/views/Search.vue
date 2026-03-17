<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { useTemplateRef } from "vue";
import { useRoute } from "vue-router";
import Placeholder from "../components/Placeholder.vue";
import SearchResultLink from "../components/SearchResultLink.vue";
import { useSearch } from "../composables/useSearch.ts";
import { formatTitle } from "../util/formatTitle.ts";

const sentinel = useTemplateRef("sentinel");

const route = useRoute();
const { titles, loadMore } = useSearch(
  route.params.query as string,
  (route.params.format as string).toLowerCase() === "manga",
);

useIntersectionObserver(sentinel, async ([entry]) => {
  if (entry?.isIntersecting) await loadMore();
});
</script>

<template>
  <div class="content">
    <div v-if="titles.length" class="search-results">
      <SearchResultLink
        v-for="title in titles"
        :key="title.id"
        :title="formatTitle(title.title)"
        :titleId="title.id"
        :format="route.params.format as string"
        :image="title.image"
      />
      <div ref="sentinel" class="sentinel" />
    </div>
    <Placeholder v-else :width="1200" :height="384" />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search-results {
  width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.sentinel {
  height: 10px;
}

@media (max-width: 1219px) {
  .search-results {
    width: calc(100vw - 20px);
    flex-direction: column;
    gap: 5px;
    flex-wrap: nowrap;
  }

  .content {
    width: 100vw;
  }
}
</style>

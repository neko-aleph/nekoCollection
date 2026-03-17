<script setup lang="ts">
import { useRoute } from "vue-router";
import type { TitleChapter } from "../types/title.ts";
import BaseButton from "./BaseButton.vue";

defineProps<{
  chapters: TitleChapter[];
}>();

const route = useRoute();
</script>

<template>
  <div class="chapters-list">
    <RouterLink
      v-for="chapter in chapters"
      :key="chapter.id"
      :to="`/manga/${route.params.titleId}/${route.params.source}/chapter/${encodeURIComponent(chapter.id)}`"
    >
      <BaseButton class="chapter-button">
        <span>
          {{
            route.params.source === "mangahere"
              ? chapter.title
              : chapter.chapterNumber && chapter.title
                ? `Ch. ${chapter.chapterNumber} - ${chapter.title}`
                : chapter.chapterNumber
                  ? `Ch. ${chapter.chapterNumber}`
                  : chapter.title
          }}
        </span>
      </BaseButton>
    </RouterLink>
  </div>
</template>

<style scoped>
.chapters-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.chapter-button {
  width: 842px;
  text-align: left;
  padding-left: 10px;
  padding-right: 20px;
}

@media (max-width: 1219px) {
  .chapter-button {
    width: calc(100vw - 20px);
    max-width: 400px;
  }
}
</style>

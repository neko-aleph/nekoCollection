<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { TitleChapter } from "../types/title.ts";
import BaseSelect from "./BaseSelect.vue";
import ScrollButton from "./ScrollButton.vue";

const modelValue = defineModel<number>();

const props = defineProps<{
  chapters: TitleChapter[];
}>();

const route = useRoute();
const router = useRouter();

function chapterName(chapter: TitleChapter | undefined) {
  if (chapter === undefined) return "Unknown";
  return route.params.source === "mangahere"
    ? chapter.title
    : chapter.chapterNumber && chapter.title
      ? `Ch. ${chapter.chapterNumber} - ${chapter.title}`
      : chapter.chapterNumber
        ? `Ch. ${chapter.chapterNumber}`
        : chapter.title;
}

function pushChapter(index: number) {
  if (props.chapters[index] !== undefined) {
    router.push(
      `/manga/${route.params.titleId}/${route.params.source}/chapter/${encodeURIComponent(props.chapters[index].id)}`,
    );
  }
}

watch(modelValue, (newIndex) => {
  if (newIndex !== undefined) {
    pushChapter(newIndex);
  }
});

const currentChapter = computed(() => {
  return props.chapters.findIndex(
    (chapter) => chapter.id === route.params.chapterId,
  );
});
</script>

<template>
  <div class="chapter-select-container">
    <BaseSelect
      :items="chapters.map((chapter) => chapterName(chapter))"
      mode="index"
      class="chapter-select"
      :default="currentChapter"
      v-model="modelValue"
    />
    <div class="scroll-buttons">
      <ScrollButton direction="left" @click="pushChapter(currentChapter - 1)" />
      <ScrollButton
        direction="right"
        @click="pushChapter(currentChapter + 1)"
      />
    </div>
  </div>
</template>

<style scoped>
.chapter-select-container {
  width: 530px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chapter-select {
  width: 530px;
}

.scroll-buttons {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

@media (max-width: 1219px) {
  .chapter-select-container .chapter-select {
    width: min(calc(100vw - 20px), 400px);
  }
}
</style>

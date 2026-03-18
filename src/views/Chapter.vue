<script setup lang="ts">
import { useRoute } from "vue-router";
import BackButton from "../components/BackButton.vue";
import ChapterPage from "../components/ChapterPage.vue";
import ChapterSelectCompact from "../components/ChapterSelectCompact.vue";
import Placeholder from "../components/Placeholder.vue";
import { useChapter } from "../composables/useChapter.ts";
import { useManga } from "../composables/useManga.ts";
import { formatTitle } from "../util/formatTitle.ts";

const route = useRoute();

const pages = useChapter(
  route.params.source as string,
  route.params.chapterId as string,
);
const title = useManga(
  route.params.titleId as string,
  route.params.source as string,
);
</script>

<template>
  <div class="content">
    <div class="column controls">
      <BackButton
        v-if="title.data.value && title.isFinished.value"
        :title="formatTitle(title.data.value.title)"
      />
      <Placeholder v-else :width="250" :height="20" />
      <ChapterSelectCompact
        v-if="title.data.value && title.isFinished.value"
        :chapters="title.data.value.chapters"
      />
      <div v-else class="chapter-select-placeholder">
        <Placeholder :width="530" :height="32" />
        <Placeholder :width="69" :height="32" />
      </div>
    </div>
    <div class="column pages">
      <ChapterPage
        v-if="pages.data.value && pages.isFinished.value"
        v-for="page in pages.data.value"
        :key="page.page"
        :image="page.img"
        :referer="page.headerForImage ? page.headerForImage.Referer : undefined"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.column {
  display: flex;
  flex-direction: column;
}

.controls {
  width: 530px;
  gap: 10px;
}

.pages {
  gap: 0;
  outline: 1px solid var(--bd0);
  outline-offset: -1px;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: scroll;
  width: 650px;
  flex-shrink: 0;
  height: calc(100vh - 192px);
  background: var(--bg1);
  background-image: linear-gradient(
    to right,
    var(--bg1) 0%,
    var(--wv0) 20%,
    var(--bg1) 40%,
    var(--bg1) 100%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: shimmer 0.75s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.chapter-select-placeholder {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media (max-width: 1239px) {
  .content {
    flex-direction: column;
    width: 100vw;
    align-items: center;
  }

  .pages {
    width: min(calc(100vw - 40px), 400px);
    height: calc(100vh - 190px);
  }

  .controls {
    width: min(calc(100vw - 40px), 400px);
  }
}
</style>

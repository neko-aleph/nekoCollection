<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import ChapterSelect from "../components/ChapterSelect.vue";
import Empty from "../components/Empty.vue";
import Heading from "../components/Heading.vue";
import Placeholder from "../components/Placeholder.vue";
import SiteButton from "../components/SiteButton.vue";
import SourceSelectButtons from "../components/SourceSelectButtons.vue";
import TitleCover from "../components/TitleCover.vue";
import TitleDescription from "../components/TitleDescription.vue";
import TitleLinks from "../components/TitleLinks.vue";
import TitleProperties from "../components/TitleProperties.vue";
import { useManga } from "../composables/useManga.ts";
import type { Recommendation, Relation } from "../types/title.ts";
import { filterTitles } from "../util/filterTitles.ts";
import { formatDate } from "../util/formatDate.ts";
import { formatTitle } from "../util/formatTitle.ts";

const route = useRoute();
const { data, isFinished } = useManga(
  route.params.titleId as string,
  route.params.source as string,
);

const filteredRelations = computed(() =>
  data.value?.relations ? filterTitles<Relation>(data.value.relations) : [],
);

const filteredRecommendations = computed(() =>
  data.value?.recommendations
    ? filterTitles<Recommendation>(data.value.recommendations)
    : [],
);
</script>

<template>
  <div class="content">
    <div class="column">
      <div class="title">
        <TitleCover
          v-if="data && isFinished"
          :image="data.image"
          size="large"
        />
        <Placeholder v-else :width="180" :height="270" />
        <div class="title-info">
          <Heading v-if="data && isFinished" size="large">
            {{ formatTitle(data.title) }}
          </Heading>
          <Placeholder v-else :width="250" :height="32" :margin-top="10" />
          <TitleProperties
            v-if="data && isFinished"
            :status="data.status || 'Unknown'"
            :start-date="formatDate(data.startDate)"
            :end-date="formatDate(data.endDate)"
            :score="data.rating?.toString() || 'Unknown'"
            :genres="data.genres || undefined"
            :year="data.startDate.year || 'Unknown'"
          />
          <Placeholder v-else :width="460" :height="32" />
          <TitleDescription
            v-if="data && isFinished"
            :text="data.description?.replace(/<br><br>/g, '<br>')"
            size="small"
            class="manga-description"
          />
          <Placeholder v-else :width="642" :height="112" :margin-top="5" />
          <SourceSelectButtons
            v-if="data && isFinished"
            class="chapter-source"
            format="manga"
            :sources="['MangaHere', 'MangaDex']"
          />
          <Placeholder v-else :width="177" :height="53" />
        </div>
      </div>
      <div v-if="data?.chapters?.length && isFinished" class="chapters">
        <ChapterSelect :chapters="data.chapters" />
      </div>
      <Empty v-else-if="data?.chapters && isFinished" />
      <Placeholder v-else :width="842" :height="32" />
    </div>
    <div class="column" v-if="data && isFinished">
      <TitleLinks
        v-if="filteredRelations.length"
        link-type="Relations"
        :links="filteredRelations"
      />
      <TitleLinks
        v-if="filteredRecommendations.length"
        link-type="Recommendations"
        :links="filteredRecommendations"
      />
      <div class="external-links">
        <SiteButton
          site="AniList"
          :link="`https://anilist.co/manga/${data.id}`"
        />
        <SiteButton
          site="MyAnimeList"
          :link="`https://myanimelist.net/manga/${data.malId}`"
        />
      </div>
    </div>
    <Placeholder v-else :width="338" :height="228" />
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
  gap: 10px;
}

.title {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 842px;
}

.title-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
}

.chapter-source {
  position: absolute;
  bottom: 0;
}

.external-links {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 338px;
  flex-wrap: wrap;
}

@media (max-width: 1219px) {
  .content {
    flex-direction: column;
    width: 100vw;
    align-items: center;
  }

  .column {
    align-items: center;
  }

  .title {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .title-info {
    align-items: center;
  }

  .chapter-source {
    position: static;
    width: 100%;
  }

  .external-links {
    width: min(calc(100vw - 20px), 400px);
    flex-direction: column;
    flex-wrap: nowrap;
  }
}
</style>

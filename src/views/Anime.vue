<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import EpisodePlayer from "../components/EpisodePlayer.vue";
import EpisodeSelect from "../components/EpisodeSelect.vue";
import EpisodeSelectCompact from "../components/EpisodeSelectCompact.vue";
import Heading from "../components/Heading.vue";
import Placeholder from "../components/Placeholder.vue";
import SiteButton from "../components/SiteButton.vue";
import SourceSelectButtons from "../components/SourceSelectButtons.vue";
import TitleCover from "../components/TitleCover.vue";
import TitleDescription from "../components/TitleDescription.vue";
import TitleLinks from "../components/TitleLinks.vue";
import TitleProperties from "../components/TitleProperties.vue";
import TitleTags from "../components/TitleTags.vue";
import { useAnime } from "../composables/useAnime.ts";
import type { Recommendation, Relation } from "../types/title.ts";
import { filterTitles } from "../util/filterTitles.ts";
import { formatDate } from "../util/formatDate.ts";
import { formatFormat } from "../util/formatFormat.ts";
import { formatTitle } from "../util/formatTitle.ts";

const route = useRoute();
const { data, isFinished } = useAnime(route.params.titleId as string);
const selectedEpisode = ref(0);

const isMobile = useMediaQuery("(max-width: 1219px)");

function incrementEpisode() {
  if (selectedEpisode.value < data.value.episodes.length - 1) {
    selectedEpisode.value++;
  }
}

const season = computed(() =>
  data.value.season == null || data.value.releaseDate == null
    ? "Unknown"
    : `${data.value.season.charAt(0).toUpperCase()}${data.value.season.slice(1).toLowerCase()} ${data.value.releaseDate}`,
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
      <div v-if="!isMobile" class="player-layout">
        <EpisodePlayer
          :episode-number="selectedEpisode + 1"
          :episodes-fetched="data?.episodes?.length"
          @episode-ended="incrementEpisode"
        />
        <EpisodeSelect
          v-if="data?.episodes && isFinished"
          v-model="selectedEpisode"
          :episodes="data.episodes"
        />
        <Placeholder v-else :width="150" :height="384" />
      </div>
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
            :format="formatFormat(data.type)"
            :episodes="data.totalEpisodes?.toString() || 'Unknown'"
            :status="data.status || 'Unknown'"
            :start-date="formatDate(data.startDate)"
            :end-date="formatDate(data.endDate)"
            :season="season"
            :score="data.rating?.toString() || 'Unknown'"
          />
          <Placeholder v-else :width="460" :height="32" />
          <TitleDescription
            v-if="data && isFinished"
            :text="data.description?.replace(/<br><br>/g, '<br>')"
            size="large"
          />
          <Placeholder v-else :width="642" :height="160" :margin-top="5" />
        </div>
      </div>
    </div>
    <div class="column">
      <SourceSelectButtons
        v-if="data && isFinished"
        format="anime"
        :sources="['HD-1', 'HD-2']"
        class="episode-source"
      />
      <Placeholder v-else :width="177" :height="53" />
      <div v-if="isMobile" class="player-layout">
        <EpisodePlayer
          :episode-number="selectedEpisode + 1"
          :episodes-fetched="data?.episodes?.length"
          @episode-ended="incrementEpisode"
        />
        <EpisodeSelectCompact
          v-if="data?.episodes && isFinished"
          v-model="selectedEpisode"
          :episodes="data.episodes"
        />
        <Placeholder v-else :width="400" :height="32" />
      </div>
      <TitleTags
        v-if="data && isFinished && data.studios && data.genres"
        :studios="data.studios"
        :genres="data.genres"
      />
      <Placeholder v-else-if="!data || !isFinished" :width="338" :height="89" />
      <div v-if="data && isFinished" class="column">
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
            :link="`https://anilist.co/anime/${data.id}`"
          />
          <SiteButton
            site="MyAnimeList"
            :link="`https://myanimelist.net/anime/${data.malId}`"
          />
        </div>
      </div>
      <Placeholder v-else :width="338" :height="425" />
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
  gap: 20px;
}

.player-layout {
  display: flex;
  flex-direction: row;
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

  .episode-source {
    position: static;
    width: min(calc(100vw - 20px), 400px);
  }

  .external-links {
    width: min(calc(100vw - 20px), 400px);
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .player-layout {
    flex-direction: column;
  }
}
</style>

<script setup lang="ts">
import { useMobile } from "../composables/useMobile.ts";
import TitleProperty from "./TitleProperty.vue";

defineProps<{
  format?: string;
  episodes?: string;
  status: string;
  startDate: string;
  endDate: string;
  season?: string;
  score: string;
  genres?: string[];
  year?: number;
}>();

const isMobile = useMobile();
</script>

<template>
  <div v-if="!isMobile" class="title-properties">
    <TitleProperty v-if="format" label="Format">{{ format }}</TitleProperty>
    <TitleProperty v-if="episodes" label="Episodes">{{
      episodes
    }}</TitleProperty>
    <TitleProperty label="Status">{{ status }}</TitleProperty>
    <TitleProperty label="Start date">{{ startDate }}</TitleProperty>
    <TitleProperty label="End date">{{ endDate }}</TitleProperty>
    <TitleProperty v-if="season" label="Season">{{ season }}</TitleProperty>
    <TitleProperty label="Score">{{ score }}</TitleProperty>
    <TitleProperty v-if="genres" label="Genres" class="genres">{{
      genres.join(", ")
    }}</TitleProperty>
  </div>
  <span v-else>{{
    season ? `${format}・${status}・${season}` : `${status}・${year}`
  }}</span>
</template>

<style scoped>
.title-properties {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.genres {
  max-width: 300px;
}
</style>

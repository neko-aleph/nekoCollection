<script setup lang="ts">
import TitleProperty from "./TitleProperty.vue";

defineProps<{
  studios: string[];
  genres: string[];
}>();
</script>

<template>
  <div class="title-tags">
    <TitleProperty label="Studios">{{
      studios.length ? studios.join(", ") : "Unknown"
    }}</TitleProperty>
    <TitleProperty label="Genres">{{
      genres.length ? genres.join(", ") : "Unknown"
    }}</TitleProperty>
  </div>
</template>

<style scoped>
.title-tags {
  width: 338px;
  padding: 10px;
  border: 1px solid var(--bd0);
  border-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

@media (max-width: 1219px) {
  .title-tags {
    width: min(calc(100vw - 20px), 400px);
  }
}
</style>

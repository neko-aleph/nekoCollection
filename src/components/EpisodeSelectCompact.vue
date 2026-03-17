<script setup lang="ts">
import type { TitleEpisode } from "../types/title.ts";
import BaseSelect from "./BaseSelect.vue";

const modelValue = defineModel<number>({ default: 0 });

defineProps<{
  episodes: TitleEpisode[];
}>();
</script>

<template>
  <BaseSelect
    class="episodes"
    v-model="modelValue"
    mode="index"
    :items="episodes.map((_, index) => `Episode ${index + 1}`)"
  />
</template>

<style scoped>
.episodes {
  width: min(calc(100vw - 20px), 400px);
}
</style>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import BaseSelect from "./BaseSelect.vue";

const modelValue = defineModel<string>();
const route = useRoute();

watch(
  () => route.fullPath,
  (newPath) =>
    (modelValue.value = newPath.includes("/manga/") ? "Manga" : "Anime"),
);
</script>

<template>
  <BaseSelect
    v-model="modelValue"
    :items="['Anime', 'Manga']"
    mode="string"
    class="format-select"
  />
</template>

<style scoped>
.format-select {
  width: 76px;
}
</style>

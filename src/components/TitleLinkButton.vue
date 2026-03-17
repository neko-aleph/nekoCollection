<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

defineProps<{
  titleId: string;
  format: string;
}>();
</script>

<template>
  <RouterLink
    :to="
      format === 'MANGA'
        ? `/manga/${titleId}/mangahere`
        : `/anime/${titleId}/hd-1`
    "
  >
    <BaseButton class="title-link-button">Open</BaseButton>
  </RouterLink>
</template>

<style scoped>
.title-link-button {
  width: 154px;
}
</style>

<script setup lang="ts">
import { useRoute } from "vue-router";

defineProps<{
  title: string;
}>();

const route = useRoute();
</script>

<template>
  <RouterLink
    :to="`/manga/${route.params.titleId}/${route.params.source}`"
    class="back-button"
  >
    <span class="material-symbols-outlined"> arrow_back </span>
    <span class="title">
      {{ title }}
    </span>
  </RouterLink>
</template>

<style scoped>
.back-button {
  display: flex;
  flex-direction: row;
  gap: 0;
  text-decoration: none;
  transition: text-decoration-color 0.2s ease;
  align-items: center;
}

.material-symbols-outlined {
  font-size: 20px;
}

.title {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 510px;
}

.back-button:visited {
  color: var(--fg0);
}
</style>

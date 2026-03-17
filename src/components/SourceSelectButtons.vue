<script setup lang="ts">
import SourceSelectButton from "./SourceSelectButton.vue";

defineProps<{
  format: string;
  sources: string[];
}>();
</script>

<template>
  <div class="source-select">
    <span class="label">{{
      format.toLowerCase() === "anime" ? "Episode source" : "Chapter source"
    }}</span>
    <div class="source-select-buttons">
      <SourceSelectButton
        v-for="source in sources"
        :key="source"
        :source="source"
        :format="format"
      />
    </div>
  </div>
</template>

<style scoped>
.source-select {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.source-select-buttons {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
</style>

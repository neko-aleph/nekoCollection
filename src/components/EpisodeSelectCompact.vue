<script setup lang="ts">
import BaseSelect from "./BaseSelect.vue";

const modelValue = defineModel<number>({ default: 0 });

defineProps<{
  episodes: number;
}>();
</script>

<template>
  <BaseSelect
    class="episodes"
    v-model="modelValue"
    mode="index"
    :items="Array.from({ length: episodes }, (_, i) => `Episode ${i + 1}`)"
  />
</template>

<style scoped>
.episodes {
  width: min(calc(100vw - 40px), 400px);
}
</style>

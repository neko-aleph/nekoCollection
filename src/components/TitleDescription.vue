<script setup lang="ts">
defineProps<{
  text: string;
  size: string;
}>();
</script>

<template>
  <p v-html="text" :class="size"></p>
</template>

<style scoped>
p {
  margin: 5px 0 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
}

.small {
  -webkit-line-clamp: 7 !important;
}

@media (max-width: 1239px) {
  p {
    width: min(calc(100vw - 40px), 400px);
  }
}
</style>

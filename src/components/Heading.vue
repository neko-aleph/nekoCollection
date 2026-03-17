<script setup lang="ts">
defineProps<{
  size: string;
}>();
</script>

<template>
  <h1 :class="size">
    <slot />
  </h1>
</template>

<style scoped>
h1 {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin: 10px 0 0;
}

.small {
  font-size: 12px;
  line-height: 16px;
  line-clamp: 1;
  text-overflow: ellipsis;
  white-space: normal;
  word-break: break-word;
}

.large {
  font-size: 24px;
  line-height: 32px;
}

@media (max-width: 1219px) {
  h1 {
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
}
</style>

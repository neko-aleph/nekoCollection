<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="title-property">
    <span class="title-property-label">
      {{ label }}
    </span>
    <span class="title-property-value">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.title-property {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.title-property-value {
  font-weight: 600;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

<script setup lang="ts">
import BaseButton from "./BaseButton.vue";

defineProps<{
  direction: string;
}>();
</script>

<template>
  <BaseButton class="scroll-button material-symbols-outlined icon-override">
    {{ direction === "left" ? "chevron_left" : "chevron_right" }}
  </BaseButton>
</template>

<style scoped>
.scroll-button {
  font-family: "Material Symbols Outlined", sans-serif !important;
  height: 32px;
  width: 32px;
  background: var(--bg0);
  border: 1px solid var(--bd0);
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 20px;
}

@media (max-width: 1239px) {
  .scroll-button {
    height: 40px;
    width: 40px;
  }
}
</style>

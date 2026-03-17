<script setup lang="ts"></script>

<template>
  <div class="icon">
    <slot />
  </div>
</template>

<style scoped>
.icon {
  height: 20px;
  width: 20px;
  background: var(--bg0);
  border: 1px solid var(--bd0);
  border-radius: 2px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

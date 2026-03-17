<script setup lang="ts"></script>

<template>
  <button class="base-button"><slot /></button>
</template>

<style scoped>
.base-button {
  font-family: var(--font-sans), sans-serif;
  font-size: 12px;
  height: 32px;
  background: var(--bg0);
  color: var(--fg0);
  border: 1px solid var(--bd0);
  border-radius: 8px;
  box-sizing: border-box;
  transition: background 0.2s ease-in-out;
}

.base-button:hover {
  background: var(--bg1);
}

.base-button:active {
  background: var(--bg2);
}
</style>

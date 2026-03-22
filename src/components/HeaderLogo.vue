<script setup lang="ts">
import logoUrl from "../assets/logo.svg";
</script>

<template>
  <RouterLink to="/" class="link">
    <div class="logo">
      <img :src="logoUrl" alt="logo" />
      <span>ねこコレ</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.link {
  text-decoration: none;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
}

img {
  height: 32px;
  width: 32px;
  border-radius: 4px;
  user-select: none;
}

span {
  font-family: var(--font-jp), sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--fg0);
}
</style>

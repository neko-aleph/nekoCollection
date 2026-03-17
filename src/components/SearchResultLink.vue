<script setup lang="ts">
import TitleCover from "./TitleCover.vue";

defineProps<{
  titleId: string;
  format: string;
  image: string;
  title: string;
}>();
</script>

<template>
  <RouterLink
    :to="`/${format.toLowerCase()}/${titleId}/${format.toLowerCase() === 'manga' ? 'mangahere' : 'hd-1'}`"
    class="search-result"
  >
    <TitleCover :image="image" size="small" class="title-cover" />
    <span class="title-name">{{ title }}</span>
  </RouterLink>
</template>

<style scoped>
.search-result {
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 187px;
  width: 100px;
  text-decoration: none;
  color: var(--fg0);
}

.search-result:visited {
  color: var(--fg0);
}

.search-result:hover .title-cover {
  transform: translate(0, -5px);
  outline: 2px solid var(--fg0);
}

.title-cover {
  outline: 1px solid transparent;
  outline-offset: -1px;
  transition:
    transform 0.2s ease-in-out,
    outline 0.2s ease-in-out;
}

.title-name {
  width: 100px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
}

@media (max-width: 1219px) {
  .search-result {
    height: 52px;
    width: calc(100vw - 20px);
    max-width: 400px;
    gap: 10px;
    flex-direction: row;
    outline: 1px solid var(--bd0);
    border-radius: 8px;
    outline-offset: -1px;
  }

  .search-result:hover {
    background: var(--bg1);
  }

  .search-result:hover .title-cover {
    transform: none !important;
    outline: 1px solid transparent !important;
  }

  .title-cover {
    height: 52px;
    width: 36px;
    border-radius: 8px 0 0 8px;
    box-sizing: border-box;
  }

  .title-name {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 20px;
    align-self: center;
  }
}
</style>

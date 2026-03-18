<script setup lang="ts">
import { useMagicKeys, whenever } from "@vueuse/core";
import { ref, useTemplateRef } from "vue";
import { useRouter } from "vue-router";
import KeyIcon from "./KeyIcon.vue";

const props = defineProps<{
  format: string;
}>();

const keys = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "/" && e.type === "keydown") {
      e.preventDefault();
    }
  },
});

const router = useRouter();
const query = ref<string>("");
const searchBar = useTemplateRef("searchBar");

const search = () => {
  router.push(
    `/search/${props.format.toLowerCase()}/${encodeURIComponent(query.value)}`,
  );
};

whenever(
  () => keys.slash?.value,
  () => {
    searchBar.value?.focus();
  },
);

whenever(
  () => keys.escape?.value,
  () => {
    searchBar.value?.blur();
  },
);
</script>

<template>
  <div class="wrapper">
    <input
      ref="searchBar"
      v-model="query"
      type="text"
      @keyup.enter="search()"
    />
    <KeyIcon class="icon">/</KeyIcon>
  </div>
</template>

<style scoped>
input {
  height: 32px;
  width: 300px;
  padding-left: 10px;
  padding-right: 31px;
  background: var(--bg0);
  border: 1px solid var(--bd0);
  box-sizing: border-box;
  border-radius: 8px;
  outline: 1px solid transparent;
  outline-offset: -1px;
  font-family: var(--font-sans), sans-serif;
  color: var(--fg0);
  transition: outline 0.2s ease-in-out;
  text-transform: capitalize;
}

input:focus {
  outline: 2px solid var(--fg0);
}

.wrapper {
  position: relative;
  width: 300px;
  height: 32px;
}

.icon {
  position: absolute;
  right: 6px;
  top: 6px;
}

@media (max-width: 1239px) {
  input {
    font-size: 16px;
    width: min(calc(100vw - 134px), 306px);
    height: 40px;
  }

  .wrapper {
    width: min(calc(100vw - 134px), 306px);
    height: 40px;
  }

  .icon {
    display: none;
  }
}
</style>

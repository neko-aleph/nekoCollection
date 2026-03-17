<script setup lang="ts">
import { useMediaQuery } from "@vueuse/core";
import { ref } from "vue";
import FormatSelect from "./FormatSelect.vue";
import HeaderLogo from "./HeaderLogo.vue";
import SearchBar from "./SearchBar.vue";

const format = ref<string>("");
const isMobile = useMediaQuery("(max-width: 1219px)");
</script>

<template>
  <header>
    <div class="content">
      <div v-if="!isMobile" class="left">
        <HeaderLogo />
      </div>
      <div class="right">
        <FormatSelect v-model="format" />
        <SearchBar :format="format" />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 52px;
  border-bottom: 1px solid var(--bd0);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.content {
  width: 1200px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

@media (max-width: 1219px) {
  .content {
    width: 100%;
    justify-content: center;
  }
}
</style>

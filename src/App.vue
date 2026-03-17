<script setup lang="ts">
import { useRoute } from "vue-router";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

const route = useRoute();
</script>

<template>
  <Header />
  <div class="container">
    <RouterView :key="route.fullPath" />
  </div>
  <Footer />
</template>

<style scoped>
.container {
  min-height: calc(100vh - 212px);
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 40px;
}
</style>

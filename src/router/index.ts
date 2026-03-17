import {
  createRouter,
  createWebHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";
import Anime from "../views/Anime.vue";
import Chapter from "../views/Chapter.vue";
import Home from "../views/Home.vue";
import Manga from "../views/Manga.vue";
import Search from "../views/Search.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Home },
  { path: "/search/:format/:query", component: Search },
  { path: "/anime/:titleId/:source", component: Anime },
  { path: "/manga/:titleId/:source", component: Manga },
  { path: "/manga/:titleId/:source/chapter/:chapterId", component: Chapter },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

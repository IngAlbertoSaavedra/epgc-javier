import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NosotrosView from "../views/NosotrosView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: HomeView,
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: NosotrosView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

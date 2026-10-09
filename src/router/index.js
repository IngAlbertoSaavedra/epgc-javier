
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NosotrosView from "../views/NosotrosView.vue";
import CapacitadoresView from "../views/CapacitadoresView.vue";
import CapacitacionesView from "../views/CapacitacionesView.vue";

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
  {
    path: "/capacitadores",
    name: "capacitadores",
    component: CapacitadoresView,
  },

  // Capacitaciones: una View para las cinco opciones
  {
    path: "/capacitacion/:slug",
    name: "capacitacion-detalle",
    component: CapacitacionesView,
    props: true,
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

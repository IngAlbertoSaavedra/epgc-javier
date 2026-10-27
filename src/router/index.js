
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import NosotrosView from "../views/NosotrosView.vue";
import CapacitadoresView from "../views/CapacitadoresView.vue";

import CapacitacionesView from "../views/CapacitacionesView.vue";
import EstudiosAmbientalesView from "../views/EstudiosAmbientalesView.vue";
import ConsultoriaView from "../views/ConsultoriaView.vue";

const routes = [
  // INICIO
  {
    path: "/",
    name: "inicio",
    component: HomeView,
  },

  // NOSOTROS
  {
    path: "/nosotros",
    name: "nosotros",
    component: NosotrosView,
  },

  // CAPACITADORES
  {
    path: "/capacitadores",
    name: "capacitadores",
    component: CapacitadoresView,
  },

  // CAPACITACIONES
  {
    path: "/capacitacion/:slug",
    name: "capacitacion-detalle",
    component: CapacitacionesView,
    props: true,
  },

  // ESTUDIOS AMBIENTALES
  {
    path: "/estudios-ambientales/:slug",
    name: "estudios-ambientales-detalle",
    component: EstudiosAmbientalesView,
    props: true,
  },

  // CONSULTORÍA
  {
    path: "/consultoria/:slug",
    name: "consultoria-detalle",
    component: ConsultoriaView,
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

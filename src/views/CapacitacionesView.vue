<template>
  <div class="cap-page">
    <HeaderMain />

    <template v-if="capacitacion">
      <section class="cap-hero" :class="{ 'cap-hero-imagen-propia': Boolean(capacitacion.imagen) }" :style="{ backgroundImage: `url(${capacitacion.imagen || heroIndustrial})` }">
        <div class="cap-hero-overlay"></div>
        <div class="cap-hero-container">
          <p class="cap-hero-kicker">SERVICIOS / CAPACITACIÓN</p>
          <h1>{{ capacitacion.titulo }}</h1>
          <p class="cap-hero-text">{{ capacitacion.introduccion }}</p>
        </div>
      </section>

      <section class="cap-intro">
        <div class="cap-container cap-intro-grid">
          <div class="cap-intro-title">
            <span class="cap-section-kicker"><span>CAPACITACIÓN</span><strong>EPGC</strong><i></i></span>
            <h2>{{ capacitacion.titulo }}</h2>
          </div>
          <div class="cap-intro-copy">
            <p>{{ capacitacion.introduccion }}</p>
            <p class="cap-aviso" role="note">{{ capacitacion.aviso }}</p>
          </div>
        </div>
      </section>

      <section v-if="capacitacion.temas.length" class="cap-contenido">
        <div class="cap-container">
          <h2>{{ capacitacion.tipo === 'catalogo' ? 'Catálogo de cursos' : 'Contenido de la capacitación' }}</h2>
          <ul class="cap-temas"><li v-for="tema in capacitacion.temas" :key="tema">{{ tema }}</li></ul>
        </div>
      </section>
    </template>

    <section v-else class="cap-missing cap-container">
      <h1>Capacitación no disponible</h1>
      <p>La capacitación solicitada no está registrada.</p>
    </section>
    <FooterMain />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
import heroIndustrial from '../assets/images/home/hero-industrial.webp'
import { capacitaciones } from '../data/capacitaciones.js'

const route = useRoute()
const capacitacion = computed(() => capacitaciones[route.params.slug] ?? null)
</script>

<style scoped>
.cap-page { width: 100%; background: #f5f7f9; }
.cap-container, .cap-hero-container { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }
.cap-hero { position: relative; min-height: 270px; display: flex; align-items: center; background-size: cover; background-position: center top; background-repeat: no-repeat; background-color: #082a50; overflow: hidden; }
/* Con imagen propia, ajustarla a la altura disponible: no recorta ni cabeza ni ruedas. */
.cap-hero-imagen-propia { background-size: auto 100%; background-position: right max(0px, calc((100vw - 1200px) / 2 + 110px)) center; }
.cap-hero-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(4,28,58,.88) 0%, rgba(5,39,79,.76) 44%, rgba(4,28,58,.48) 100%); }
/* Solo escritorio: fundir el borde derecho de la fotografia con el fondo azul. */
@media (min-width: 769px) {
  .cap-hero-imagen-propia::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: max(0px, calc((100vw - 1200px) / 2 + 110px));
    width: 165px;
    background: linear-gradient(to right, rgba(8,42,80,0), #082a50);
    pointer-events: none;
  }
}

.cap-hero-container { position: relative; z-index: 2; padding: 42px 0 38px; }
.cap-hero-kicker { margin: 0 0 12px; color: #fff; font-size: 11px; font-weight: 800; letter-spacing: 3px; }
.cap-hero h1 { margin: 0; color: #fff; font-size: clamp(42px, 5vw, 68px); line-height: 1.05; font-weight: 800; }
.cap-hero-text { max-width: 620px; margin: 18px 0 0; color: rgba(255,255,255,.92); font-size: 16px; line-height: 1.5; }
.cap-intro { padding: 72px 0 56px; background: #fff; }
.cap-intro-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 72px; align-items: start; }
.cap-section-kicker { display: flex; align-items: center; gap: 7px; margin-bottom: 15px; font-size: 10px; font-weight: 800; letter-spacing: 1.9px; }
.cap-section-kicker span { color: #173a62; }
.cap-section-kicker strong { color: #4aa64c; }
.cap-section-kicker i { display: block; width: 34px; height: 2px; background: #61b857; }
.cap-intro-title h2 { margin: 0; color: #0c2d59; font-size: clamp(32px, 3vw, 44px); line-height: 1.06; font-weight: 800; letter-spacing: -.7px; }
.cap-intro-copy { padding-top: 24px; }
.cap-intro-copy p, .cap-missing p { margin: 0 0 16px; color: #5f6d79; font-size: 14px; line-height: 1.65; }
.cap-intro-copy .cap-aviso { color: #64748b; font-size: 12px; }
.cap-contenido { padding: 56px 0 70px; }
.cap-contenido h2, .cap-missing h1 { color: #0c2d59; }
.cap-temas { color: #5f6d79; line-height: 1.8; }
.cap-missing { padding: 80px 0; }
@media (max-width: 768px) { .cap-hero-imagen-propia { background-position: right center; } .cap-intro-grid { grid-template-columns: 1fr; gap: 18px; } .cap-intro-copy { padding-top: 0; } .cap-intro { padding: 48px 0; } }
@media (max-width: 480px) { .cap-hero-container { padding: 54px 0; } .cap-hero h1 { font-size: 38px; } }
</style>

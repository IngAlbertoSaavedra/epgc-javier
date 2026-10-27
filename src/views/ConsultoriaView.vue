<template>
  <div class="con-page">
    <HeaderMain />

    <template v-if="servicio">
      <section
        class="con-hero"
        :style="{ backgroundImage: `url(${servicio.imagen || heroIndustrial})` }"
      >
        <div class="con-hero-overlay"></div>
        <div class="con-container con-hero-content">
          <p class="con-kicker">SERVICIOS / CONSULTORÍA</p>
          <h1>{{ servicio.titulo }}</h1>
          <p class="con-hero-description">{{ servicio.introduccion }}</p>
        </div>
      </section>

      <section class="con-intro">
        <div class="con-container con-intro-grid">
          <div>
            <p class="con-section-label">CONSULTORÍA <span>EPGC</span></p>
            <h2>{{ servicio.titulo }}</h2>
          </div>
          <div class="con-intro-copy">
            <p>{{ servicio.descripcion }}</p>
            <p class="con-aviso">{{ servicio.aviso }}</p>
          </div>
        </div>
      </section>

      <section v-if="servicio.secciones?.length" class="con-secciones">
        <div class="con-container con-grid">
          <article
            v-for="(seccion, index) in servicio.secciones"
            :key="index"
            class="con-card"
          >
            <img
              v-if="seccion.imagen"
              :src="seccion.imagen"
              :alt="seccion.titulo"
              loading="lazy"
            />
            <div class="con-card-body">
              <h3>{{ seccion.titulo }}</h3>
              <p>{{ seccion.descripcion }}</p>
            </div>
          </article>
        </div>
      </section>
    </template>

    <section v-else class="con-container con-not-found">
      <h1>Servicio no disponible</h1>
      <p>La opción solicitada no está registrada.</p>
      <RouterLink to="/">Volver al inicio</RouterLink>
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
import { consultoria } from '../data/consultoria.js'

const route = useRoute()
const servicio = computed(() => consultoria[route.params.slug] ?? null)
</script>

<style scoped>
.con-page {
  min-height: 100vh;
  background: #ffffff;
}

.con-container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.con-hero {
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  background-color: #082a50;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.con-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4, 28, 58, 0.92), rgba(5, 39, 79, 0.7) 65%, rgba(4, 28, 58, 0.48));
}

.con-hero-content {
  position: relative;
  z-index: 1;
  padding: 48px 0;
}

.con-kicker {
  margin: 0 0 14px;
  color: #a9d99c;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.con-hero h1 {
  max-width: 860px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(32px, 4.4vw, 58px);
  line-height: 1.12;
  font-weight: 800;
}

.con-hero-description {
  max-width: 770px;
  margin: 20px 0 0;
  color: rgba(255, 255, 255, 0.91);
  font-size: 16px;
  line-height: 1.65;
}

.con-intro {
  padding: 68px 0 46px;
}

.con-intro-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  align-items: start;
  gap: 72px;
}

.con-section-label {
  margin: 0 0 16px;
  color: #173a62;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.con-section-label span {
  color: #4aa64c;
}

.con-intro h2 {
  margin: 0;
  color: #0c2d59;
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.15;
}

.con-intro-copy {
  padding-top: 24px;
}

.con-intro-copy p,
.con-card p,
.con-not-found p {
  color: #5f6d79;
  font-size: 14px;
  line-height: 1.7;
}

.con-intro-copy p {
  margin: 0 0 16px;
}

.con-intro-copy .con-aviso {
  color: #788592;
  font-size: 12px;
}

.con-secciones {
  padding: 12px 0 75px;
}

.con-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
}

.con-card {
  overflow: hidden;
  border-radius: 8px;
  background: #f5f7f9;
}

.con-card img {
  display: block;
  width: 100%;
  height: 245px;
  object-fit: cover;
}

.con-card-body {
  padding: 24px;
}

.con-card h3 {
  margin: 0 0 12px;
  color: #0c2d59;
  font-size: 20px;
  line-height: 1.25;
}

.con-card p {
  margin: 0;
}

.con-not-found {
  padding: 80px 0;
}

.con-not-found h1 {
  color: #0c2d59;
}

@media (max-width: 900px) {
  .con-intro-grid {
    gap: 36px;
  }

  .con-grid {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .con-intro {
    padding: 48px 0 35px;
  }

  .con-intro-grid,
  .con-grid {
    grid-template-columns: 1fr;
  }

  .con-intro-copy {
    padding-top: 0;
  }

  .con-secciones {
    padding-bottom: 52px;
  }

  .con-card img {
    height: 275px;
  }
}
</style>

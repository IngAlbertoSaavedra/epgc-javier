<template>
  <div class="est-page">
    <HeaderMain />

    <template v-if="estudio">
      <section
        class="est-hero"
        :style="{ backgroundImage: `url(${estudio.imagen || heroIndustrial})` }"
      >
        <div class="est-hero-overlay"></div>
        <div class="est-container est-hero-content">
          <p class="est-kicker">SERVICIOS / ESTUDIOS AMBIENTALES</p>
          <h1>{{ estudio.titulo }}</h1>
          <p class="est-hero-description">{{ estudio.introduccion }}</p>
        </div>
      </section>

      <section class="est-intro">
        <div class="est-container est-intro-grid">
          <div>
            <p class="est-section-label">ESTUDIOS AMBIENTALES <span>EPGC</span></p>
            <h2>{{ estudio.titulo }}</h2>
          </div>
          <div class="est-intro-copy">
            <p>{{ estudio.descripcion }}</p>
            <p class="est-aviso">{{ estudio.aviso }}</p>
          </div>
        </div>
      </section>

      <section v-if="estudio.secciones?.length" class="est-secciones">
        <div class="est-container est-grid">
          <article
            v-for="(seccion, index) in estudio.secciones"
            :key="index"
            class="est-card"
          >
            <img
              v-if="seccion.imagen"
              :src="seccion.imagen"
              :alt="seccion.titulo"
              loading="lazy"
            />
            <div class="est-card-body">
              <h3>{{ seccion.titulo }}</h3>
              <p>{{ seccion.descripcion }}</p>
            </div>
          </article>
        </div>
      </section>
    </template>

    <section v-else class="est-container est-not-found">
      <h1>Estudio no disponible</h1>
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
import { estudiosAmbientales } from '../data/estudiosAmbientales.js'

const route = useRoute()
const estudio = computed(() => estudiosAmbientales[route.params.slug] ?? null)
</script>

<style scoped>
.est-page {
  min-height: 100vh;
  background: #ffffff;
}

.est-container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.est-hero {
  position: relative;
  min-height: 300px;
  display: flex;
  align-items: center;
  background-color: #082a50;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}

.est-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(4, 28, 58, 0.92), rgba(5, 39, 79, 0.7) 65%, rgba(4, 28, 58, 0.48));
}

.est-hero-content {
  position: relative;
  z-index: 1;
  padding: 48px 0;
}

.est-kicker {
  margin: 0 0 14px;
  color: #a9d99c;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.est-hero h1 {
  max-width: 860px;
  margin: 0;
  color: #ffffff;
  font-size: clamp(32px, 4.4vw, 58px);
  line-height: 1.12;
  font-weight: 800;
}

.est-hero-description {
  max-width: 770px;
  margin: 20px 0 0;
  color: rgba(255, 255, 255, 0.91);
  font-size: 16px;
  line-height: 1.65;
}

.est-intro {
  padding: 68px 0 46px;
}

.est-intro-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  align-items: start;
  gap: 72px;
}

.est-section-label {
  margin: 0 0 16px;
  color: #173a62;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.5px;
}

.est-section-label span {
  color: #4aa64c;
}

.est-intro h2 {
  margin: 0;
  color: #0c2d59;
  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.15;
}

.est-intro-copy {
  padding-top: 24px;
}

.est-intro-copy p,
.est-card p,
.est-not-found p {
  color: #5f6d79;
  font-size: 14px;
  line-height: 1.7;
}

.est-intro-copy p {
  margin: 0 0 16px;
}

.est-intro-copy .est-aviso {
  color: #788592;
  font-size: 12px;
}

.est-secciones {
  padding: 12px 0 75px;
}

.est-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 26px;
}

.est-card {
  overflow: hidden;
  border-radius: 8px;
  background: #f5f7f9;
}

.est-card img {
  display: block;
  width: 100%;
  height: 245px;
  object-fit: cover;
}

.est-card-body {
  padding: 24px;
}

.est-card h3 {
  margin: 0 0 12px;
  color: #0c2d59;
  font-size: 20px;
  line-height: 1.25;
}

.est-card p {
  margin: 0;
}

.est-not-found {
  padding: 80px 0;
}

.est-not-found h1 {
  color: #0c2d59;
}

@media (max-width: 900px) {
  .est-intro-grid {
    gap: 36px;
  }

  .est-grid {
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .est-intro {
    padding: 48px 0 35px;
  }

  .est-intro-grid,
  .est-grid {
    grid-template-columns: 1fr;
  }

  .est-intro-copy {
    padding-top: 0;
  }

  .est-secciones {
    padding-bottom: 52px;
  }

  .est-card img {
    height: 275px;
  }
}
</style>

<template>
  <header class="header-main">
    <div class="header-container">
      <RouterLink to="/" class="logo-area" aria-label="Ir al inicio">
        <img
          :src="logoHeader"
          alt="EPGC Ingeniería y Gestión Ambiental"
          class="logo-image"
        >
      </RouterLink>

      <nav class="main-nav" aria-label="Navegación principal">
        <RouterLink
          to="/"
          class="nav-link"
          active-class="active"
        >
          Inicio
        </RouterLink>

        <RouterLink
          to="/nosotros"
          class="nav-link"
          active-class="active"
        >
          Nosotros
        </RouterLink>

        <div class="nav-item nav-services" :class="{ 'menu-open': desktopMenuOpen }" @mouseenter="desktopMenuOpen = true" @mouseleave="desktopMenuOpen = false">
          <a
            href="#servicios"
            class="nav-link services-trigger"
            aria-haspopup="true"
          >
            Servicios
          </a>

          <div class="mega-menu">
            <div class="mega-menu-grid">

              <!-- 1. CAPACITACIÓN -->
              <section class="mega-column">
                <div class="mega-column-heading">
                  <div class="mega-icon-wrap green">
                    <img
                      :src="personasIcon"
                      alt=""
                      class="mega-icon"
                      aria-hidden="true"
                    >
                  </div>

                  <div>
                    <h3>Capacitación</h3>
                    <p>
                      Formación práctica y especializada para el desarrollo
                      de tu equipo de trabajo.
                    </p>
                  </div>
                </div>

                <div class="mega-links">
                  <RouterLink to="/capacitacion/brigadas-de-emergencia" @click="closeDesktopMenu">
                    <span>Brigadas de emergencia</span>
                    <span class="mega-arrow">›</span>
                  </RouterLink>

                  <RouterLink to="/capacitacion/corte-y-soldadura" @click="closeDesktopMenu">
                    <span>Corte y soldadura</span>
                    <span class="mega-arrow">›</span>
                  </RouterLink>

                  <RouterLink to="/capacitacion/trabajo-en-alturas" @click="closeDesktopMenu">
                    <span>Trabajo en alturas</span>
                    <span class="mega-arrow">›</span>
                  </RouterLink>

                  <RouterLink to="/capacitacion/montacarguista" @click="closeDesktopMenu">
                    <span>Montacarguista</span>
                    <span class="mega-arrow">›</span>
                  </RouterLink>

                  <RouterLink to="/capacitacion/cursos-certificantes" @click="closeDesktopMenu">
                    <span>Cursos certificantes</span>
                    <span class="mega-arrow">›</span>
                  </RouterLink>
                </div>
              </section>

              <!-- 2. CONSULTORÍA -->
              <section class="mega-column">
                <div class="mega-column-heading">
                  <div class="mega-icon-wrap blue">
                    <img
                      :src="engraneIcon"
                      alt=""
                      class="mega-icon"
                      aria-hidden="true"
                    >
                  </div>

                  <div>
                    <h3>Consultoría</h3>
                    <p>
                      Soluciones técnicas y normativas para el cumplimiento
                      y una operación eficiente.
                    </p>
                  </div>
                </div>

                <div class="mega-links">
                  <a href="#">
                    <span>Protección civil</span>
                    <span class="mega-arrow">›</span>
                  </a>
                </div>
              </section>

              <!-- 3. ESTUDIOS AMBIENTALES -->
              <section class="mega-column">
                <div class="mega-column-heading">
                  <div class="mega-icon-wrap leaf">
                    <img
                      :src="hojaArbolIcon"
                      alt=""
                      class="mega-icon"
                      aria-hidden="true"
                    >
                  </div>

                  <div>
                    <h3>Estudios Ambientales</h3>
                    <p>
                      Evaluación y monitoreo ambiental para un entorno de
                      trabajo más seguro y en cumplimiento.
                    </p>
                  </div>
                </div>

                <div class="mega-links">
                  <a href="#">
                    <span>Medición</span>
                    <span class="mega-arrow">›</span>
                  </a>

                  <a href="#">
                    <span>Análisis de aguas</span>
                    <span class="mega-arrow">›</span>
                  </a>

                  <a href="#">
                    <span>Iluminación</span>
                    <span class="mega-arrow">›</span>
                  </a>

                  <a href="#">
                    <span>Ruido laboral</span>
                    <span class="mega-arrow">›</span>
                  </a>

                  <a href="#">
                    <span>Ruido perimetral</span>
                    <span class="mega-arrow">›</span>
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>

        <RouterLink
          to="/capacitadores"
          class="nav-link"
          active-class="active"
        >
          Capacitadores
        </RouterLink>
      </nav>

      <div class="header-actions">
        <a href="#" class="quote-button">
          Solicitar cotización
        </a>

        <button
          class="mobile-menu-button"
          type="button"
          :class="{ open: mobileMenuOpen }"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-navigation"
          aria-label="Abrir menú de navegación"
          @click="toggleMobileMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div
      id="mobile-navigation"
      class="mobile-menu"
      :class="{ open: mobileMenuOpen }"
    >
      <nav class="mobile-nav" aria-label="Navegación móvil">
        <RouterLink
          to="/"
          class="mobile-nav-link"
          exact-active-class="active"
          @click="closeMobileMenu"
        >
          Inicio
        </RouterLink>

        <RouterLink
          to="/nosotros"
          class="mobile-nav-link"
          active-class="active"
          @click="closeMobileMenu"
        >
          Nosotros
        </RouterLink>

        <button
          class="mobile-nav-link mobile-services-toggle"
          type="button"
          :class="{ active: mobileServicesOpen }"
          :aria-expanded="mobileServicesOpen"
          @click="mobileServicesOpen = !mobileServicesOpen"
        >
          <span>Servicios</span>
          <span class="mobile-chevron">⌄</span>
        </button>

        <div class="mobile-services" :class="{ open: mobileServicesOpen }">
          <section class="mobile-service-group">
            <div class="mobile-service-heading">
              <div class="mega-icon-wrap green">
                <img :src="personasIcon" alt="" class="mega-icon" aria-hidden="true">
              </div>
              <div>
                <strong>Capacitación</strong>
                <small>Formación práctica y especializada.</small>
              </div>
            </div>

            <div class="mobile-service-links">
              <RouterLink to="/capacitacion/brigadas-de-emergencia" @click="closeMobileMenu">Brigadas de emergencia</RouterLink>
              <RouterLink to="/capacitacion/corte-y-soldadura" @click="closeMobileMenu">Corte y soldadura</RouterLink>
              <RouterLink to="/capacitacion/trabajo-en-alturas" @click="closeMobileMenu">Trabajo en alturas</RouterLink>
              <RouterLink to="/capacitacion/montacarguista" @click="closeMobileMenu">Montacarguista</RouterLink>
              <RouterLink to="/capacitacion/cursos-certificantes" @click="closeMobileMenu">Cursos certificantes</RouterLink>
            </div>
          </section>

          <section class="mobile-service-group">
            <div class="mobile-service-heading">
              <div class="mega-icon-wrap blue">
                <img :src="engraneIcon" alt="" class="mega-icon" aria-hidden="true">
              </div>
              <div>
                <strong>Consultoría</strong>
                <small>Soluciones técnicas y normativas.</small>
              </div>
            </div>

            <div class="mobile-service-links">
              <a href="#" @click.prevent="closeMobileMenu">Protección civil</a>
            </div>
          </section>

          <section class="mobile-service-group">
            <div class="mobile-service-heading">
              <div class="mega-icon-wrap leaf">
                <img :src="hojaArbolIcon" alt="" class="mega-icon" aria-hidden="true">
              </div>
              <div>
                <strong>Estudios Ambientales</strong>
                <small>Evaluación y monitoreo ambiental.</small>
              </div>
            </div>

            <div class="mobile-service-links">
              <a href="#" @click.prevent="closeMobileMenu">Medición</a>
              <a href="#" @click.prevent="closeMobileMenu">Análisis de aguas</a>
              <a href="#" @click.prevent="closeMobileMenu">Iluminación</a>
              <a href="#" @click.prevent="closeMobileMenu">Ruido laboral</a>
              <a href="#" @click.prevent="closeMobileMenu">Ruido perimetral</a>
            </div>
          </section>
        </div>

        <a href="#" class="mobile-nav-link" @click.prevent="closeMobileMenu">Capacitaciones</a>
        <RouterLink
          to="/capacitadores"
          class="mobile-nav-link"
          @click="closeMobileMenu"
        >
          Capacitadores
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

import logoHeader from '../../assets/images/logo/logo-epgc-horizontal.webp'

import personasIcon from '../../assets/icons/personas.png'
import engraneIcon from '../../assets/icons/engrane.png'
import hojaArbolIcon from '../../assets/icons/hoja_arbol.png'

const desktopMenuOpen = ref(false)

const closeDesktopMenu = () => {
  desktopMenuOpen.value = false
}

const mobileMenuOpen = ref(false)
const mobileServicesOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value

  if (!mobileMenuOpen.value) {
    mobileServicesOpen.value = false
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  mobileServicesOpen.value = false
}
</script>

<style scoped>
.header-main {
  position: sticky;
  top: 0;
  z-index: 1000;

  width: 100%;

  background: #ffffff;
  border-bottom: 1px solid #e8edf3;
}

.header-container {
  position: relative;

  width: min(1200px, calc(100% - 40px));
  min-height: 72px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo-area {
  display: flex;
  align-items: center;
  flex-shrink: 0;

  text-decoration: none;
}

.logo-image {
  display: block;

  width: auto;
  height: 58px;

  object-fit: contain;
}

.main-nav {
  display: flex;
  align-items: stretch;
  gap: 28px;

  min-height: 72px;
}

.nav-item {
  position: static;

  display: flex;
  align-items: stretch;
}

.nav-link {
  position: relative;

  display: flex;
  align-items: center;

  padding: 0;

  color: #16365c;

  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}

.nav-link::after {
  content: '';

  position: absolute;
  left: 0;
  bottom: 16px;

  width: 0;
  height: 3px;

  border-radius: 4px;

  background: #1769aa;

  transition: width 0.22s ease;
}

.nav-link:hover::after,
.nav-link.active::after,
.nav-services.menu-open > .services-trigger::after {
  width: 100%;
}

.quote-button {
  flex-shrink: 0;

  padding: 13px 20px;

  border-radius: 8px;

  background:
    linear-gradient(
      135deg,
      #0b2f5e,
      #1769aa
    );

  color: #ffffff;

  font-size: 13px;
  font-weight: 700;
  text-decoration: none;

  box-shadow: 0 8px 20px rgba(11, 47, 94, 0.18);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.quote-button:hover {
  transform: translateY(-1px);

  box-shadow: 0 10px 24px rgba(11, 47, 94, 0.22);
}

/* =========================
   MEGA MENÚ DE SERVICIOS
========================= */

.mega-menu {
  position: absolute;
  z-index: 1100;

  top: calc(100% - 6px);
  left: 50%;

  width: min(920px, calc(100vw - 40px));

  padding-top: 6px;

  opacity: 0;
  visibility: hidden;

  transform:
    translateX(-50%)
    translateY(8px);

  pointer-events: none;

  transition:
    opacity 0.18s ease,
    transform 0.18s ease,
    visibility 0.18s ease;
}

.mega-menu::after {
  content: '';

  position: absolute;
  z-index: 2;

  top: 2px;
  left: 47.5%;

  width: 16px;
  height: 16px;

  background: #ffffff;

  border-left: 1px solid #e4eaf0;
  border-top: 1px solid #e4eaf0;

  transform:
    translateX(-50%)
    rotate(45deg);
}

.nav-services.menu-open .mega-menu {
  opacity: 1;
  visibility: visible;

  transform:
    translateX(-50%)
    translateY(0);

  pointer-events: auto;
}

.mega-menu-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  background: #ffffff;

  border: 1px solid #e4eaf0;
  border-radius: 8px;

  box-shadow:
    0 18px 42px rgba(12, 42, 76, 0.16);

  overflow: hidden;
}

.mega-column {
  min-width: 0;

  padding: 18px 14px 14px;
}

.mega-column + .mega-column {
  border-left: 1px solid #e8edf3;
}

.mega-column-heading {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 10px;
  align-items: start;

  min-height: 88px;

  padding: 0 4px 14px;
}

.mega-icon-wrap {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: #f3f7fb;
}

.mega-icon-wrap.green {
  background: #eef8ee;
}

.mega-icon-wrap.blue {
  background: #eef4fb;
}

.mega-icon-wrap.leaf {
  background: #eef8ee;
}

.mega-icon {
  display: block;

  width: 27px;
  height: 27px;

  object-fit: contain;
}

.mega-column-heading h3 {
  margin: 0 0 5px;

  color: #102f59;

  font-size: 14px;
  line-height: 1.15;
  font-weight: 800;
}

.mega-column-heading p {
  margin: 0;

  color: #687786;

  font-size: 10px;
  line-height: 1.35;
}

.mega-links {
  border-top: 1px solid #edf1f4;
}

.mega-links a {
  min-height: 38px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 0 5px;

  border-bottom: 1px solid #edf1f4;

  color: #263f5f;

  font-size: 11px;
  font-weight: 500;
  text-decoration: none;

  transition:
    color 0.18s ease,
    padding-left 0.18s ease,
    background 0.18s ease;
}

.mega-links a:hover {
  padding-left: 9px;

  color: #0d5ca8;

  background: #f8fbfd;
}

.mega-arrow {
  flex-shrink: 0;

  color: #31577d;

  font-size: 16px;
  line-height: 1;
}

/* Puente invisible para que el menú no se cierre
   al mover el cursor del enlace al desplegable. */
.mega-menu::before {
  content: '';

  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  height: 8px;
}

/* =========================
   ACCIONES / MENÚ MÓVIL
========================= */

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.mobile-menu-button,
.mobile-menu {
  display: none;
}

/* =========================
   TABLET / MÓVIL
========================= */

@media (max-width: 1000px) {
  .header-container {
    gap: 18px;
  }

  .main-nav {
    gap: 20px;
  }

  .nav-link {
    font-size: 13px;
  }

  .mega-menu {
    width: min(860px, calc(100vw - 24px));
  }

  .mega-column {
    padding-inline: 11px;
  }
}

@media (max-width: 900px) {
  .header-main {
    overflow: visible;
  }

  .main-nav {
    display: none;
  }

  .header-container {
    width: min(100% - 24px, 1200px);
    min-height: 64px;
    gap: 12px;
  }

  .logo-image {
    height: 50px;
  }

  .quote-button {
    padding: 10px 13px;
    font-size: 11px;
    border-radius: 7px;
  }

  .mobile-menu-button {
    width: 38px;
    height: 38px;

    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    padding: 0;

    border: 1px solid #dbe4ed;
    border-radius: 7px;

    background: #ffffff;
    cursor: pointer;
  }

  .mobile-menu-button span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: #0b2f5e;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .mobile-menu-button.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .mobile-menu-button.open span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-button.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .mobile-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1200;

    display: block;

    max-height: 0;
    overflow: hidden;

    opacity: 0;
    visibility: hidden;

    background: #ffffff;
    border-top: 1px solid #edf1f4;
    box-shadow: 0 14px 30px rgba(8, 40, 74, 0.14);

    transition: max-height 0.28s ease, opacity 0.2s ease, visibility 0.2s ease;
  }

  .mobile-menu.open {
    max-height: calc(100vh - 64px);
    overflow-y: auto;
    opacity: 1;
    visibility: visible;
  }

  .mobile-nav {
    width: min(100% - 24px, 720px);
    margin: 0 auto;
    padding: 10px 0 18px;
  }

  .mobile-nav-link {
    width: 100%;
    min-height: 46px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 4px;

    border: 0;
    border-bottom: 1px solid #edf1f4;

    color: #17365d;
    background: transparent;

    font: inherit;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    text-align: left;

    cursor: pointer;
  }

  .mobile-nav-link.active {
    color: #1769aa;
  }

  .mobile-services-toggle .mobile-chevron {
    color: #1769aa;
    font-size: 20px;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  .mobile-services-toggle.active .mobile-chevron {
    transform: rotate(180deg);
  }

  .mobile-services {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    background: #f7f9fb;
    transition: max-height 0.3s ease, opacity 0.2s ease;
  }

  .mobile-services.open {
    max-height: 1100px;
    opacity: 1;
  }

  .mobile-service-group {
    padding: 14px 12px;
    border-bottom: 1px solid #e5ebf0;
  }

  .mobile-service-heading {
    display: grid;
    grid-template-columns: 38px 1fr;
    gap: 10px;
    align-items: center;
    margin-bottom: 8px;
  }

  .mobile-service-heading .mega-icon-wrap {
    width: 34px;
    height: 34px;
  }

  .mobile-service-heading .mega-icon {
    width: 24px;
    height: 24px;
  }

  .mobile-service-heading strong {
    display: block;
    color: #102f59;
    font-size: 13px;
    line-height: 1.2;
  }

  .mobile-service-heading small {
    display: block;
    margin-top: 2px;
    color: #687786;
    font-size: 10px;
    line-height: 1.3;
  }

  .mobile-service-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 14px;
    padding-left: 48px;
  }

  .mobile-service-links a {
    min-height: 34px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e4eaf0;
    color: #31506f;
    font-size: 11px;
    text-decoration: none;
  }
}

@media (max-width: 560px) {
  .header-container {
    width: min(100% - 18px, 1200px);
    gap: 8px;
  }

  .logo-image {
    height: 44px;
  }

  .quote-button {
    padding: 9px 10px;
    font-size: 10px;
  }

  .mobile-menu-button {
    width: 36px;
    height: 36px;
  }

  .mobile-nav {
    width: min(100% - 20px, 720px);
  }

  .mobile-service-links {
    grid-template-columns: 1fr;
    padding-left: 48px;
  }
}
</style>

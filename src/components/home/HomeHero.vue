<template>
  <section class="home-wrapper">
    <section
      class="home-hero"
      :style="{ backgroundImage: `url(${heroIndustrial})` }"
    >
      <div class="hero-overlay"></div>

      <div class="hero-container">
        <div class="hero-content">
          <p class="hero-eyebrow">
            INGENIERÍA + PERSONAS + OPERACIÓN SEGURA
          </p>

          <h1>
            Seguridad industrial,<br>
            ingeniería y capacitación<br>
            para una operación<br>
            <span>más segura.</span>
          </h1>

          <p class="hero-description">
            En EPGC brindamos consultoría ambiental, ingeniería, capacitación,
            venta de equipo, brigadas especializadas y operación en campo,
            con soluciones prácticas y personalizadas para empresas,
            industrias y proyectos en todo México.
          </p>
        </div>
      </div>
    </section>

    <section class="services-strip" id="servicios">
      <div class="services-container">

        <article class="service-card">
          <div class="service-card-top">
            <img
              :src="cascoIcon"
              alt="Seguridad Industrial"
              class="service-icon"
            >

            <div class="service-title-block">
              <span class="service-line blue"></span>

              <h2>
                Seguridad<br>
                Industrial
              </h2>
            </div>
          </div>

          <p>
            Programas, asesoría y soluciones
            para entornos de trabajo más
            seguros.
          </p>

          <a href="#" class="service-arrow" aria-label="Ver Seguridad Industrial">
            ›
          </a>
        </article>

        <article class="service-card">
          <div class="service-card-top">
            <img
              :src="engraneIcon"
              alt="Ingeniería y Proyectos"
              class="service-icon"
            >

            <div class="service-title-block">
              <span class="service-line blue-dark"></span>

              <h2>
                Ingeniería<br>
                y Proyectos
              </h2>
            </div>
          </div>

          <p>
            Desarrollo de soluciones técnicas
            para la prevención, cumplimiento
            y operación eficiente.
          </p>

          <a href="#" class="service-arrow" aria-label="Ver Ingeniería y Proyectos">
            ›
          </a>
        </article>

        <article class="service-card">
          <div class="service-card-top">
            <img
              :src="personasIcon"
              alt="Capacitaciones Técnicas"
              class="service-icon"
            >

            <div class="service-title-block">
              <span class="service-line green"></span>

              <h2>
                Capacitaciones<br>
                Técnicas
              </h2>
            </div>
          </div>

          <p>
            Formación práctica y especializada
            para tu equipo de trabajo.
          </p>

          <a href="#" class="service-arrow" aria-label="Ver Capacitaciones Técnicas">
            ›
          </a>
        </article>

        <article class="service-card">
          <div class="service-card-top">
            <img
              :src="trabajadorIcon"
              alt="Operación en Campo"
              class="service-icon"
            >

            <div class="service-title-block">
              <span class="service-line orange"></span>

              <h2>
                Operación<br>
                en Campo
              </h2>
            </div>
          </div>

          <p>
            Brigadas, monitoreo, estudios
            y soporte técnico en sitio.
          </p>

          <a href="#" class="service-arrow" aria-label="Ver Operación en Campo">
            ›
          </a>
        </article>

      </div>
    </section>

    <section class="about-preview">
      <div class="about-preview-container">

        <div class="about-preview-content">
          <div class="about-kicker">
            <span>SOBRE</span>
            <strong>EPGC</strong>
            <span class="about-kicker-line"></span>
          </div>

          <h2>
            Soluciones prácticas<br>
            para prevenir, cumplir<br>
            y <span>operar mejor</span>
          </h2>

          <p>
            Somos una empresa especializada en ingeniería y gestión
            ambiental, con un enfoque en la seguridad industrial,
            el cumplimiento normativo y el desarrollo de soluciones
            que generen operaciones más seguras y eficientes.
          </p>

          <RouterLink to="/nosotros" class="about-button">
            Conoce más sobre nosotros
            <span>→</span>
          </RouterLink>
        </div>

        <div class="about-preview-image">
          <img
            :src="heroRevisando"
            alt="Equipo EPGC revisando una operación en campo"
          >
        </div>
      </div>
    </section>

    <section class="stats-strip">
      <div class="stats-container">

        <!-- Espacio reservado 1 -->
        <div class="stat-item stat-empty" aria-hidden="true"></div>

        <!-- 10 años de experiencia -->
        <div class="stat-item">
          <img
            :src="hojaArbolIcon"
            alt=""
            class="stat-icon"
            aria-hidden="true"
          >

          <div class="stat-content">
            <strong>+10</strong>

            <div class="stat-text">
              <span>Años de experiencia</span>
              <small>en ingeniería y gestión</small>
            </div>
          </div>
        </div>

        <!-- 100% enfoque operativo -->
        <div class="stat-item">
          <img
            :src="escudoStatIcon"
            alt=""
            class="stat-icon"
            aria-hidden="true"
          >

          <div class="stat-content">
            <strong>100%</strong>

            <div class="stat-text">
              <span>Enfoque operativo</span>
              <small>en campo y con resultados</small>
            </div>
          </div>
        </div>

        <!-- Espacio reservado 4 -->
        <div class="stat-item stat-empty" aria-hidden="true"></div>

      </div>
    </section>

    <section class="focus-section">
      <div class="focus-container">

        <div class="focus-image">
          <img
            :src="heroTrabajador"
            alt="Especialista EPGC trabajando en una instalación industrial"
          >
        </div>

        <div class="focus-content">
          <div class="focus-kicker">
            <span>NUESTRO ENFOQUE</span>
            <span class="focus-kicker-line"></span>
          </div>

          <h2>
            Más que cumplimiento,<br>
            <span>resultados en la operación</span>
          </h2>

          <p class="focus-description">
            Integramos experiencia técnica, capacitación especializada y trabajo
            en campo para ayudar a las empresas a reducir riesgos, cumplir con la
            normativa y operar de forma más segura y eficiente.
          </p>

          <div class="focus-features">

            <article class="focus-feature">
              <img
                :src="checkboxIcon"
                alt=""
                class="focus-feature-icon focus-feature-icon-blue"
                aria-hidden="true"
              >
              <div>
                <h3>Cumplimiento<br>Normativo</h3>
                <p>
                  Acompañamiento en trámites, estudios y requisitos aplicables.
                </p>
              </div>
            </article>

            <article class="focus-feature">
              <img
                :src="obreroIcon"
                alt=""
                class="focus-feature-icon"
                aria-hidden="true"
              >
              <div>
                <h3>Prevención<br>de Riesgos</h3>
                <p>
                  Identificación, evaluación y control de riesgos en tu operación.
                </p>
              </div>
            </article>

            <article class="focus-feature">
              <img
                :src="personasIcon"
                alt=""
                class="focus-feature-icon"
                aria-hidden="true"
              >
              <div>
                <h3>Capacitación<br>en Sitio</h3>
                <p>
                  Formación práctica, adaptada a tus procesos y necesidades.
                </p>
              </div>
            </article>

            <article class="focus-feature">
              <img
                :src="engraneIcon"
                alt=""
                class="focus-feature-icon focus-feature-icon-green"
                aria-hidden="true"
              >
              <div>
                <h3>Respuesta<br>en Campo</h3>
                <p>
                  Brigadas especializadas y soporte técnico cuando tu operación lo necesita.
                </p>
              </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  </section>
</template>

<script setup>
import heroIndustrial from '../../assets/images/home/hero-industrial.webp'
import heroRevisando from '../../assets/images/home/hero-revisando.png'
import heroTrabajador from '../../assets/images/home/hero-trabajador.webp'

import cascoIcon from '../../assets/icons/casco.png'
import engraneIcon from '../../assets/icons/engrane.png'
import personasIcon from '../../assets/icons/personas.png'
import trabajadorIcon from '../../assets/icons/trabajador.png'
import hojaArbolIcon from '../../assets/icons/hoja_arbol.png'
import escudoStatIcon from '../../assets/icons/escudo.png'
import checkboxIcon from '../../assets/icons/checkbox.png'
import obreroIcon from '../../assets/icons/obrero.png'



</script>

<style scoped>
.home-wrapper {
  width: 100%;
}

/* =========================
   HERO
========================= */

.home-hero {
  position: relative;
  width: 100%;
  min-height: 560px;

  display: flex;
  align-items: center;

  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;

  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(5, 28, 58, 0.95) 0%,
      rgba(5, 28, 58, 0.86) 28%,
      rgba(5, 28, 58, 0.45) 55%,
      rgba(5, 28, 58, 0.08) 100%
    );
}

.hero-container {
  position: relative;
  z-index: 2;

  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.hero-content {
  width: 100%;
  max-width: 610px;

  padding: 52px 0 60px;
}

.hero-eyebrow {
  margin: 0 0 16px;

  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3.5px;
  line-height: 1.3;

  text-transform: uppercase;
}

h1 {
  margin: 0;
  max-width: 590px;

  color: #ffffff;

  font-size: clamp(34px, 3.2vw, 46px);
  line-height: 1.05;
  font-weight: 800;

  letter-spacing: -0.5px;
}

h1 span {
  color: #65c63f;
}

.hero-description {
  max-width: 560px;

  margin: 22px 0 0;

  color: rgba(255, 255, 255, 0.94);

  font-size: 15.5px;
  line-height: 1.5;
  font-weight: 400;
}

/* =========================
   TARJETAS DE SERVICIOS
========================= */

.services-strip {
  position: relative;
  z-index: 5;

  width: 100%;

  background: #f4f7fa;

  padding: 18px 0 26px;
}

.services-container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.service-card {
  position: relative;

  min-height: 145px;

  padding: 20px 48px 18px 20px;

  background: #ffffff;

  border: 1px solid #eef2f6;
  border-radius: 10px;

  box-shadow: 0 8px 22px rgba(14, 46, 78, 0.05);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-3px);

  box-shadow: 0 12px 28px rgba(14, 46, 78, 0.09);
}

.service-card-top {
  display: flex;
  align-items: flex-start;

  gap: 14px;
}

.service-icon {
  width: 52px;
  height: 52px;

  object-fit: contain;

  flex-shrink: 0;
}

.service-title-block {
  display: flex;
  flex-direction: column;

  gap: 6px;
}

.service-line {
  display: block;

  width: 34px;
  height: 3px;

  border-radius: 10px;
}

.service-line.blue {
  background: #1769aa;
}

.service-line.blue-dark {
  background: #0b2f5e;
}

.service-line.green {
  background: #2e8b2e;
}

.service-line.orange {
  background: #f47a00;
}

.service-card h2 {
  margin: 0;

  color: #0d2850;

  font-size: 16px;
  line-height: 1.05;
  font-weight: 800;
}

.service-card p {
  margin: 12px 0 0;

  color: #5d6b78;

  font-size: 12px;
  line-height: 1.45;
}

.service-arrow {
  position: absolute;

  right: 14px;
  bottom: 14px;

  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #cbd7e3;
  border-radius: 50%;

  color: #1769aa;

  font-size: 20px;
  line-height: 1;

  text-decoration: none;

  background: #ffffff;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.service-arrow:hover {
  color: #ffffff;

  background: #1769aa;
  border-color: #1769aa;

  transform: translateX(2px);
}

/* =========================
   SOBRE EPGC
========================= */

.about-preview {
  width: 100%;
  background: #ffffff;
}

.about-preview-container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;

  display: grid;
  grid-template-columns: 48% 52%;
  align-items: center;
}

.about-preview-content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 42px 42px 42px 10px;
}

.about-kicker {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 14px;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.about-kicker span {
  color: #173a62;
}

.about-kicker strong {
  color: #4aa64c;
  font-weight: 800;
}

.about-kicker-line {
  display: inline-block;
  width: 34px;
  height: 2px;
  margin-left: 2px;
  background: #61b857;
}

.about-preview h2 {
  margin: 0;
  max-width: 500px;

  color: #0c2d59;

  font-size: clamp(28px, 2.4vw, 36px);
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.6px;
}

.about-preview h2 span {
  color: #49a942;
}

.about-preview-content p {
  max-width: 500px;
  margin: 18px 0 22px;
  color: #5a6774;
  font-size: 14px;
  line-height: 1.5;
}

.about-button {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 5px;
  background: #0d4f91;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 6px 14px rgba(13, 79, 145, 0.18);
  transition: background 0.2s ease, transform 0.2s ease;
}

.about-button:hover {
  background: #1769aa;
  transform: translateY(-2px);
}

.about-button span {
  font-size: 17px;
}

.about-preview-image {
  width: 100%;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #ffffff;
}

.about-preview-image img {
  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;
  object-position: center;
}

/* =========================
   INDICADORES / ESTADÍSTICAS
========================= */

.stats-strip {
  width: 100%;

  background: #ffffff;

  border-top: 1px solid #edf1f5;
}

.stats-container {
  width: min(1200px, calc(100% - 40px));
  min-height: 88px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
}

.stat-item {
  position: relative;

  min-height: 58px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  padding: 10px 22px;
}

.stat-item:not(:last-child)::after {
  content: '';

  position: absolute;

  top: 14px;
  right: 0;
  bottom: 14px;

  width: 1px;

  background: #dbe3eb;
}

.stat-icon {
  width: 38px;
  height: 38px;

  object-fit: contain;

  flex-shrink: 0;
}

.stat-content {
  display: flex;
  align-items: flex-start;

  gap: 10px;
}

.stat-content strong {
  color: #0b2f5e;

  font-size: 26px;
  line-height: 1;
  font-weight: 800;

  white-space: nowrap;
}

.stat-text {
  display: flex;
  flex-direction: column;

  padding-top: 2px;
}

.stat-text span {
  color: #17365d;

  font-size: 11px;
  line-height: 1.15;
  font-weight: 700;

  white-space: nowrap;
}

.stat-text small {
  margin-top: 3px;

  color: #7a8794;

  font-size: 9px;
  line-height: 1.2;

  white-space: nowrap;
}

.stat-empty {
  min-height: 58px;
}

/* =========================
   NUESTRO ENFOQUE
========================= */

.focus-section {
  width: 100%;
  background: #ffffff;
}

.focus-container {
  position: relative;

  width: min(1200px, calc(100% - 40px));
  min-height: 360px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 39% 61%;
  align-items: stretch;

  overflow: hidden;
  background: #ffffff;
}

.focus-image {
  position: relative;
  min-height: 360px;
  overflow: hidden;
  background: #ffffff;
  z-index: 1;
}

.focus-image img {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;
  object-position: center;
}

/* Diagonal restaurada: proporciones relativas para que conserve
   la forma correcta en distintos anchos de escritorio. */
.focus-container::before {
  content: '';

  position: absolute;
  z-index: 3;

  top: -2px;
  bottom: -2px;

  left: 34.5%;
  width: 8.5%;

  background: rgba(255, 255, 255, 0.96);

  clip-path: polygon(
    0 0,
    58% 0,
    100% 100%,
    42% 100%
  );

  pointer-events: none;
}

/* Segunda franja translúcida, más fina */
.focus-container::after {
  content: '';

  position: absolute;
  z-index: 2;

  top: 22%;
  bottom: 18%;

  left: 36.5%;
  width: 2.3%;

  background: rgba(255, 255, 255, 0.26);
  transform: skewX(13deg);

  pointer-events: none;
}

.focus-content {
  position: relative;
  z-index: 4;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 36px 10px 34px 26px;

  background: #ffffff;
}

.focus-kicker {
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 10px;

  color: #17365d;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.focus-kicker-line {
  display: inline-block;
  width: 34px;
  height: 2px;
  background: #61b857;
}

.focus-content h2 {
  margin: 0;

  color: #0c2d59;

  font-size: clamp(28px, 2.7vw, 40px);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.6px;
}

.focus-content h2 span {
  color: #2f962d;
}

.focus-description {
  max-width: 720px;

  margin: 14px 0 24px;

  color: #5a6774;

  font-size: 14px;
  line-height: 1.45;
}

.focus-features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.focus-feature {
  min-width: 0;

  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: start;
  gap: 10px;

  padding: 0 16px;

  border-left: 1px solid #dbe3eb;
}

.focus-feature:first-child {
  padding-left: 0;
  border-left: 0;
}

.focus-feature:last-child {
  padding-right: 0;
}

.focus-feature-icon {
  width: 32px;
  height: 32px;

  object-fit: contain;
}

.focus-feature-icon-blue {
  filter: none;
}

.focus-feature-icon-green {
  filter:
    brightness(0)
    saturate(100%)
    invert(35%)
    sepia(89%)
    saturate(947%)
    hue-rotate(76deg)
    brightness(84%)
    contrast(94%);
}

.focus-feature h3 {
  margin: 0 0 8px;

  color: #17365d;

  font-size: 12px;
  line-height: 1.1;
  font-weight: 800;
}

.focus-feature p {
  margin: 0;

  color: #66727e;

  font-size: 11px;
  line-height: 1.35;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .hero-content {
    max-width: 560px;
  }

  h1 {
    font-size: clamp(36px, 4vw, 44px);
  }

  .hero-description {
    max-width: 520px;
  }

  .services-container {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-preview-container {
    grid-template-columns: 1fr 1fr;
  }

  .about-preview-content {
    padding: 36px 30px 36px 0;
  }

  .about-preview h2 {
    font-size: clamp(27px, 3vw, 34px);
  }

  .about-preview-content p {
    font-size: 13.5px;
  }

  .stat-item {
    padding: 10px 12px;
    gap: 10px;
  }

  .stat-icon {
    width: 32px;
    height: 32px;
  }

  .stat-content {
    gap: 7px;
  }

  .stat-content strong {
    font-size: 22px;
  }

  .stat-text span {
    font-size: 10px;
  }

  .stat-text small {
    font-size: 8px;
  }

  .focus-container {
    width: min(100% - 30px, 1200px);
    grid-template-columns: 40% 60%;
  }

  .focus-container::before {
    left: 35.5%;
    width: 9%;
  }

  .focus-container::after {
    left: 38%;
    width: 2.5%;
  }

  .focus-content {
    padding: 30px 0 30px 22px;
  }

  .focus-content h2 {
    font-size: clamp(26px, 3vw, 34px);
  }

  .focus-description {
    margin-bottom: 20px;
    font-size: 13px;
  }

  .focus-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 0;
  }

  .focus-feature {
    grid-template-columns: 30px 1fr;
    gap: 8px;
    padding: 0 14px;
  }

  .focus-feature:nth-child(odd) {
    padding-left: 0;
    border-left: 0;
  }

  .focus-feature:nth-child(even) {
    padding-right: 0;
  }

  .focus-feature-icon {
    width: 28px;
    height: 28px;
  }

  .focus-feature h3 {
    font-size: 11px;
  }

  .focus-feature p {
    font-size: 10px;
  }

}

/* =========================
   MÓVIL
========================= */

@media (max-width: 768px) {
  .home-hero {
    min-height: 610px;
    background-position: 68% center;
  }

  .hero-overlay {
    background:
      linear-gradient(
        90deg,
        rgba(5, 28, 58, 0.97) 0%,
        rgba(5, 28, 58, 0.91) 58%,
        rgba(5, 28, 58, 0.55) 100%
      );
  }

  .hero-container {
    width: min(100% - 30px, 1200px);
  }

  .hero-content {
    max-width: 440px;
    padding: 48px 0 54px;
  }

  .hero-eyebrow {
    font-size: 10px;
    letter-spacing: 2.2px;
  }

  h1 {
    font-size: clamp(30px, 8vw, 38px);
    line-height: 1.05;
  }

  .hero-description {
    font-size: 14px;
    line-height: 1.5;
  }

  .services-strip {
    padding: 16px 0 22px;
  }

  .services-container {
    width: min(100% - 24px, 1200px);
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .service-card {
    min-height: 130px;
    padding: 18px 46px 16px 18px;
  }

  .service-icon {
    width: 48px;
    height: 48px;
  }

  .about-preview-container {
    width: 100%;
    grid-template-columns: 1fr;
  }

  .about-preview-content {
    padding: 36px 24px;
  }

  .about-preview h2 {
    max-width: 100%;
    font-size: clamp(28px, 8vw, 36px);
    line-height: 1.05;
  }

  .about-preview-content p {
    max-width: 100%;
    font-size: 14px;
  }

  .about-preview-image {
    width: 100%;
    min-height: 0;
  }

  .about-preview-image img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center;
  }

  .stats-container {
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-empty {
    display: none;
  }

  .stat-item {
    min-height: 78px;
    padding: 12px 18px;
  }

  .stat-item::after {
    display: none;
  }

  .stat-item:nth-child(2) {
    border-right: 1px solid #dbe3eb;
  }

  .stat-icon {
    width: 34px;
    height: 34px;
  }

  .focus-container {
    width: 100%;
    grid-template-columns: 1fr;
    min-height: 0;
  }

  .focus-container::before,
  .focus-container::after {
    display: none;
  }

  .focus-image {
    min-height: 280px;
  }

  .focus-image img {
    object-position: center;
  }

  .focus-content {
    padding: 30px 24px 34px;
  }

  .focus-content h2 {
    font-size: clamp(28px, 8vw, 36px);
  }

  .focus-description {
    margin-bottom: 22px;
    font-size: 14px;
  }

  .focus-features {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px 0;
  }

  .focus-feature {
    padding: 0 14px;
  }

  .focus-feature:nth-child(odd) {
    padding-left: 0;
    border-left: 0;
  }

  .focus-feature:nth-child(even) {
    padding-right: 0;
  }

  .focus-feature:nth-child(3) {
    border-left: 0;
  }

}

/* =========================
   MÓVIL PEQUEÑO
========================= */

@media (max-width: 480px) {
  .home-hero {
    min-height: 590px;
    background-position: 62% center;
  }

  .hero-content {
    padding: 44px 0 50px;
  }

  .hero-eyebrow {
    font-size: 10px;
    letter-spacing: 2px;
  }

  h1 {
    font-size: clamp(34px, 10vw, 42px);
  }

  .hero-description {
    font-size: 14px;
    line-height: 1.5;
  }

  .about-preview-content {
    padding: 32px 20px;
  }

  .about-preview h2 {
    font-size: clamp(27px, 8.5vw, 34px);
  }

  .about-button {
    font-size: 12px;
    padding: 0 15px;
  }

  .stats-container {
    grid-template-columns: 1fr;
  }

  .stat-item:nth-child(2) {
    border-right: 0;
    border-bottom: 1px solid #dbe3eb;
  }

  .focus-image {
    min-height: 240px;
  }

  .focus-content {
    padding: 28px 20px 30px;
  }

  .focus-content h2 {
    font-size: clamp(27px, 8.5vw, 34px);
  }

  .focus-features {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .focus-feature,
  .focus-feature:nth-child(odd),
  .focus-feature:nth-child(even) {
    padding: 0;
    border-left: 0;
  }

  .focus-feature:not(:last-child) {
    padding-bottom: 16px;
    border-bottom: 1px solid #e3e8ed;
  }

}

</style>

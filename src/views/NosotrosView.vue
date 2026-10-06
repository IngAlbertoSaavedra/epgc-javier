<template>
  <div class="about-page">
    <HeaderMain />

    <!-- HERO -->
    <section
      class="about-hero"
      :style="{ backgroundImage: `url(${heroIndustrial})` }"
    >
      <div class="about-hero-overlay"></div>

      <div class="about-hero-container">
        <p class="about-hero-kicker">CONÓCENOS</p>

        <h1>Nosotros</h1>

        <p class="about-hero-text">
          Ingeniería, gestión ambiental y seguridad industrial con enfoque
          práctico, técnico y cercano a la operación.
        </p>
      </div>
    </section>

    <!-- PRESENTACIÓN -->
    <section class="about-intro">
      <div class="about-container about-intro-grid">
        <div class="about-intro-title">
          <span class="section-kicker">
            <span>SOBRE</span>
            <strong>EPGC</strong>
            <i></i>
          </span>

          <h2>
            Construyendo operaciones
            <span>más seguras y eficientes</span>
          </h2>
        </div>

        <div class="about-intro-copy">
          <p>
            En EPGC integramos experiencia técnica, capacitación especializada
            y trabajo en campo para ayudar a empresas e industrias a prevenir
            riesgos, cumplir con la normativa y mejorar su operación.
          </p>

          <p>
            Nuestro enfoque combina ingeniería, gestión ambiental, seguridad
            industrial y formación práctica, con soluciones adaptadas a las
            necesidades reales de cada proyecto.
          </p>

          <div class="about-intro-tags">
            <span>Seguridad Industrial</span>
            <span>Consultoría</span>
            <span>Capacitación</span>
            <span>Estudios Ambientales</span>
            <span>Operación en Campo</span>
          </div>
        </div>
      </div>
    </section>

    <!-- COMPROMISO -->
    <section class="commitment-section">
      <div class="about-container">
        <div class="commitment-card">
          <p>
            Nuestro compromiso es acompañar a cada cliente con soluciones
            claras, técnicamente sólidas y orientadas a resultados, buscando
            siempre operaciones más seguras, responsables y eficientes.
          </p>
        </div>
      </div>
    </section>

    <!-- MISIÓN / VISIÓN -->
    <section class="mission-section">
      <div class="about-container mission-grid">
        <article class="mission-card">
          <div class="mission-icon">
            <img :src="engraneIcon" alt="" aria-hidden="true">
          </div>

          <h3>Misión</h3>

          <p>
            Brindar soluciones de ingeniería, seguridad industrial, gestión
            ambiental y capacitación que ayuden a nuestros clientes a operar
            con mayor seguridad, cumplimiento y eficiencia.
          </p>
        </article>

        <article class="mission-card">
          <div class="mission-icon green">
            <img :src="hojaArbolIcon" alt="" aria-hidden="true">
          </div>

          <h3>Visión</h3>

          <p>
            Ser una empresa reconocida por integrar conocimiento técnico,
            servicio en campo y formación especializada, generando valor
            sostenible para nuestros clientes y sus operaciones.
          </p>
        </article>
      </div>
    </section>

    <!-- VALORES -->
    <section class="values-section">
      <div class="about-container">
        <div class="values-panel">
          <div class="values-copy">
            <span class="values-kicker">NUESTROS VALORES</span>

            <h2>La forma en que trabajamos también importa.</h2>

            <p>
              Buscamos relaciones profesionales de largo plazo, basadas en
              cumplimiento, atención cercana y resultados que puedan llevarse
              a la operación real.
            </p>
          </div>

          <div class="values-grid">
            <article class="value-card">
              <strong>Calidad</strong>
              <span>Trabajo técnico, claro y bien ejecutado.</span>
            </article>

            <article class="value-card">
              <strong>Atención personalizada</strong>
              <span>Soluciones pensadas para cada cliente y proyecto.</span>
            </article>

            <article class="value-card">
              <strong>Excelencia</strong>
              <span>Mejora continua y compromiso con los resultados.</span>
            </article>

            <article class="value-card">
              <strong>Seguridad</strong>
              <span>La prevención como parte central de cada operación.</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- CIERRE -->
    <section class="about-cta">
      <div class="about-container about-cta-inner">
        <div>
          <span class="section-kicker">
            <span>HABLEMOS</span>
            <strong>DE TU PROYECTO</strong>
            <i></i>
          </span>

          <h2>
            Soluciones técnicas para una operación
            <span>más segura.</span>
          </h2>
        </div>


      </div>
    </section>

    <FooterMain />
  </div>
</template>

<script setup>
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'

import heroIndustrial from '../assets/images/home/hero-industrial.webp'

import engraneIcon from '../assets/icons/engrane.png'
import hojaArbolIcon from '../assets/icons/hoja_arbol.png'

</script>

<style scoped>
.about-page {
  width: 100%;
  background: #f5f7f9;
}

.about-container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

/* =========================
   HERO
========================= */

.about-hero {
  position: relative;

  min-height: 320px;

  display: flex;
  align-items: center;

  background-size: cover;
  background-position: center 46%;
  background-repeat: no-repeat;

  overflow: hidden;
}

.about-hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(4, 28, 58, 0.88) 0%,
      rgba(5, 39, 79, 0.76) 44%,
      rgba(4, 28, 58, 0.48) 100%
    );
}

.about-hero-container {
  position: relative;
  z-index: 2;

  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;

  padding: 66px 0 62px;
}

.about-hero-kicker {
  margin: 0 0 12px;

  color: #ffffff;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

.about-hero h1 {
  margin: 0;

  color: #ffffff;

  font-size: clamp(42px, 5vw, 68px);
  line-height: 1;
  font-weight: 800;
}

.about-hero-text {
  max-width: 620px;

  margin: 18px 0 0;

  color: rgba(255, 255, 255, 0.92);

  font-size: 16px;
  line-height: 1.5;
}

/* =========================
   INTRO
========================= */

.about-intro {
  padding: 72px 0 56px;
  background: #ffffff;
}

.about-intro-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 72px;
  align-items: start;
}

.section-kicker {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 15px;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.9px;
}

.section-kicker span {
  color: #173a62;
}

.section-kicker strong {
  color: #4aa64c;
}

.section-kicker i {
  display: block;

  width: 34px;
  height: 2px;

  background: #61b857;
}

.about-intro-title h2,
.about-cta h2 {
  margin: 0;

  color: #0c2d59;

  font-size: clamp(32px, 3vw, 44px);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.7px;
}

.about-intro-title h2 span,
.about-cta h2 span {
  color: #349c37;
}

.about-intro-copy {
  padding-top: 24px;
}

.about-intro-copy p {
  margin: 0 0 16px;

  color: #5f6d79;

  font-size: 14px;
  line-height: 1.65;
}

.about-intro-tags {
  margin-top: 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.about-intro-tags span {
  padding: 8px 12px;

  border: 1px solid #dce4eb;
  border-radius: 20px;

  color: #17365d;

  background: #f8fafc;

  font-size: 11px;
  font-weight: 700;
}

/* =========================
   COMPROMISO
========================= */

.commitment-section {
  padding: 0 0 34px;

  background: #ffffff;
}

.commitment-card {
  max-width: 950px;
  margin: 0 auto;

  padding: 28px 42px;

  border-top: 1px solid #dfe7ee;
  border-bottom: 3px solid #1769aa;
  border-radius: 10px;

  background: #f7f9fb;

  box-shadow: 0 8px 26px rgba(14, 46, 78, 0.05);

  text-align: center;
}

.commitment-card p {
  margin: 0;

  color: #536372;

  font-size: 14px;
  line-height: 1.65;
  font-style: italic;
}

/* =========================
   MISIÓN / VISIÓN
========================= */

.mission-section {
  padding: 22px 0 56px;

  background: #ffffff;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.mission-card {
  min-height: 250px;

  padding: 34px;

  border: 1px solid #e5ebf0;
  border-radius: 12px;

  background: #ffffff;

  box-shadow: 0 10px 30px rgba(14, 46, 78, 0.05);
}

.mission-icon {
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 10px;

  background: #eef4fb;
}

.mission-icon.green {
  background: #eef8ee;
}

.mission-icon img {
  width: 32px;
  height: 32px;

  object-fit: contain;
}

.mission-card h3 {
  margin: 0 0 12px;

  color: #17365d;

  font-size: 22px;
  font-weight: 800;
}

.mission-card p {
  margin: 0;

  color: #667482;

  font-size: 13px;
  line-height: 1.6;
}

/* =========================
   VALORES
========================= */

.values-section {
  padding: 0 0 68px;

  background: #ffffff;
}

.values-panel {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 42px;
  align-items: center;

  padding: 42px;

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      #0c2f5d 0%,
      #164f8f 100%
    );

  box-shadow: 0 16px 42px rgba(10, 45, 85, 0.16);
}

.values-kicker {
  display: block;

  margin-bottom: 10px;

  color: #82d66a;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.values-copy h2 {
  margin: 0 0 14px;

  color: #ffffff;

  font-size: clamp(28px, 2.6vw, 38px);
  line-height: 1.08;
  font-weight: 800;
}

.values-copy p {
  margin: 0;

  color: rgba(255, 255, 255, 0.82);

  font-size: 13px;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.value-card {
  min-height: 126px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);
}

.value-card strong {
  margin-bottom: 8px;

  color: #ffffff;

  font-size: 13px;
  line-height: 1.2;
}

.value-card span {
  color: rgba(255, 255, 255, 0.76);

  font-size: 11px;
  line-height: 1.4;
}

/* =========================
   CTA
========================= */

.about-cta {
  padding: 54px 0;

  background: #f4f7fa;
}

.about-cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
}

.about-cta h2 {
  max-width: 700px;
}


/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .about-intro-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .about-intro-copy {
    padding-top: 0;
  }

  .values-panel {
    grid-template-columns: 1fr;
  }

}

/* =========================
   MÓVIL
========================= */

@media (max-width: 768px) {
  .about-container,
  .about-hero-container {
    width: min(100% - 30px, 1200px);
  }

  .about-hero {
    min-height: 280px;
    background-position: 62% center;
  }

  .about-hero-container {
    padding: 54px 0 50px;
  }

  .about-hero h1 {
    font-size: clamp(38px, 10vw, 52px);
  }

  .about-hero-text {
    font-size: 14px;
  }

  .about-intro {
    padding: 50px 0 40px;
  }

  .mission-grid {
    grid-template-columns: 1fr;
  }

  .mission-card {
    min-height: 0;
  }

  .values-panel {
    padding: 30px 24px;
  }

  .values-grid {
    grid-template-columns: 1fr 1fr;
  }

  .about-cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

/* =========================
   MÓVIL PEQUEÑO
========================= */

@media (max-width: 480px) {
  .about-container,
  .about-hero-container {
    width: min(100% - 24px, 1200px);
  }

  .about-intro-title h2,
  .about-cta h2 {
    font-size: clamp(28px, 9vw, 36px);
  }

  .commitment-card {
    padding: 24px 20px;
  }

  .mission-card {
    padding: 26px 22px;
  }

  .values-panel {
    padding: 26px 20px;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .value-card {
    min-height: 0;
  }

}
</style>

<template>
  <div class="trainers-page">
    <HeaderMain />

    <!-- HERO -->
    <section class="trainers-hero">
      <div class="trainers-hero-overlay"></div>

      <div class="trainers-container trainers-hero-content">
        <p class="trainers-kicker">NUESTRO EQUIPO</p>

        <h1>Capacitadores</h1>

        <p>
          Profesionales con experiencia técnica y enfoque práctico para llevar
          el conocimiento directamente a la operación.
        </p>
      </div>
    </section>

    <!-- PRESENTACIÓN -->
    <section class="trainers-intro">
      <div class="trainers-container">
        <span class="section-kicker">
          <span>EXPERIENCIA</span>
          <strong>APLICADA</strong>
          <i></i>
        </span>

        <div class="trainers-intro-grid">
          <h2>
            Formación técnica con enfoque
            <span>en campo y resultados.</span>
          </h2>

          <p>
            En EPGC buscamos que cada capacitación conecte la normativa con la
            realidad operativa. Nuestros capacitadores combinan experiencia,
            comunicación clara y criterio técnico para que los participantes
            comprendan, practiquen y apliquen lo aprendido.
          </p>
        </div>
      </div>
    </section>

    <!-- CAPACITADOR DE MUESTRA -->
    <section class="trainer-feature">
      <div class="trainers-container trainer-feature-grid">

        <div class="trainer-photo-wrap">
          <div class="trainer-photo-frame">
            <img
              :src="trainerPhoto"
              alt="Capacitador EPGC"
              class="trainer-photo"
            >
          </div>

          <div class="trainer-photo-accent"></div>
        </div>

        <div class="trainer-content">
          <span class="trainer-label">CAPACITADOR DE MUESTRA</span>

          <h2>Saavedra</h2>

          <p class="trainer-role">
            Instructor técnico · Seguridad, operación y cumplimiento
          </p>

          <p class="trainer-description">
            Perfil orientado a la capacitación práctica, con enfoque en
            seguridad industrial, prevención de riesgos y aplicación de
            criterios normativos dentro de entornos de trabajo.
          </p>

          <div class="trainer-specialties">
            <span>Seguridad Industrial</span>
            <span>Prevención de Riesgos</span>
            <span>Trabajo en Campo</span>
            <span>Capacitación Técnica</span>
          </div>

          <div class="trainer-credentials">
            <h3>Certificaciones y acreditaciones</h3>

            <article class="credential-card">
              <div class="credential-number">01</div>

              <div>
                <strong>
                  Certificación de muestra en Seguridad y Salud en el Trabajo
                </strong>

                <span>
                  Enfoque práctico para identificación de peligros, evaluación
                  de riesgos y controles operativos.
                </span>
              </div>
            </article>

            <article class="credential-card">
              <div class="credential-number">02</div>

              <div>
                <strong>
                  Acreditación de muestra en trabajos de alto riesgo
                </strong>

                <span>
                  Capacitación relacionada con trabajo en alturas, espacios
                  confinados y procedimientos seguros.
                </span>
              </div>
            </article>

            <article class="credential-card">
              <div class="credential-number">03</div>

              <div>
                <strong>
                  Certificación de muestra en cumplimiento normativo STPS
                </strong>

                <span>
                  Interpretación y aplicación operativa de requisitos de
                  seguridad y documentación preventiva.
                </span>
              </div>
            </article>
          </div>

          <p class="trainer-note">
            Información de muestra para definir el diseño. Las certificaciones
            y acreditaciones deberán sustituirse por las oficiales antes de
            publicar esta sección como información definitiva.
          </p>
        </div>

      </div>
    </section>

    <!-- ENFOQUE -->
    <section class="trainer-method">
      <div class="trainers-container">
        <div class="trainer-method-panel">
          <div>
            <span class="method-kicker">NUESTRO ENFOQUE</span>

            <h2>
              Capacitar no es sólo explicar una norma.
              <span>Es lograr que se aplique.</span>
            </h2>
          </div>

          <div class="method-grid">
            <article>
              <strong>01</strong>
              <h3>Contexto real</h3>
              <p>
                Ejemplos y situaciones vinculadas con el entorno de trabajo.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Práctica</h3>
              <p>
                Actividades orientadas a reforzar la comprensión y la ejecución.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Aplicación</h3>
              <p>
                Conocimiento pensado para convertirse en acciones concretas.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <FooterMain />
  </div>
</template>

<script setup>
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'

import trainerPhoto from '../assets/images/capacitadores/capacitador-saavedra.jpg'
</script>

<style scoped>
.trainers-page {
  width: 100%;
  background: #ffffff;
}

.trainers-container {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

/* =========================
   HERO
========================= */

.trainers-hero {
  position: relative;

  min-height: 330px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      #0b2f5e 0%,
      #164f8f 62%,
      #1d6fae 100%
    );
}

.trainers-hero::after {
  content: '';

  position: absolute;
  inset: 0 0 0 auto;

  width: 48%;

  background:
    radial-gradient(
      circle at 70% 40%,
      rgba(84, 190, 73, 0.18) 0%,
      rgba(84, 190, 73, 0) 55%
    );
}

.trainers-hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(5, 28, 58, 0.20) 0%,
      rgba(5, 28, 58, 0.06) 100%
    );
}

.trainers-hero-content {
  position: relative;
  z-index: 2;

  padding: 68px 0 64px;
}

.trainers-kicker {
  margin: 0 0 12px;

  color: #9cdb82;

  font-size: 11px;
  font-weight: 800;
  letter-spacing: 3px;
}

.trainers-hero h1 {
  margin: 0;

  color: #ffffff;

  font-size: clamp(44px, 5vw, 68px);
  line-height: 1;
  font-weight: 800;
}

.trainers-hero p:not(.trainers-kicker) {
  max-width: 650px;

  margin: 18px 0 0;

  color: rgba(255, 255, 255, 0.90);

  font-size: 16px;
  line-height: 1.55;
}

/* =========================
   INTRO
========================= */

.trainers-intro {
  padding: 62px 0 46px;

  background: #ffffff;
}

.section-kicker {
  display: flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 14px;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.8px;
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

.trainers-intro-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 58px;
  align-items: start;
}

.trainers-intro-grid h2 {
  margin: 0;

  color: #0c2d59;

  font-size: clamp(31px, 3vw, 43px);
  line-height: 1.06;
  font-weight: 800;
  letter-spacing: -0.6px;
}

.trainers-intro-grid h2 span {
  color: #349c37;
}

.trainers-intro-grid p {
  margin: 4px 0 0;

  color: #5f6d79;

  font-size: 14px;
  line-height: 1.65;
}

/* =========================
   PERFIL
========================= */

.trainer-feature {
  padding: 20px 0 66px;

  background: #f5f7f9;
}

.trainer-feature-grid {
  display: grid;
  grid-template-columns: 0.78fr 1.22fr;
  gap: 56px;
  align-items: center;

  padding-top: 46px;
}

.trainer-photo-wrap {
  position: relative;

  display: flex;
  justify-content: center;
}

.trainer-photo-frame {
  position: relative;
  z-index: 2;

  width: min(100%, 440px);

  overflow: hidden;

  border-radius: 18px;

  background: #ffffff;

  box-shadow:
    0 18px 44px rgba(12, 45, 84, 0.14);
}

.trainer-photo {
  display: block;

  width: 100%;
  aspect-ratio: 3 / 4;

  object-fit: cover;
  object-position: center 15%;
}

.trainer-photo-accent {
  position: absolute;
  z-index: 1;

  left: 7%;
  bottom: -18px;

  width: 86%;
  height: 74%;

  border-radius: 18px;

  background:
    linear-gradient(
      135deg,
      #0b2f5e 0%,
      #1769aa 100%
    );
}

.trainer-label {
  display: block;

  margin-bottom: 10px;

  color: #4aa64c;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.trainer-content h2 {
  margin: 0;

  color: #0c2d59;

  font-size: clamp(34px, 3.4vw, 48px);
  line-height: 1;
  font-weight: 800;
}

.trainer-role {
  margin: 10px 0 18px;

  color: #1769aa;

  font-size: 14px;
  font-weight: 700;
}

.trainer-description {
  max-width: 700px;

  margin: 0;

  color: #5f6d79;

  font-size: 14px;
  line-height: 1.65;
}

.trainer-specialties {
  margin: 22px 0 30px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.trainer-specialties span {
  padding: 8px 11px;

  border: 1px solid #dce4eb;
  border-radius: 20px;

  color: #17365d;

  background: #ffffff;

  font-size: 10px;
  font-weight: 700;
}

.trainer-credentials h3 {
  margin: 0 0 14px;

  color: #17365d;

  font-size: 18px;
  font-weight: 800;
}

.credential-card {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  align-items: start;

  padding: 15px 0;

  border-bottom: 1px solid #dfe6ec;
}

.credential-number {
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: #ffffff;

  background: #0b2f5e;

  font-size: 11px;
  font-weight: 800;
}

.credential-card strong {
  display: block;

  margin-bottom: 4px;

  color: #18385f;

  font-size: 12px;
  line-height: 1.3;
}

.credential-card span {
  color: #697581;

  font-size: 11px;
  line-height: 1.45;
}

.trainer-note {
  margin: 16px 0 0;

  color: #88929b;

  font-size: 10px;
  line-height: 1.45;
  font-style: italic;
}

/* =========================
   MÉTODO
========================= */

.trainer-method {
  padding: 0 0 70px;

  background: #ffffff;
}

.trainer-method-panel {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 48px;
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

.method-kicker {
  display: block;

  margin-bottom: 10px;

  color: #8bd873;

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 2px;
}

.trainer-method h2 {
  margin: 0;

  color: #ffffff;

  font-size: clamp(28px, 2.8vw, 39px);
  line-height: 1.08;
  font-weight: 800;
}

.trainer-method h2 span {
  color: #8bd873;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.method-grid article {
  min-height: 150px;

  padding: 20px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);
}

.method-grid strong {
  display: block;

  margin-bottom: 10px;

  color: #8bd873;

  font-size: 11px;
  letter-spacing: 1px;
}

.method-grid h3 {
  margin: 0 0 8px;

  color: #ffffff;

  font-size: 14px;
  font-weight: 800;
}

.method-grid p {
  margin: 0;

  color: rgba(255, 255, 255, 0.76);

  font-size: 11px;
  line-height: 1.45;
}

/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
  .trainers-intro-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .trainer-feature-grid {
    grid-template-columns: 0.9fr 1.1fr;
    gap: 34px;
  }

  .trainer-method-panel {
    grid-template-columns: 1fr;
  }
}

/* =========================
   MÓVIL
========================= */

@media (max-width: 768px) {
  .trainers-container {
    width: min(100% - 30px, 1200px);
  }

  .trainers-hero {
    min-height: 280px;
  }

  .trainers-hero-content {
    padding: 54px 0 50px;
  }

  .trainers-hero h1 {
    font-size: clamp(38px, 10vw, 52px);
  }

  .trainers-hero p:not(.trainers-kicker) {
    font-size: 14px;
  }

  .trainers-intro {
    padding: 48px 0 36px;
  }

  .trainer-feature {
    padding-bottom: 48px;
  }

  .trainer-feature-grid {
    grid-template-columns: 1fr;
    gap: 46px;

    padding-top: 32px;
  }

  .trainer-photo-frame {
    width: min(88%, 390px);
  }

  .trainer-photo-accent {
    left: 12%;
    width: 76%;
  }

  .trainer-content {
    text-align: left;
  }

  .trainer-specialties {
    margin-bottom: 24px;
  }

  .trainer-method {
    padding-bottom: 50px;
  }

  .trainer-method-panel {
    padding: 30px 24px;
  }

  .method-grid {
    grid-template-columns: 1fr;
  }

  .method-grid article {
    min-height: 0;
  }
}

/* =========================
   MÓVIL PEQUEÑO
========================= */

@media (max-width: 480px) {
  .trainers-container {
    width: min(100% - 24px, 1200px);
  }

  .trainers-hero {
    min-height: 250px;
  }

  .trainers-hero-content {
    padding: 48px 0 44px;
  }

  .trainers-intro-grid h2 {
    font-size: clamp(28px, 9vw, 36px);
  }

  .trainer-photo-frame {
    width: 100%;
  }

  .trainer-photo {
    aspect-ratio: 4 / 5;
  }

  .trainer-photo-accent {
    left: 8%;
    width: 84%;
    bottom: -14px;
  }

  .trainer-content h2 {
    font-size: clamp(32px, 10vw, 42px);
  }

  .trainer-method-panel {
    padding: 26px 20px;
  }
}
</style>

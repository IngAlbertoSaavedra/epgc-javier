<template>
  <footer
    class="site-footer"
    :style="{ backgroundImage: `url(${footerIndustrial})` }"
  >
    <div class="footer-overlay"></div>

    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-brand">
          <img
            :src="logoBlanco"
            alt="EPGC Ingeniería y Gestión Ambiental"
            class="footer-logo"
          >
        </div>

        <div class="footer-contact">
          <h4>Contacto</h4>

          <ul class="footer-contact-list">
            <li>
              <img :src="iconPosicion" alt="" class="footer-contact-icon" aria-hidden="true">
              <span>{{ contacto.ubicacion }}</span>
            </li>

            <li>
              <img :src="iconSobre" alt="" class="footer-contact-icon" aria-hidden="true">
              <a :href="`mailto:${contacto.correo}`">{{ contacto.correo }}</a>
            </li>

            <li class="footer-phone-item">
              <img
                :src="iconTelefono"
                alt=""
                class="footer-contact-icon"
                aria-hidden="true"
              >

              <div class="footer-phone-list">
                <a
                  v-for="telefono in contacto.telefonos"
                  :key="telefono"
                  :href="`tel:${telefono.replace(/\D/g, '')}`"
                >
                  {{ telefono }}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="footer-social">
          <h4>Síguenos</h4>

          <div class="footer-social-links">
            <a href="#" class="footer-social-link" aria-label="Facebook">
              <img :src="iconFacebook" alt="Facebook" class="footer-social-icon">
            </a>

            <a href="#" class="footer-social-link" aria-label="Instagram">
              <img :src="iconInstagram" alt="Instagram" class="footer-social-icon">
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copy">
          © 2026 EPGC, Ingeniería y Gestión Ambiental. Todos los derechos reservados.
        </p>

        <div class="footer-legal">
          <a href="#">Aviso de privacidad</a>
          <span>|</span>
          <a href="#">Términos y condiciones</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import footerIndustrial from '../../assets/images/footer/footer-industrial.webp'
import logoBlanco from '../../assets/images/logo/logo-blanco.png'

import iconPosicion from '../../assets/icons/posicion.png'
import iconSobre from '../../assets/icons/sobre.png'
import iconTelefono from '../../assets/icons/telefono.png'
import iconFacebook from '../../assets/icons/facebook.png'
import iconInstagram from '../../assets/icons/instagram.png'

const contacto = {
  ubicacion: 'Priv. El Mirador No. 10, La Sillita, Tonalá.',
  correo: 'contacto@epgc.com',
  telefonos: [
    '33.14.14.33.36',
    '33.18.95.57.92',
    '33.29.65.20.09'
  ]
}
</script>

<style scoped>
.site-footer {
  position: relative;
  overflow: hidden;
  width: 100%;
  color: #ffffff;
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(2, 26, 56, 0.88) 0%,
    rgba(3, 35, 72, 0.82) 50%,
    rgba(3, 43, 87, 0.72) 100%
  );
  pointer-events: none;
}

.footer-container {
  position: relative;
  z-index: 1;
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
  padding: 28px 0 14px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.25fr 1fr 0.55fr;
  gap: 54px;
  align-items: start;
}

.footer-brand {
  display: flex;
  align-items: flex-start;
}

.footer-logo {
  display: block;
  width: 100%;
  max-width: 275px;
  height: auto;
}

.footer-contact h4,
.footer-social h4 {
  margin: 0 0 12px;
  color: #ffffff;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 700;
}

.footer-contact-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.footer-contact-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 13px;
  line-height: 1.35;
}

.footer-contact-list a {
  color: rgba(255, 255, 255, 0.88);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-contact-list a:hover {
  color: #ffffff;
}

.footer-contact-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
  flex: 0 0 16px;
}

.footer-social-links {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-social-link {
  width: 36px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.footer-social-link:hover {
  transform: translateY(-1px);
}

.footer-social-icon {
  display: block;
  width: 34px;
  height: 34px;
  margin: 0;
  padding: 0;
  object-fit: contain;
}

.footer-bottom {
  margin-top: 22px;
  padding-top: 13px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}

.footer-copy {
  margin: 0;
  color: rgba(255, 255, 255, 0.76);
  font-size: 11px;
  line-height: 1.4;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 9px;
  flex-wrap: wrap;
}

.footer-legal span {
  color: rgba(255, 255, 255, 0.32);
}

.footer-legal a {
  color: rgba(255, 255, 255, 0.76);
  font-size: 11px;
  line-height: 1.4;
  text-decoration: none;
}

.footer-legal a:hover {
  color: #ffffff;
}

.footer-phone-item {
  align-items: flex-start;
}

.footer-phone-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-phone-list a {
  display: block;
}

@media (max-width: 1000px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 30px 40px;
  }

  .footer-brand {
    grid-column: 1 / -1;
  }

  .footer-logo {
    max-width: 245px;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .footer-container {
    width: min(100% - 30px, 1200px);
    padding: 26px 0 14px;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    grid-template-areas:
      "brand contact"
      "social social";

    gap: 22px 18px;
    align-items: start;
  }

  .footer-brand {
    grid-area: brand;
    padding-left: 14px;
  }

  .footer-logo {
    max-width: 180px;
  }

  .footer-contact {
    grid-area: contact;
    padding-left: 10px;
  }

  .footer-social {
    grid-area: social;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-contact-list {
    gap: 8px;
  }

  .footer-contact-list li {
    font-size: 11px;
    line-height: 1.3;
  }

  .footer-contact-icon {
    width: 14px;
    height: 14px;
    flex: 0 0 14px;
  }

  .footer-phone-item {
    align-items: flex-start;
  }

  .footer-phone-list {
    gap: 3px;
    min-width: 0;
  }

  .footer-phone-list a {
    white-space: nowrap;
    font-size: 11px;
    line-height: 1.25;
  }

  .footer-social h4 {
    text-align: center;
  }

  .footer-social-links {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .footer-bottom {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    width: min(100% - 24px, 1200px);
    padding: 24px 0 13px;
  }

  .footer-top {
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 20px 12px;
  }

  .footer-brand {
    padding-left: 6px;
  }

  .footer-logo {
    max-width: 150px;
  }

  .footer-contact {
    padding-left: 4px;
    min-width: 0;
  }

  .footer-contact h4,
  .footer-social h4 {
    font-size: 14px;
  }

  .footer-contact-list {
    gap: 7px;
  }

  .footer-contact-list li {
    gap: 8px;
    font-size: 10px;
    line-height: 1.25;
  }

  .footer-contact-icon {
    width: 13px;
    height: 13px;
    flex: 0 0 13px;
  }

  .footer-phone-list {
    gap: 2px;
  }

  .footer-phone-list a {
    font-size: 10px;
    line-height: 1.2;
  }

  .footer-social-link,
  .footer-social-icon {
    width: 32px;
    height: 32px;
  }

  .footer-copy,
  .footer-legal a {
    font-size: 10px;
  }
}
</style>

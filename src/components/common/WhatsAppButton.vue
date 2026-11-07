<template>
  <a
    :href="whatsappUrl"
    class="whatsapp-button"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar a EPGC por WhatsApp"
    title="Contáctanos por WhatsApp"
  >
    <img :src="whatsappIcon" alt="" aria-hidden="true" />
  </a>
</template>

<script setup>
import whatsappIcon from "../../assets/icons/whatsapp.svg";

const telefono = "523316673430";
const mensaje =
  "Hola, buen día. Visité el sitio web de EPGC y me gustaría recibir información sobre sus servicios.";
const whatsappUrl = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 58px;
  height: 58px;
  padding: 11px;

  background: #25d366;
  border-radius: 50%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.whatsapp-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.25);
}

.whatsapp-button:focus-visible {
  outline: 3px solid #0b2f5e;
  outline-offset: 3px;
}

.whatsapp-button img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 768px) {
  .whatsapp-button {
    right: 16px;
    bottom: 16px;
    width: 54px;
    height: 54px;
    padding: 10px;
  }
}
</style>

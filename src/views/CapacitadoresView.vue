<template>
  <div class="capacitadores-page">
    <HeaderMain />

    <main class="capacitadores-main">
      <img
        :src="comingSoonImage"
        alt="EPGC - Capacitadores, próximamente"
        class="capacitadores-image"
      />
    </main>

    <FooterMain />
  </div>
</template>

<script setup>
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
import comingSoonImage from '../assets/images/capacitadores/coming soon.png'
</script>

<style scoped>
.capacitadores-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
}

.capacitadores-main {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 24px;
}

.capacitadores-image {
  display: block;
  width: 100%;
  max-width: 1080px;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .capacitadores-main {
    padding: 24px 16px;
  }

  .capacitadores-image {
    border-radius: 8px;
  }
}

@media (max-width: 480px) {
  .capacitadores-main {
    padding: 18px 12px;
  }

  .capacitadores-image {
    border-radius: 6px;
  }
}
</style>

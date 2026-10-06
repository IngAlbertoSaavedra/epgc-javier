<script setup>
import HeaderMain from '../components/layout/HeaderMain.vue'
import FooterMain from '../components/layout/FooterMain.vue'
import HomeHero from '../components/home/HomeHero.vue'
</script>

<template>
  <div class="home-view">
    <HeaderMain />

    <main>
      <HomeHero />
    </main>

    <FooterMain />
  </div>
</template>

<style scoped>
.home-view {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  color: #0b2f5e;
}

main {
  width: 100%;
}
</style>

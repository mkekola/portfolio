<template>
  <q-page>
    <section class="hero">
      <q-img src="/hero.jpg" :ratio="16 / 9" class="hero-bg">
        <div class="absolute-full bg-overlay"></div>
        <div class="absolute-full column items-center justify-center text-center">
          <div class="text-h2 text-weight-bold text-white">{{ cv.name }}</div>
        </div>
      </q-img>
    </section>

    <section id="about" class="section container">About…</section>
    <section id="skills" class="section alt container">Skills…</section>
    <section id="experience" class="section container">Experience…</section>
    <section id="education" class="section alt container">Education…</section>
    <section id="contact" class="section container">Contact…</section>

    <footer class="q-pa-lg text-center text-caption text-secondary">
      © {{ new Date().getFullYear() }} {{ cv.name }}
    </footer>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const cv = reactive({ name: 'Maria Kekola' });
</script>

<style scoped>
.hero-bg {
  height: 68vh;
  min-height: 460px;
}
.bg-overlay {
  background: linear-gradient(
    180deg,
    rgba(19, 13, 13, 0.36) 0%,
    rgba(27, 52, 88, 0.36) 60%,
    rgba(27, 52, 88, 0.55) 100%
  );
}
.section {
  padding: 64px 0;
}
.section.alt {
  background: #f2e3c0;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>

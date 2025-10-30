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

    <SectionNav />

    <section id="about" class="section container">
      <div class="row q-col-gutter-xl items-start">
        <div class="col-12 col-md-7">
          <div class="text-h5 text-weight-bold q-mb-sm">Hello, I'm {{ cv.name.split(' ')[0] }}</div>
          <p class="text-body1 q-mb-none"></p>
        </div>
        <div class="col-12 col-md-5">
          <q-card flat bordered class="q-pa-md">
            <div class="text-subtitle2 text-uppercase text-secondary q-mb-sm">
              Hobbies & Interests
            </div>
            <div class="row q-col-gutter-md items-center">
              <div v-for="h in hobbies" :key="h.label" class="col-auto column items-center q-pa-sm">
                <q-avatar size="48px" class="bg-grey-2"
                  ><q-icon :name="h.icon" size="28px"
                /></q-avatar>
                <div class="text-caption q-mt-xs">{{ h.label }}</div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </section>
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
import SectionNav from 'src/components/SectionNav.vue';
const cv = reactive({ name: 'Maria Kekola' });
const hobbies = [
  { icon: 'camera_alt', label: 'Photography' },
  { icon: 'brush', label: 'Arts' },
  { icon: 'sports_esports', label: 'Games' },
  { icon: 'sports_gymnastics', label: 'Gym Climbing' },
  { icon: 'downhill_skiing', label: 'Downhill Skiing' },
  { icon: 'flight_takeoff', label: 'Travel' },
];
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

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
    <section id="education" class="section alt">
      <div class="container">
        <div class="text-h6 text-uppercase text-weight-bold q-mb-md">Education</div>
        <q-list bordered class="rounded-borders">
          <q-item v-for="ed in education" :key="ed.school">
            <q-item-section>
              <div class="text-subtitle2">{{ ed.degree }} — {{ ed.school }}</div>
              <div class="text-caption text-secondary">{{ ed.period }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </section>
    <section id="experience" class="section container">
      <div class="text-h6 text-uppercase text-weight-bold q-mb-md">Experience</div>
      <q-timeline color="primary" layout="comfortable" side="right" dense>
        <q-timeline-entry
          v-for="job in experience"
          :key="job.company"
          :title="job.role + ' — ' + job.company"
          :subtitle="job.period"
        >
          <ul class="q-mt-sm q-mb-none">
            <li v-for="b in job.bullets" :key="b">{{ b }}</li>
          </ul>
          <div class="q-mt-sm"></div>
        </q-timeline-entry>
      </q-timeline>
    </section>
    <section id="skills" class="section alt container">Skills…</section>
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
const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'University of Helsinki',
    period: '2021–2026(ongoing)',
  },
];
const experience = [
  {
    role: 'Network Trainee',
    company: 'Finavia Oyj',
    period: '2023–Now',
    bullets: [
      'Configurations',
      'Network monitoring',
      'Troubleshooting',
      'Documentation',
      'Customer support',
    ],
  },
  {
    role: 'Service Manager',
    company: 'CSF Security Oy',
    period: '2019–2022',
    bullets: ['Team lead', 'Customer support', 'Scheduling', 'Reporting'],
  },
  {
    role: 'Cash-in-Transit Guard',
    company: 'CSF Security Oy',
    period: '2017–2019',
    bullets: ['Secure transportation of valuables', 'Customer service'],
  },
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

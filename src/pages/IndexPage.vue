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

    <PaperSection id="about" title="About">
      <div class="row q-col-gutter-xl items-start">
        <div class="col-12 col-md-7">
          <div class="text-h5 text-weight-bold q-mb-sm">
            Hello, I'm {{ cv.name.split(' ')[0] }}🫡
          </div>
          <p class="text-body1 q-mb-none">
            I'm a computer science student at the University of Helsinki. My background includes
            network and service tasks as well as customer and support roles, so I know how to
            combine technical understanding with smooth service. I spend my free time doing
            photography, hiking, and playing games which fuel my curiosity and problem-solving at
            work too. I'm always eager to learn new skills and take on challenges that help me grow
            both personally and professionally.
          </p>
        </div>
        <div class="col-12 col-md-5">
          <q-card flat bordered class="q-pa-md">
            <div class="text-h6 text-uppercase text-secondary q-mb-sm">Hobbies & Interests</div>
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
    </PaperSection>
    <PaperSection id="education" title="Education">
      <div class="container">
        <q-list bordered class="rounded-borders">
          <q-item v-for="ed in education" :key="ed.school">
            <q-item-section>
              <div class="text-subtitle2">{{ ed.degree }} — {{ ed.school }}</div>
              <div class="text-caption text-secondary">{{ ed.period }}</div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </PaperSection>
    <PaperSection id="experience" title="Experience">
      <q-timeline color="primary" layout="comfortable" side="right" dense>
        <q-timeline-entry
          v-for="job in experience"
          :key="job.company"
          :title="job.role + ' — ' + job.company"
          :subtitle="job.period"
        >
          <ul class="list-plain q-mt-sm q-mb-none" role="list">
            <li v-for="(b, j) in job.bullets" :key="j" role="listitem">{{ b }}</li>
          </ul>
          <div class="q-mt-sm"></div>
        </q-timeline-entry>
      </q-timeline>
    </PaperSection>
    <PaperSection id="volunteer" title="Volunteer Work">
      <q-timeline color="info" layout="comfortable" side="right" dense>
        <q-timeline-entry
          v-for="(v, i) in volunteer"
          :key="i"
          :title="v.role + ' — ' + v.org"
          :subtitle="v.period"
        >
          <ul class="list-plain q-mt-xs q-mb-none" role="list">
            <li v-for="(b, j) in v.bullets" :key="j" role="listitem">{{ b }}</li>
          </ul>
        </q-timeline-entry>
      </q-timeline>
    </PaperSection>
    <PaperSection id="skills" title="Skills">
      <div class="container">
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <q-list bordered class="rounded-borders">
              <q-item v-for="s in skills.left" :key="s.label">
                <q-item-section avatar>
                  <q-icon :name="s.icon" size="28px" color="primary" />
                </q-item-section>
                <q-item-section>
                  <div class="text-subtitle2">{{ s.label }}</div>
                  <div v-if="s.note" class="text-caption text-secondary">{{ s.note }}</div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <q-list bordered class="rounded-borders">
              <q-item v-for="s in skills.right" :key="s.label">
                <q-item-section avatar>
                  <q-icon :name="s.icon" size="28px" color="primary" />
                </q-item-section>
                <q-item-section>
                  <div class="text-subtitle2">{{ s.label }}</div>
                  <div v-if="s.note" class="text-caption text-secondary">{{ s.note }}</div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </PaperSection>
    <PaperSection id="contact" title="Contact">
      <q-card flat bordered class="q-pa-md">
        <q-list dense>
          <q-item
            v-for="c in contacts"
            :key="c.label"
            clickable
            tag="a"
            :href="c.href"
            target="_blank"
            rel="noopener"
          >
            <q-item-section avatar><q-icon :name="c.icon" /></q-item-section>
            <q-item-section>{{ c.label }}</q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </PaperSection>

    <footer class="q-pa-lg text-center text-caption text-secondary">
      © {{ new Date().getFullYear() }} {{ cv.name }}
    </footer>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import SectionNav from 'src/components/SectionNav.vue';
import PaperSection from 'src/components/PaperSection.vue';
const cv = reactive({ name: 'Maria Kekola' });
const hobbies = [
  { icon: 'fa-solid fa-camera', label: 'Photography' },
  { icon: 'fa-solid fa-paint-brush', label: 'Arts' },
  { icon: 'fa-solid fa-gamepad', label: 'Games' },
  { icon: 'fa-solid fa-plane-departure', label: 'Travel' },
  { icon: 'fa-solid fa-person-running', label: 'Gym Climbing' },
  { icon: 'fa-solid fa-person-skiing', label: 'Downhill Skiing' },
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
const volunteer = [
  {
    role: 'Treasurer',
    org: 'Ylioppilaskamera ry',
    period: '2023–ongoing',
    bullets: ['Budget planning, financial reporting, membership management.'],
  },
  {
    role: 'Board Member',
    org: 'Ylioppilaskamera ry',
    period: '2023-ongoing',
    bullets: ['Event planning, organizing workshops'],
  },
  {
    role: 'Publicist, Social Media Manager',
    org: 'TKO-äly ry',
    period: '2022–2023',
    bullets: [
      'Content creation, social media management, event promotion, graphic design, newsletter production.',
    ],
  },
];
const skills = {
  left: [
    { icon: 'fa-brands fa-python', label: 'Python', note: 'Flask' },
    { icon: 'fa-solid fa-database', label: 'SQL', note: 'SQLite' },
    { icon: 'fa-brands fa-js', label: 'JavaScript/TypeScript', note: 'React, Vue 3, Quasar' },
    { icon: 'fa-brands fa-git', label: 'Version Control', note: 'Git, GitHub' },
    { icon: 'fa-brands fa-docker', label: 'Containerization', note: 'Docker' },
    { icon: 'fa-solid fa-code', label: 'Web fundamentals', note: 'HTML, CSS' },
  ],
  right: [
    { icon: 'fa-brands fa-linux', label: 'Linux', note: 'Ubuntu' },
    {
      icon: 'fa-solid fa-file-word',
      label: 'Office Software',
      note: 'MS Office, Google Workspace',
    },
    { icon: 'fa-solid fa-camera', label: 'Photo Editing', note: 'Adobe Photoshop, Lightroom' },
    {
      icon: 'fa-solid fa-language',
      label: 'Languages',
      note: 'Finnish (native), English (fluent), Japanese (basic)',
    },
    {
      icon: 'fa-solid fa-user-friends',
      label: 'Soft Skills',
      note: 'Teamwork, Communication, Team Leadership, Adaptability, Problem-Solving, Customer Service, Critical Thinking, Creativity',
    },
  ],
};
const contacts = [
  { icon: 'fa-solid fa-envelope', label: 'Gmail', href: 'mailto:maria.kekola@gmail.com' },
  {
    icon: 'fa-brands fa-linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/maria-kekola-9869aa13a',
  },
  { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/mkekola' },
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
    rgba(95, 93, 93, 0.36) 0%,
    rgba(95, 93, 93, 0.36) 60%,
    rgba(95, 93, 93, 0.36) 100%
  );
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
}
.list-plain {
  list-style: none;
  padding: 0;
  margin: 0;
}
.text-caption {
  font-size: 0.9rem;
}
.text-subtitle2 {
  font-size: 1.1rem;
}
</style>

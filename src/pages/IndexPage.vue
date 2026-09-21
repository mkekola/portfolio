<template>
  <q-page>
    <BackgroundBlobs />

    <div class="page-inner">
      <SectionNav />

      <section class="hero">
        <div class="hero-text">
          <div class="badge">
            <span class="dot"></span>
            {{ $t('hero.badge') }}
          </div>
          <h1 class="hero-name">{{ cv.name }}</h1>
          <div class="hero-tagline">{{ $t('hero.tagline') }}</div>
          <p class="hero-subtitle">{{ $t('hero.subtitle') }}</p>
          <div class="hero-cta">
            <button class="btn btn-primary" @click="downloadCv">
              <q-icon name="fa-solid fa-download" size="16px" />
              {{ $t('hero.downloadCv') }}
            </button>
            <router-link to="/portfolio" class="btn btn-secondary">
              <q-icon name="fa-solid fa-diagram-project" size="16px" />
              {{ $t('hero.portfolioCta') }}
            </router-link>
            <button class="btn btn-secondary" @click="to('#contact')">
              {{ $t('hero.contactCta') }}
              <q-icon name="fa-solid fa-arrow-right" size="16px" />
            </button>
          </div>
        </div>
        <div class="hero-photo">
          <img src="/hero.jpg" :alt="cv.name" />
          <div class="hero-photo-overlay"></div>
        </div>
      </section>

      <PaperSection id="about" index="01" :title="$t('section.about')">
        <div class="row q-col-gutter-lg items-start">
          <div class="col-12 col-md-7">
            <div class="text-h5 text-weight-bold about-hello">
              {{ $t('about.hello') }}
            </div>
            <p class="text-body1 about-body">{{ $t('about.body') }}</p>
          </div>
          <div class="col-12 col-md-5">
            <div class="hobbies-card">
              <div class="hobbies-title">{{ t('hobbies.title') }}</div>
              <div class="hobbies-grid">
                <div v-for="h in hobbies" :key="h.key" class="hobby-item">
                  <div class="icon-circle">
                    <q-icon :name="h.icon" size="20px" />
                  </div>
                  <div class="hobby-label" v-html="breakLabel(t(`hobbies.${h.key}`))"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PaperSection>

      <PaperSection id="education" index="02" :title="$t('section.education')">
        <div class="row q-col-gutter-lg">
          <div v-for="k in education" :key="k" class="col-12 col-md-6">
            <div class="info-card">
              <div class="icon-circle icon-circle-lg">
                <q-icon name="fa-solid fa-graduation-cap" size="20px" />
              </div>
              <div>
                <div class="info-title">
                  {{ t(`education.${k}.degree`) }}
                </div>
                <div class="info-sub">{{ t(`education.${k}.school`) }}</div>
                <div class="info-period">{{ t(`education.${k}.period`) }}</div>
              </div>
            </div>
          </div>
        </div>
      </PaperSection>

      <PaperSection id="experience" index="03" :title="$t('section.experience')">
        <q-timeline color="accent" :layout="timelineLayout" side="right" class="glass-timeline">
          <q-timeline-entry
            v-for="k in experience"
            :key="k"
            :class="{ 'timeline-entry--active': k === currentExperienceKey }"
            :title="`${t(`experience.${k}.role`)} — ${t(`experience.${k}.company`)}`"
            :subtitle="t(`experience.${k}.period`)"
          >
            <div class="pill-row q-mt-sm">
              <span v-for="(b, i) in tm(`experience.${k}.details`) as string[]" :key="i" class="tag">{{
                b
              }}</span>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </PaperSection>

      <PaperSection id="volunteer" index="04" :title="$t('section.volunteer')">
        <q-timeline color="accent" :layout="timelineLayout" side="right" class="glass-timeline">
          <q-timeline-entry
            v-for="k in volunteer"
            :key="k"
            :title="`${t(`volunteer.${k}.role`)} — ${t(`volunteer.${k}.organization`)}`"
            :subtitle="t(`volunteer.${k}.period`)"
          >
            <div class="pill-row q-mt-sm">
              <span v-for="(b, i) in tm(`volunteer.${k}.details`) as string[]" :key="i" class="tag">{{
                b
              }}</span>
            </div>
          </q-timeline-entry>
        </q-timeline>
      </PaperSection>

      <PaperSection id="skills" index="05" :title="$t('section.skills')">
        <div class="skill-tile-grid">
          <div v-for="s in skills" :key="s.key" class="skill-tile">
            <q-icon :name="s.icon" size="18px" class="skill-tile-icon" />
            <div>
              <div class="skill-label">{{ t(`skills.items.${s.key}.label`) }}</div>
              <div class="skill-note">{{ t(`skills.items.${s.key}.note`) }}</div>
            </div>
          </div>
        </div>
      </PaperSection>

      <PaperSection id="contact" index="06" :title="$t('section.contact')">
        <div class="contact-row">
          <a
            v-for="c in contacts"
            :key="c.label"
            class="btn btn-secondary"
            :href="c.href"
            target="_blank"
            rel="noopener"
          >
            <q-icon :name="c.icon" size="18px" />
            {{ c.label }}
          </a>
        </div>
      </PaperSection>

      <footer class="q-pa-lg text-center footer-text">
        © {{ new Date().getFullYear() }} {{ cv.name }}
      </footer>
    </div>

    <ScrollToTop />
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useQuasar } from 'quasar';
import SectionNav from 'src/components/SectionNav.vue';
import PaperSection from 'src/components/PaperSection.vue';
import ScrollToTop from 'src/components/ScrollToTop.vue';
import BackgroundBlobs from 'src/components/BackgroundBlobs.vue';
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
const t: typeof i18n.t = i18n.t.bind(i18n);
const tm: typeof i18n.tm = i18n.tm.bind(i18n);
const $q = useQuasar();
const timelineLayout = computed(() => ($q.screen.lt.sm ? 'dense' : 'comfortable'));

const cv = reactive({ name: 'Maria Kekola' });
function breakLabel(s: string) {
  return s.replace(/\s+/, '<br/>');
}
function to(sel: string) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function downloadCv() {
  window.print();
}
const hobbies = [
  { icon: 'fa-solid fa-camera', key: 'photo' },
  { icon: 'fa-solid fa-gamepad', key: 'games' },
  { icon: 'fa-solid fa-plane-departure', key: 'travel' },
  { icon: 'fa-solid fa-utensils', key: 'cooking' },
  { icon: 'fa-solid fa-person-running', key: 'climbing' },
  { icon: 'fa-solid fa-person-skiing', key: 'skiing' },
];
const education = ['msc', 'bsc'];
const experience = ['finavia', 'csfm', 'csfc'];
const currentExperienceKey = 'finavia';
const volunteer = ['treasurer', 'officer'];
const skills = [
  { icon: 'fa-brands fa-python', key: 'python' },
  { icon: 'fa-solid fa-database', key: 'sql' },
  { icon: 'fa-brands fa-js', key: 'js' },
  { icon: 'fa-brands fa-git', key: 'git' },
  { icon: 'fa-brands fa-docker', key: 'docker' },
  { icon: 'fa-solid fa-code', key: 'web' },
  { icon: 'fa-brands fa-figma', key: 'design' },
  { icon: 'fa-brands fa-linux', key: 'os' },
  { icon: 'fa-solid fa-file-word', key: 'office' },
  { icon: 'fa-solid fa-camera', key: 'photo' },
  { icon: 'fa-solid fa-language', key: 'lang' },
  { icon: 'fa-solid fa-user-friends', key: 'soft' },
];
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
.q-page {
  position: relative;
}
.page-inner {
  position: relative;
  z-index: 1;
}

.hero {
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 24px 40px;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  color: var(--text-body);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}
.badge .dot {
  position: relative;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4cc38a;
  margin-right: 9px;
}
.badge .dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #4cc38a;
  animation: badge-pulse 1.8s ease-out infinite;
}
@keyframes badge-pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .badge .dot::after {
    animation: none;
    opacity: 0;
  }
}
.hero-name {
  font-size: 48px;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: var(--text-heading);
  margin: 0 0 14px;
}
.hero-tagline {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 22px;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 18px;
}
.hero-subtitle {
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--text-body);
  max-width: 440px;
  margin: 0 0 28px;
}
.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.hero-photo {
  border-radius: 26px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--card-shadow);
  border: 1px solid var(--card-border);
  aspect-ratio: 4 / 4.4;
}
.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 100%;
  display: block;
}
.hero-photo-overlay {
  position: absolute;
  inset: 0;
  background: var(--hero-overlay);
}

.about-hello {
  color: var(--text-heading);
  margin-bottom: 14px;
}
.about-body {
  color: var(--text-body);
  line-height: 1.75;
}

.hobbies-card {
  border-radius: 22px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  padding: 26px;
}
.hobbies-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 12.5px;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-bottom: 20px;
  text-align: center;
}
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 16px 10px;
  justify-items: center;
}
.hobby-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hobby-label {
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-body);
  line-height: 1.15;
  word-break: break-word;
  hyphens: auto;
}

.icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  color: var(--accent-solid);
  flex-shrink: 0;
}
.icon-circle-lg {
  width: 46px;
  height: 46px;
}

.info-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  border-radius: 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  padding: 24px;
  height: 100%;
}
.info-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-heading);
  margin-bottom: 4px;
}
.info-sub {
  font-size: 14px;
  color: var(--text-body);
  margin-bottom: 6px;
}
.info-period {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--text-muted);
}

.skill-tile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  align-items: stretch;
}
.skill-tile {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  border-radius: 14px;
  padding: 12px 14px;
  height: 100%;
}
.skill-tile-icon {
  color: var(--accent-solid);
  flex-shrink: 0;
}
.skill-label {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--text-heading);
}
.skill-note {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 1px;
}

.contact-row {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
}
.contact-row .q-icon {
  color: var(--accent-solid);
}

.footer-text {
  color: var(--text-muted);
  font-size: 13px;
}

.glass-timeline {
  border-spacing: 0 18px;
}
.glass-timeline :deep(.q-timeline__entry) {
  margin-bottom: 18px;
}
.glass-timeline :deep(.q-timeline__entry:last-child) {
  margin-bottom: 0;
}
.glass-timeline :deep(.q-timeline__content) {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 18px;
  padding: 18px 22px 20px;
  box-shadow: var(--card-shadow);
}
.glass-timeline :deep(.q-timeline__title) {
  color: var(--text-heading);
  font-weight: 700;
  font-size: 16px;
}
.glass-timeline :deep(.q-timeline__subtitle) {
  color: var(--text-muted);
  font-weight: 600;
  opacity: 1;
}
.glass-timeline :deep(.timeline-entry--active .q-timeline__dot::before) {
  animation: timeline-pulse 1.8s ease-out infinite;
}
@keyframes timeline-pulse {
  0% {
    box-shadow: 0 0 0 0 oklch(45% 0.19 300 / 0.6);
    transform: scale(1);
  }
  60% {
    transform: scale(1.2);
  }
  70% {
    box-shadow: 0 0 0 14px oklch(45% 0.19 300 / 0);
    transform: scale(1);
  }
  100% {
    box-shadow: 0 0 0 0 oklch(45% 0.19 300 / 0);
    transform: scale(1);
  }
}
@media (prefers-reduced-motion: reduce) {
  .glass-timeline :deep(.timeline-entry--active .q-timeline__dot::before) {
    animation: none;
    box-shadow: 0 0 0 5px oklch(45% 0.19 300 / 0.35);
  }
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero-photo {
    aspect-ratio: 16 / 10;
    order: -1;
  }
  .hero-photo img {
    object-position: center 25%;
  }
}

@media (max-width: 480px) {
  .hobbies-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .hero {
    padding: 32px 16px 28px;
  }
  .hero-name {
    font-size: 36px;
  }
  .hero-tagline {
    font-size: 19px;
  }
  .hero-cta {
    flex-direction: column;
    align-items: stretch;
  }
  .btn {
    justify-content: center;
  }
}

@media print {
  .badge,
  .hero-cta,
  .hero-photo {
    display: none;
  }
  .hero {
    grid-template-columns: 1fr;
    padding: 0 0 16pt;
    gap: 0;
  }
  .hero-name {
    font-size: 26pt;
    margin-bottom: 4pt;
  }
  .hero-tagline {
    background: none;
    -webkit-background-clip: initial;
    background-clip: initial;
    color: var(--accent-solid);
    font-size: 13pt;
    margin-bottom: 6pt;
  }
  .hero-subtitle {
    font-size: 10.5pt;
    max-width: none;
    margin-bottom: 0;
  }
  .info-card,
  .hobbies-card,
  .skill-tile,
  .glass-timeline :deep(.q-timeline__entry) {
    break-inside: avoid;
  }
}
</style>

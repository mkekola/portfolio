<template>
  <q-page>
    <BackgroundBlobs />

    <div class="page-inner">
      <div class="top-bar">
        <router-link to="/" class="brand">
          <span class="monogram">MK</span>
          <span class="wordmark">Maria Kekola</span>
        </router-link>
        <div class="top-bar-right">
          <LanguageSwitch />
          <ThemeSwitch />
        </div>
      </div>

      <header class="portfolio-header">
        <router-link to="/" class="back-link">
          <q-icon name="fa-solid fa-arrow-left" size="13px" />
          {{ $t('portfolio.back') }}
        </router-link>
        <h1 class="portfolio-title">{{ $t('portfolio.title') }}</h1>
        <p class="portfolio-subtitle">{{ $t('portfolio.subtitle') }}</p>
      </header>

      <div class="project-list">
        <article
          v-for="(p, i) in projects"
          :key="p.key"
          class="project"
          :class="{ 'project--reverse': i % 2 === 1 }"
        >
          <div class="project-media">
            <div class="browser-frame">
              <div class="browser-bar">
                <span class="browser-dot browser-dot-r"></span>
                <span class="browser-dot browser-dot-y"></span>
                <span class="browser-dot browser-dot-g"></span>
                <span class="browser-url">{{ p.displayUrl }}</span>
              </div>
              <img :src="p.image" :alt="t(`portfolio.projects.${p.key}.title`)" />
            </div>
          </div>
          <div class="project-content">
            <h2>{{ t(`portfolio.projects.${p.key}.title`) }}</h2>
            <p>{{ t(`portfolio.projects.${p.key}.description`) }}</p>
            <div class="pill-row">
              <span v-for="tag in p.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a :href="p.liveHref" target="_blank" rel="noopener" class="btn btn-primary">
                {{ $t('portfolio.viewLive') }}
                <q-icon name="fa-solid fa-arrow-up-right-from-square" size="13px" />
              </a>
              <a :href="p.githubHref" target="_blank" rel="noopener" class="btn btn-secondary">
                <q-icon name="fa-brands fa-github" size="16px" />
                GitHub
              </a>
            </div>
          </div>
        </article>
      </div>

      <footer class="q-pa-lg text-center footer-text">© {{ new Date().getFullYear() }} Maria Kekola</footer>
    </div>

    <ScrollToTop />
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import BackgroundBlobs from 'src/components/BackgroundBlobs.vue';
import LanguageSwitch from 'src/components/LanguageSwitch.vue';
import ThemeSwitch from 'src/components/ThemeSwitch.vue';
import ScrollToTop from 'src/components/ScrollToTop.vue';

const i18n = useI18n();
const t: typeof i18n.t = i18n.t.bind(i18n);

const projects = [
  {
    key: 'forkcast',
    image: '/project-forkcast.jpg',
    displayUrl: 'forkcast.kekola.fi',
    liveHref: 'https://forkcast.kekola.fi',
    githubHref: 'https://github.com/mkekola/Forkcast',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    key: 'cv',
    image: '/project-cv.jpg',
    displayUrl: 'kekola.fi',
    liveHref: 'https://kekola.fi',
    githubHref: 'https://github.com/mkekola/portfolio',
    tags: ['Vue', 'Quasar', 'TypeScript', 'SCSS'],
  },
];
</script>

<style scoped>
.q-page {
  position: relative;
}
.page-inner {
  position: relative;
  z-index: 1;
  max-width: 1180px;
  margin: 0 auto;
  padding: 32px 24px 100px;
}

.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--nav-bg);
  border: 1px solid var(--nav-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(8px) saturate(140%);
  -webkit-backdrop-filter: blur(8px) saturate(140%);
  margin-bottom: 56px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.monogram {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent-gradient);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 12px;
}
.wordmark {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14.5px;
  color: var(--text-heading);
}
.top-bar-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.portfolio-header {
  max-width: 640px;
  margin-bottom: 24px;
}
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 20px;
}
.back-link:hover {
  color: var(--accent-solid);
}
.portfolio-title {
  font-size: 44px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-heading);
  margin: 0 0 14px;
}
.portfolio-subtitle {
  font-size: 17px;
  line-height: 1.6;
  color: var(--text-body);
  margin: 0;
}

.project-list {
  display: flex;
  flex-direction: column;
  gap: 88px;
  margin-top: 56px;
}
.project {
  display: flex;
  align-items: center;
  gap: 56px;
}
.project--reverse {
  flex-direction: row-reverse;
}
.project-media {
  flex: 1.1;
  min-width: 0;
}
.project-content {
  flex: 0.9;
  min-width: 0;
}
.project-content h2 {
  font-size: 26px;
  font-weight: 800;
  color: var(--text-heading);
  margin: 0 0 12px;
}
.project-content p {
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--text-body);
  margin: 0 0 18px;
}
.project-content .pill-row {
  margin-bottom: 24px;
}
.project-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.browser-frame {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  background: var(--card-bg);
  backdrop-filter: blur(10px) saturate(130%);
  -webkit-backdrop-filter: blur(10px) saturate(130%);
}
.browser-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--card-border);
}
.browser-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.browser-dot-r {
  background: #ff5f57;
}
.browser-dot-y {
  background: #febc2e;
}
.browser-dot-g {
  background: #28c840;
}
.browser-url {
  margin-left: 8px;
  font-size: 12px;
  color: var(--text-muted);
  background: var(--chip-bg);
  padding: 4px 12px;
  border-radius: 999px;
}
.browser-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
}

.footer-text {
  color: var(--text-muted);
  font-size: 13px;
}

@media (max-width: 900px) {
  .project,
  .project--reverse {
    flex-direction: column;
  }
  .portfolio-title {
    font-size: 34px;
  }
}

@media (max-width: 480px) {
  .wordmark {
    display: none;
  }
  .page-inner {
    padding: 24px 16px 60px;
  }
}
</style>

<template>
  <q-page v-if="project">
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

      <a href="/portfolio" class="back-link" @click.prevent="goBackToPortfolio">
        <q-icon name="fa-solid fa-arrow-left" size="13px" />
        {{ $t('portfolio.backToPortfolio') }}
      </a>

      <article class="case-page">
        <div class="case-eyebrow">{{ $t('portfolio.caseStudyEyebrow') }}</div>
        <h1 class="case-title">{{ t(`portfolio.projects.${project.key}.title`) }}</h1>
        <p class="case-dek">{{ t(`portfolio.caseStudies.${project.key}.dek`) }}</p>
        <div class="meta-row">
          <span class="meta-pill">{{ t(`portfolio.caseStudies.${project.key}.metaRole`) }}</span>
          <span v-for="stack in metaStack" :key="stack" class="meta-pill">{{ stack }}</span>
        </div>

        <div class="hero-frame">
          <div class="browser-bar">
            <span class="browser-dot browser-dot-r"></span>
            <span class="browser-dot browser-dot-y"></span>
            <span class="browser-dot browser-dot-g"></span>
            <span class="browser-url">{{ project.displayUrl }}</span>
          </div>
          <img :src="project.image" :alt="t(`portfolio.projects.${project.key}.title`)" />
        </div>
        <p class="hero-caption">{{ t(`portfolio.caseStudies.${project.key}.heroCaption`) }}</p>

        <section class="case-section">
          <h2>{{ t(`portfolio.caseStudies.${project.key}.contextTitle`) }}</h2>
          <p>{{ t(`portfolio.caseStudies.${project.key}.contextBody`) }}</p>
        </section>

        <section class="decisions">
          <div class="decisions-heading">
            <h2>{{ t(`portfolio.caseStudies.${project.key}.decisionsTitle`) }}</h2>
            <p>{{ t(`portfolio.caseStudies.${project.key}.decisionsIntro`) }}</p>
          </div>
          <div class="decision-grid">
            <div v-for="(d, i) in decisions" :key="i" class="decision-card">
              <div class="decision-tag">{{ d.tag }}</div>
              <h3>{{ d.title }}</h3>
              <p>{{ d.body }}</p>
            </div>
          </div>
        </section>

        <section class="case-section">
          <h2>{{ t(`portfolio.caseStudies.${project.key}.nextTitle`) }}</h2>
          <ul class="next-list">
            <li v-for="(item, i) in nextItems" :key="i">
              <span class="dot"></span>
              {{ item }}
            </li>
          </ul>
        </section>

        <div class="case-footer">
          <a :href="project.liveHref" target="_blank" rel="noopener" class="btn btn-primary">
            {{ $t('portfolio.viewLive') }}
            <q-icon name="fa-solid fa-arrow-up-right-from-square" size="13px" />
          </a>
          <a :href="project.githubHref" target="_blank" rel="noopener" class="btn btn-secondary">
            <q-icon name="fa-brands fa-github" size="16px" />
            GitHub
          </a>
        </div>
      </article>

      <footer class="q-pa-lg text-center footer-text">© {{ new Date().getFullYear() }} Maria Kekola</footer>
    </div>

    <ScrollToTop />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import BackgroundBlobs from 'src/components/BackgroundBlobs.vue';
import LanguageSwitch from 'src/components/LanguageSwitch.vue';
import ThemeSwitch from 'src/components/ThemeSwitch.vue';
import ScrollToTop from 'src/components/ScrollToTop.vue';
import { projects } from 'src/data/projects';

const route = useRoute();
const router = useRouter();
const i18n = useI18n();
const t: typeof i18n.t = i18n.t.bind(i18n);
const tm: typeof i18n.tm = i18n.tm.bind(i18n);

const project = computed(() => projects.find((p) => p.key === route.params.key && p.caseStudy));

if (!project.value) {
  void router.replace('/portfolio');
}

function goBackToPortfolio() {
  if (window.history.state?.back) {
    router.back();
  } else {
    void router.push('/portfolio');
  }
}

interface Decision {
  tag: string;
  title: string;
  body: string;
}

const metaStack = computed<string[]>(() =>
  project.value ? tm(`portfolio.caseStudies.${project.value.key}.metaStack`) : [],
);
const decisions = computed<Decision[]>(() =>
  project.value ? tm(`portfolio.caseStudies.${project.value.key}.decisions`) : [],
);
const nextItems = computed<string[]>(() =>
  project.value ? tm(`portfolio.caseStudies.${project.value.key}.nextItems`) : [],
);
</script>

<style scoped>
.q-page {
  position: relative;
}
.page-inner {
  position: relative;
  z-index: 1;
  max-width: 900px;
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
  margin-bottom: 32px;
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

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-muted);
  text-decoration: none;
  margin-bottom: 24px;
}
.back-link:hover {
  color: var(--accent-solid);
}

.case-page {
  padding: 40px clamp(20px, 5vw, 56px) 52px;
  border-radius: 24px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(10px) saturate(130%);
  -webkit-backdrop-filter: blur(10px) saturate(130%);
}

.case-eyebrow {
  font-size: 12.5px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent-solid);
  margin-bottom: 10px;
}
.case-title {
  font-family: var(--font-heading);
  font-size: clamp(30px, 4vw, 42px);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.15;
  color: var(--text-heading);
  margin: 0 0 14px;
  text-wrap: balance;
}
.case-dek {
  font-size: 16.5px;
  line-height: 1.65;
  color: var(--text-body);
  max-width: 62ch;
  margin: 0 0 22px;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 10px;
  margin-bottom: 32px;
}
.meta-pill {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  padding: 5px 12px;
  border-radius: 999px;
}

.hero-frame {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  margin-bottom: 14px;
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
.hero-frame img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
}
.hero-caption {
  font-size: 12.5px;
  color: var(--text-muted);
  text-align: center;
  margin: 0 0 40px;
}

.case-section {
  margin-bottom: 40px;
  max-width: 68ch;
}
.case-section h2 {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-heading);
  margin: 0 0 14px;
  text-wrap: balance;
}
.case-section p {
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--text-body);
  margin: 0;
}

.decisions {
  margin-bottom: 8px;
}
.decisions-heading {
  max-width: 68ch;
  margin-bottom: 22px;
}
.decisions-heading h2 {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 800;
  line-height: 1.3;
  color: var(--text-heading);
  margin: 0 0 8px;
  text-wrap: balance;
}
.decisions-heading p {
  font-size: 14.5px;
  color: var(--text-muted);
  margin: 0;
}
.decision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
  margin-bottom: 44px;
}
.decision-card {
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  border-radius: 16px;
  padding: 20px;
}
.decision-tag {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 8px;
}
.decision-card h3 {
  font-family: var(--font-heading);
  font-size: 16.5px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--text-heading);
  margin: 0 0 10px;
  text-wrap: balance;
}
.decision-card p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-body);
  margin: 0;
}

.next-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.next-list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 1.6;
  color: var(--text-body);
}
.next-list .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-solid);
  margin-top: 9px;
  flex-shrink: 0;
}

.case-footer {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 28px;
  border-top: 1px solid var(--divider);
}

.footer-text {
  color: var(--text-muted);
  font-size: 13px;
  margin-top: 40px;
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

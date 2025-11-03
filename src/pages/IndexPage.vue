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

    <PaperSection id="about" :title="$t('section.about')">
      <div class="row q-col-gutter-xl items-start">
        <div class="col-12 col-md-7">
          <div class="text-h5 text-weight-bold q-mb-sm">
            {{ $t('about.hello') }}
          </div>
          <p class="text-body1 q-mb-none">{{ $t('about.body') }}</p>
        </div>
        <div class="col-12 col-md-5">
          <q-card flat bordered class="q-pa-md">
            <div class="text-h6 text-uppercase text-secondary q-mb-sm justify-center flex">
              {{ t('hobbies.title') }}
            </div>
            <div class="hobbies-grid">
              <div v-for="h in hobbies" :key="h.key" class="hobby-item">
                <q-avatar size="40px" class="bg-black-2">
                  <q-icon :name="h.icon" size="24px" color="accent" />
                </q-avatar>
                <div class="hobby-label" v-html="breakLabel(t(`hobbies.${h.key}`))"></div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </PaperSection>
    <PaperSection id="education" :title="$t('section.education')">
      <div class="container">
        <q-list bordered class="rounded-borders">
          <q-item v-for="k in education" :key="k">
            <q-item-section>
              <div class="text-subtitle2">
                {{ t(`education.${k}.degree`) }} — {{ t(`education.${k}.school`) }}
              </div>
              <div class="text-caption text-secondary">
                {{ t(`education.${k}.period`) }}
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </PaperSection>
    <PaperSection id="experience" :title="$t('section.experience')">
      <q-timeline color="accent" layout="comfortable" side="right" dense>
        <q-timeline-entry
          v-for="k in experience"
          :key="k"
          :title="`${t(`experience.${k}.role`)} — ${t(`experience.${k}.company`)}`"
          :subtitle="t(`experience.${k}.period`)"
        >
          <ul class="list-plain q-mt-sm q-mb-none">
            <li v-for="(b, i) in tm(`experience.${k}.details`) as string[]" :key="i">{{ b }}</li>
          </ul>
          <div class="q-mt-sm"></div>
        </q-timeline-entry>
      </q-timeline>
    </PaperSection>
    <PaperSection id="volunteer" :title="$t('section.volunteer')">
      <q-timeline color="accent" layout="comfortable" side="right" dense>
        <q-timeline-entry
          v-for="k in volunteer"
          :key="k"
          :title="`${t(`volunteer.${k}.role`)} — ${t(`volunteer.${k}.organization`)}`"
          :subtitle="t(`volunteer.${k}.period`)"
        >
          <ul class="list-plain q-mt-sm q-mb-none">
            <li v-for="(b, i) in tm(`volunteer.${k}.details`) as string[]" :key="i">{{ b }}</li>
          </ul>
          <div class="q-mt-sm"></div>
        </q-timeline-entry>
      </q-timeline>
    </PaperSection>
    <PaperSection id="skills" :title="$t('section.skills')">
      <div class="container">
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-6">
            <q-list bordered>
              <q-item v-for="s in skillsLeft" :key="s.key">
                <q-item-section avatar
                  ><q-icon :name="s.icon" size="28px" color="accent"
                /></q-item-section>
                <q-item-section>
                  <div class="text-subtitle2">{{ t(`skills.items.${s.key}.label`) }}</div>
                  <div class="text-caption text-secondary">
                    {{ t(`skills.items.${s.key}.note`) }}
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-6">
            <q-list bordered class="rounded-borders">
              <q-item v-for="s in skillsRight" :key="s.key">
                <q-item-section avatar>
                  <q-icon :name="s.icon" size="28px" color="accent" />
                </q-item-section>
                <q-item-section>
                  <div class="text-subtitle2">{{ t(`skills.items.${s.key}.label`) }}</div>
                  <div class="text-caption text-secondary">
                    {{ t(`skills.items.${s.key}.note`) }}
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </PaperSection>
    <PaperSection id="contact" :title="$t('section.contact')">
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
import { useI18n } from 'vue-i18n';
const i18n = useI18n();
const t: typeof i18n.t = i18n.t.bind(i18n);
const tm: typeof i18n.tm = i18n.tm.bind(i18n);

const cv = reactive({ name: 'Maria Kekola' });
function breakLabel(s: string) {
  return s.replace(/\s+/, '<br/>');
}
const hobbies = [
  { icon: 'fa-solid fa-camera', key: 'photo' },
  { icon: 'fa-solid fa-gamepad', key: 'games' },
  { icon: 'fa-solid fa-paint-brush', key: 'art' },
  { icon: 'fa-solid fa-plane-departure', key: 'travel' },
  { icon: 'fa-solid fa-utensils', key: 'cooking' },
  { icon: 'fa-solid fa-person-running', key: 'climbing' },
  { icon: 'fa-solid fa-person-skiing', key: 'skiing' },
];
const education = ['bsc'];
const experience = ['finavia', 'csfm', 'csfc'];
const volunteer = ['treasurer', 'boardMember', 'officer'];
const skillsLeft = [
  { icon: 'fa-brands fa-python', key: 'python' },
  { icon: 'fa-solid fa-database', key: 'sql' },
  { icon: 'fa-brands fa-js', key: 'js' },
  { icon: 'fa-brands fa-git', key: 'git' },
  { icon: 'fa-brands fa-docker', key: 'docker' },
  { icon: 'fa-solid fa-code', key: 'web' },
];
const skillsRight = [
  { icon: 'fa-brands fa-linux', key: 'os' },
  {
    icon: 'fa-solid fa-file-word',
    key: 'office',
  },
  { icon: 'fa-solid fa-camera', key: 'photo' },
  {
    icon: 'fa-solid fa-language',
    key: 'lang',
  },
  {
    icon: 'fa-solid fa-user-friends',
    key: 'soft',
  },
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
.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 15px 10px;
  justify-items: center;
}

.hobby-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hobby-label {
  text-align: center;
  margin-top: 6px;
  line-height: 1.15;
  min-height: 2.3em;
  word-break: break-word;
  hyphens: auto;
}

@media (max-width: 480px) {
  .hobbies-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

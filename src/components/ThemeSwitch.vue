<template>
  <q-btn-toggle
    v-model="mode"
    :options="opts"
    size="sm"
    rounded
    flat
    :ripple="false"
    aria-label="Toggle theme"
    class="theme-toggle"
  />
</template>

<script setup lang="ts">
import { Dark, setCssVar } from 'quasar';
import { onMounted, ref, watch } from 'vue';

type Mode = 'light' | 'dark';
const opts = [
  { icon: 'fa-solid fa-sun', value: 'light' as Mode },
  { icon: 'fa-solid fa-moon', value: 'dark' as Mode },
];

const BRAND_KEYS = [
  'primary',
  'secondary',
  'accent',
  'nav',
  'info',
  'warning',
  'positive',
  'negative',
  'dark',
] as const;
type BrandKey = (typeof BRAND_KEYS)[number];
type Palette = Record<BrandKey, string>;

const brandLight: Palette = {
  primary: '#6D4FD1',
  secondary: '#3FA7A0',
  accent: '#9A3FC4',
  nav: '#FFFFFF',
  info: '#6D4FD1',
  warning: '#F2C166',
  positive: '#4CC38A',
  negative: '#C85A54',
  dark: '#231C33',
};
const brandDark: Palette = {
  primary: '#9A86E8',
  secondary: '#5FC9C1',
  accent: '#C48AE0',
  nav: '#1C1826',
  info: '#7C6AE0',
  warning: '#E0B15E',
  positive: '#4CC38A',
  negative: '#F07B73',
  dark: '#0F0B16',
};

const STORAGE_KEY = 'theme';
const mode = ref<Mode>('light');

function applyBrand(isDark: boolean): void {
  const p: Palette = isDark ? brandDark : brandLight;
  BRAND_KEYS.forEach((k) => setCssVar(k, p[k]));
}

function apply(m: Mode): void {
  const isDark = m === 'dark';
  Dark.set(isDark);
  applyBrand(isDark);
  localStorage.setItem(STORAGE_KEY, m);
}

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY) as Mode | null;
  const initial: Mode =
    saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  mode.value = initial;
  apply(initial);
});

watch(mode, (m) => apply(m));
</script>

<style scoped>
.theme-toggle {
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  border-radius: 999px;
  padding: 3px;
}
.theme-toggle :deep(.q-btn) {
  min-height: 26px;
  min-width: 34px;
  padding: 0 10px;
  border-radius: 999px;
  color: var(--text-muted);
}
.theme-toggle :deep(.q-btn .q-icon) {
  color: inherit;
}
.theme-toggle :deep(.q-btn[aria-pressed='true']) {
  background: var(--toggle-active-bg);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.theme-toggle :deep(.q-btn[aria-pressed='true'] .q-icon) {
  color: #fff;
}
</style>

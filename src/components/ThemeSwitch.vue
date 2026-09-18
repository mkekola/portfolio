<template>
  <q-btn-toggle
    v-model="mode"
    :options="opts"
    size="sm"
    push
    rounded
    unelevated
    color="accent"
    text-color="dark"
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
  { label: '☀️', value: 'light' as Mode },
  { label: '🌑', value: 'dark' as Mode },
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
.theme-toggle :deep(.q-btn) {
  padding: 0 10px;
}
</style>

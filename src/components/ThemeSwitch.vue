<template>
  <q-btn-toggle
    v-model="mode"
    :options="opts"
    size="sm"
    push
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
  primary: '#706D54',
  secondary: '#130D0D',
  accent: '#3C3D37',
  nav: '#FFFFFF',
  info: '#706D54',
  warning: '#F2C166',
  positive: '#7AC48A',
  negative: '#C85A54',
  dark: '#130D0D',
};
const brandDark: Palette = {
  primary: '#3C3D37',
  secondary: '#b9bbbd',
  accent: '#706D54',
  nav: '#3C3D37',
  info: '#21498A',
  warning: '#A87A2A',
  positive: '#22946E',
  negative: '#F07B73',
  dark: '#0B1016',
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

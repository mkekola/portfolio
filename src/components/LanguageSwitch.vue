<template>
  <q-btn-toggle
    v-model="model"
    :options="opts"
    size="sm"
    rounded
    flat
    no-caps
    :ripple="false"
    aria-label="Change language"
    class="lang-toggle"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';

const { locale } = useI18n();
const opts = [
  { label: 'FI', value: 'fi' },
  { label: 'EN', value: 'en' },
];
const model = ref(locale.value);

watch(model, (v) => {
  locale.value = v;
  document.documentElement.lang = v;
  localStorage.setItem('locale', v);
});
</script>

<style scoped>
.lang-toggle {
  background: var(--chip-bg);
  border: 1px solid var(--chip-border);
  border-radius: 999px;
  padding: 3px;
}
.lang-toggle :deep(.q-btn) {
  min-height: 26px;
  padding: 0 12px;
  border-radius: 999px;
  color: var(--text-muted);
}
.lang-toggle :deep(.q-btn .q-btn__content) {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
}
.lang-toggle :deep(.q-btn[aria-pressed='true']) {
  background: var(--toggle-active-bg);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.lang-toggle :deep(.q-btn[aria-pressed='true'] .q-btn__content) {
  color: #fff;
}
</style>

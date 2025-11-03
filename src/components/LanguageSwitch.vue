<template>
  <q-btn-toggle
    v-model="model"
    :options="opts"
    size="sm"
    color="accent"
    text-color="dark"
    unelevated
    toggle-color="accent"
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
  localStorage.setItem('locale', v);
});
</script>

<style scoped>
.lang-toggle :deep(.q-btn) {
  padding: 0 10px;
}
</style>

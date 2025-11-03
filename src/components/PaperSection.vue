<template>
  <section :id="id" class="paper-wrap">
    <q-card flat bordered class="paper-card">
      <div v-if="title" class="paper-title">{{ title }}</div>
      <slot />
    </q-card>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
  title?: string;
}>();
</script>

<style scoped>
.paper-wrap {
  display: flex;
  justify-content: center;
  padding: 20px 16px;
  margin-block: 24px;
}
.paper-card {
  width: min(100%, 900px);
  padding: 24px;
  border-radius: 14px;
  box-shadow: none;
  position: relative;
}
.paper-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: -1;
  box-shadow:
    0 8px 28px rgba(28, 33, 53, 0.1),
    0 1px 0 rgba(28, 33, 53, 0.06);
}
.paper-wrap {
  isolation: isolate;
}
.paper-title {
  font-family: var(--font-heading, 'Montserrat', sans-serif);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 14px;
  color: #706d54;
}
.q-dark .paper-card {
  background: #0f141a;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow:
    0 8px 28px rgba(0, 0, 0, 0.4),
    0 1px 0 rgba(255, 255, 255, 0.06);
}
.q-dark .paper-title {
  color: #b9bbbd;
}
@media (min-width: 1200px) {
  .paper-card {
    width: 900px;
  }
}
@media print {
  .paper-wrap {
    padding: 0;
    margin: 0 0 12pt 0;
  }
  .paper-card {
    width: 100%;
    box-shadow: none;
    border-color: #ddd;
  }
}
</style>

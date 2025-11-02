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
  padding: 16px; /* reunavaraa mobiilille */
  margin-block: 20px; /* väli arkkien väliin */
}
.paper-card {
  width: min(100%, 920px); /* “paperin” maksimileveys */
  padding: 28px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08); /* pehmeä varjo paperille */
  border: 1px solid rgba(0, 0, 0, 0.06);
}
.paper-title {
  font-family: var(--font-heading, 'Montserrat', sans-serif);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 16px;
}

/* Printti: poista varjot ja täysi leveys */
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

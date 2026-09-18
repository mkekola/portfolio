<template>
  <section :id="id" class="paper-wrap">
    <div class="paper-inner">
      <div v-if="title" class="section-head">
        <span v-if="index" class="section-idx">{{ index }}</span>
        <div class="section-title">{{ title }}</div>
        <div class="section-line"></div>
      </div>
      <div class="paper-card">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string;
  title?: string;
  index?: string;
}>();
</script>

<style scoped>
.paper-wrap {
  display: flex;
  justify-content: center;
  padding: 20px 16px;
  margin-block: 24px;
}
.paper-inner {
  width: min(100%, 1100px);
}
.section-head {
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 24px;
  padding: 0 4px;
}
.section-idx {
  font-family: var(--font-heading, 'Montserrat', sans-serif);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.14em;
  color: var(--accent-solid);
}
.section-title {
  font-family: var(--font-heading, 'Montserrat', sans-serif);
  font-weight: 800;
  font-size: 26px;
  color: var(--text-heading);
}
.section-line {
  flex: 1;
  height: 1px;
  background: var(--divider);
}
.paper-card {
  padding: 32px;
  border-radius: 22px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
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
    backdrop-filter: none;
    background: #fff;
  }
}
</style>

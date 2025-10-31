<template>
  <div class="subnav bg-primary text-white">
    <q-toolbar class="container q-px-md">
      <q-space />
      <nav class="nav-center">
        <q-btn flat dense no-caps @click="to('#about')" label="About" />
        <q-btn flat dense no-caps @click="to('#education')" label="Education" />
        <q-btn flat dense no-caps @click="to('#experience')" label="Experience" />
        <q-btn flat dense no-caps @click="to('#skills')" label="Skills" />
        <q-btn flat dense no-caps @click="to('#contact')" label="Contact" />
      </nav>
      <q-space />
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
function to(sel: string) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style scoped>
.subnav {
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}
.q-btn {
  font-weight: bold;
  font-size: large;
  font-family: 'Source Sans 3', sans-serif;
}
.nav-center {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white" elevated>
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">MK</q-toolbar-title>
        <q-btn flat dense no-caps @click="to('#about')" label="About" />
        <q-btn flat dense no-caps @click="to('#education')" label="Education" />
        <q-btn flat dense no-caps @click="to('#experience')" label="Experience" />
        <q-btn flat dense no-caps @click="to('#skills')" label="Skills" />
        <q-btn flat dense no-caps @click="to('#contact')" label="Contact" />
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container><router-view /></q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
function to(sel: string) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

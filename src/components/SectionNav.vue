<template>
  <div class="subnav bg-primary text-white">
    <q-toolbar class="container q-px-md toolbar">
      <!-- oikea laita: kielikytkin -->
      <div class="right">
        <LanguageSwitch />
      </div>

      <!-- keskellä: nappiryhmä -->
      <nav class="nav-center">
        <q-btn flat dense no-caps class="nav-btn" @click="to('#about')" :label="$t('nav.about')" />
        <q-btn
          flat
          dense
          no-caps
          class="nav-btn"
          @click="to('#education')"
          :label="$t('nav.education')"
        />
        <q-btn
          flat
          dense
          no-caps
          class="nav-btn"
          @click="to('#experience')"
          :label="$t('nav.experience')"
        />
        <q-btn
          flat
          dense
          no-caps
          class="nav-btn"
          @click="to('#volunteer')"
          :label="$t('nav.volunteer')"
        />
        <q-btn
          flat
          dense
          no-caps
          class="nav-btn"
          @click="to('#skills')"
          :label="$t('nav.skills')"
        />
        <q-btn
          flat
          dense
          no-caps
          class="nav-btn"
          @click="to('#contact')"
          :label="$t('nav.contact')"
        />
        <!-- jätä contact pois jos poistit sen -->
      </nav>
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitch from 'src/components/LanguageSwitch.vue';
function to(sel: string) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style scoped>
.toolbar {
  position: relative;
  justify-content: center;
}
.nav-center {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.right {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
}
</style>

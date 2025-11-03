<template>
  <div class="subnav bg-primary text-white">
    <q-toolbar class="container q-px-md toolbar">
      <div class="left" aria-hidden="true"></div>

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
      </nav>

      <div class="right">
        <LanguageSwitch />
      </div>
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
.subnav {
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.toolbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 8px;
  min-height: 56px;
}
.left {
  visibility: hidden;
}
.nav-center {
  justify-self: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.right {
  justify-self: end;
}

@media (max-width: 640px) {
  .toolbar {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    row-gap: 6px;
  }
  .left {
    display: none;
  }
  .nav-center {
    justify-content: center;
  }
  .right {
    justify-self: center;
  }
}

@media (max-width: 640px) {
  .subnav {
    padding-block: 6px;
  }
}
</style>

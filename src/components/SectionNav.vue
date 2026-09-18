<template>
  <div class="nav-wrap">
    <div class="nav-pill">
      <div class="brand">
        <span class="monogram">MK</span>
        <span class="wordmark">{{ cv.name }}</span>
      </div>

      <nav class="nav-center">
        <button class="nav-link" @click="to('#about')">{{ $t('nav.about') }}</button>
        <button class="nav-link" @click="to('#education')">{{ $t('nav.education') }}</button>
        <button class="nav-link" @click="to('#experience')">{{ $t('nav.experience') }}</button>
        <button class="nav-link" @click="to('#volunteer')">{{ $t('nav.volunteer') }}</button>
        <button class="nav-link" @click="to('#skills')">{{ $t('nav.skills') }}</button>
        <button class="nav-link" @click="to('#contact')">{{ $t('nav.contact') }}</button>
      </nav>

      <div class="right">
        <q-btn class="menu-btn" flat round dense icon="menu" :ripple="false" aria-label="Menu">
          <q-menu anchor="bottom right" self="top right">
            <q-list style="min-width: 160px">
              <q-item clickable v-close-popup @click="to('#about')">
                <q-item-section>{{ $t('nav.about') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="to('#education')">
                <q-item-section>{{ $t('nav.education') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="to('#experience')">
                <q-item-section>{{ $t('nav.experience') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="to('#volunteer')">
                <q-item-section>{{ $t('nav.volunteer') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="to('#skills')">
                <q-item-section>{{ $t('nav.skills') }}</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="to('#contact')">
                <q-item-section>{{ $t('nav.contact') }}</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <LanguageSwitch />
        <ThemeSwitch />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import LanguageSwitch from 'src/components/LanguageSwitch.vue';
import ThemeSwitch from 'src/components/ThemeSwitch.vue';

const cv = reactive({ name: 'Maria Kekola' });

function to(sel: string) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
</script>

<style scoped>
.nav-wrap {
  position: sticky;
  top: 16px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding: 0 16px;
}
.nav-pill {
  width: min(100%, 1100px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 12px 10px 18px;
  border-radius: 999px;
  background: var(--nav-bg);
  border: 1px solid var(--nav-border);
  box-shadow: var(--card-shadow);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.monogram {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent-gradient);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 12px;
}
.wordmark {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  color: var(--text-heading);
  white-space: nowrap;
}
.nav-center {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 22px;
}
.nav-link {
  background: none;
  border: none;
  padding: 6px 2px;
  font-family: var(--font-body);
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-muted);
  cursor: pointer;
}
.nav-link:hover {
  color: var(--accent-solid);
}
.right {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
}
.menu-btn {
  display: none;
  color: var(--text-heading);
}

@media (max-width: 900px) {
  .nav-center {
    display: none;
  }
  .menu-btn {
    display: flex;
  }
  .wordmark {
    display: none;
  }
}
</style>

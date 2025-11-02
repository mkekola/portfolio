<template>
  <div class="subnav bg-primary text-white">
    <q-toolbar class="container q-px-md justify-center">
      <div class="nav-center">
        <q-btn
          v-for="b in buttons"
          :key="b.id"
          flat
          dense
          no-caps
          :class="['nav-btn', { active: active === b.id }]"
          :label="b.label"
          @click="to('#' + b.id)"
        />
      </div>
    </q-toolbar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const buttons = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const active = ref('about');
function to(sel: string) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

let observer: IntersectionObserver | null = null;
onMounted(() => {
  const ids = buttons.map((b) => b.id);
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) active.value = (e.target as HTMLElement).id;
      }
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  );
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer!.observe(el);
  });
});
onBeforeUnmount(() => {
  observer?.disconnect();
});
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
.nav-center {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.nav-btn {
  color: white;
  font-weight: 500;
  opacity: 0.8;
  transition: opacity 0.2s;
  font-size: large;
}
</style>

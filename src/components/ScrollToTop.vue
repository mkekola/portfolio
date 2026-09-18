<template>
  <transition name="fade">
    <button
      v-if="visible"
      class="scroll-top-btn"
      :aria-label="$t('scrollTop')"
      @click="scrollTop"
    >
      <q-icon name="fa-solid fa-arrow-up" size="16px" />
    </button>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 400;
}

function scrollTop() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 900;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  box-shadow: var(--card-shadow);
  color: var(--text-heading);
  cursor: pointer;
  padding: 0;
}
.scroll-top-btn:hover {
  color: var(--accent-solid);
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 480px) {
  .scroll-top-btn {
    right: 16px;
    bottom: 16px;
    width: 40px;
    height: 40px;
  }
}

@media print {
  .scroll-top-btn {
    display: none;
  }
}
</style>

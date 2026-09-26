<template>
  <div ref="rootEl" class="bg-blobs" aria-hidden="true">
    <div class="blob blob-a"></div>
    <div class="blob blob-b"></div>
    <div class="blob blob-c"></div>
    <div class="blob blob-d"></div>
    <svg width="0" height="0">
      <filter id="bgGrainFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0" />
      </filter>
    </svg>
    <div class="grain"></div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

// Eri syvyydet saavat pallot liikkumaan eri nopeuksilla, mikä luo syvyysvaikutelman.
const depths = [26, -34, 18, -22];

const rootEl = ref<HTMLElement | null>(null);
let blobs: HTMLElement[] = [];
let frame = 0;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

function onPointerMove(e: PointerEvent) {
  targetX = (e.clientX / window.innerWidth - 0.5) * 2;
  targetY = (e.clientY / window.innerHeight - 0.5) * 2;
}

function tick() {
  currentX += (targetX - currentX) * 0.045;
  currentY += (targetY - currentY) * 0.045;
  blobs.forEach((blob, i) => {
    const depth = depths[i] ?? 0;
    blob.style.setProperty('--parallax-x', `${(currentX * depth).toFixed(2)}px`);
    blob.style.setProperty('--parallax-y', `${(currentY * depth).toFixed(2)}px`);
  });
  frame = window.requestAnimationFrame(tick);
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (reduceMotion || !finePointer || !rootEl.value) return;

  blobs = Array.from(rootEl.value.querySelectorAll<HTMLElement>('.blob'));
  window.addEventListener('pointermove', onPointerMove, { passive: true });
  frame = window.requestAnimationFrame(tick);
});

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onPointerMove);
  if (frame) window.cancelAnimationFrame(frame);
});
</script>

<style scoped>
.bg-blobs {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  /* Siirto ennen skaalausta, jotta parallaksin matka pysyy samana zoom-tasosta riippumatta. */
  transform: translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0) scale(1);
  will-change: transform;
}
@media (min-width: 900px) {
  .blob {
    transform: translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0) scale(1.3);
  }
}
@media (min-width: 1300px) {
  .blob {
    transform: translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0) scale(1.6);
  }
}
@media (min-width: 1800px) {
  .blob {
    transform: translate3d(var(--parallax-x, 0px), var(--parallax-y, 0px), 0) scale(2.1);
  }
}
.blob-a {
  top: -160px;
  left: -160px;
  width: 460px;
  height: 460px;
  background: var(--blob-1);
}
.blob-b {
  top: 220px;
  right: -200px;
  width: 500px;
  height: 500px;
  background: var(--blob-3);
}
.blob-c {
  top: 1400px;
  left: -180px;
  width: 420px;
  height: 420px;
  background: var(--blob-2);
}
.blob-d {
  top: 2600px;
  right: -160px;
  width: 460px;
  height: 460px;
  background: var(--blob-1);
}

.grain {
  position: absolute;
  inset: 0;
  opacity: 0.05;
  mix-blend-mode: overlay;
  filter: url(#bgGrainFilter);
}

@media print {
  .bg-blobs {
    display: none;
  }
}
</style>

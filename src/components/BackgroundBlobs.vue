<template>
  <div class="bg-blobs" aria-hidden="true">
    <div class="blob blob-a"></div>
    <div class="blob blob-b"></div>
    <div class="blob blob-c"></div>
    <div class="blob blob-d"></div>
  </div>
</template>

<script setup lang="ts"></script>

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
  transform: scale(1);
}
@media (min-width: 900px) {
  .blob {
    transform: scale(1.3);
  }
}
@media (min-width: 1300px) {
  .blob {
    transform: scale(1.6);
  }
}
@media (min-width: 1800px) {
  .blob {
    transform: scale(2.1);
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

@media print {
  .bg-blobs {
    display: none;
  }
}
</style>

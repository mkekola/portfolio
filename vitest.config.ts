import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Quasar owns the Vite config through quasar.config.ts, so the test setup lives
// in its own file. The `src` alias has to be repeated here because Vitest does
// not go through Quasar's resolver.
export default defineConfig({
  resolve: {
    alias: {
      src: fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    include: ['src/**/*.test.ts'],
    environment: 'happy-dom',
  },
});

import { defineConfig } from '#q-app/wrappers';

export default defineConfig((/* ctx */) => {
  return {
    boot: ['i18n'],

    css: ['app.scss', 'fontawesome/fontawesome-subset.css'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      typescript: {
        strict: true,
        vueShim: true,
      },

      vueRouterMode: 'history',

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: true,
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {
        brand: {
          primary: '#6D4FD1',
          secondary: '#3FA7A0',
          accent: '#9A3FC4',
          dark: '#231C33',
          positive: '#4CC38A',
          negative: '#C85A54',
          info: '#6D4FD1',
          warning: '#F2C166',
        },
      },
      iconSet: 'fontawesome-v6',
    },

    animations: [],
  };
});

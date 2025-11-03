import { defineConfig } from '#q-app/wrappers';

export default defineConfig((/* ctx */) => {
  return {
    boot: [],

    css: ['app.scss'],

    extras: ['fontawesome-v6'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      typescript: {
        strict: true,
        vueShim: true,
      },

      vueRouterMode: 'hash',

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
          primary: '#706D54',
          secondary: '#130D0D',
          accent: '#F8C476',
          dark: '#130D0D',
          positive: '#7AC48A',
          negative: '#C85A54',
          info: '#706D54',
          warning: '#F2C166',
        },
      },
      iconSet: 'fontawesome-v6',
    },

    animations: [],
  };
});

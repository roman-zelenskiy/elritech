export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_APP_BASE_URL,
    },
  },

  modules: ['@nuxt/ui', 'nuxt-svgo', '@pinia/nuxt', '@vueuse/nuxt', 'nuxt-swiper'],

  swiper: {
    modules: [
      'navigation',
      'pagination',
      'thumbs',
      'free-mode',
      'controller',
      'autoplay',
      'effect-creative',
      'scrollbar',
      'grid',
      'mousewheel',
    ],
  },

  css: ['~/assets/css/fonts.css'],

  alias: {
    '@img': './assets/img',
  },

  svgo: {
    autoImportPath: './assets/img/svg/',
  },

  colorMode: {
    preference: 'light',
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  app: {
    head: {
      title: 'ELRITECH',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1',
        },
      ],
    },
    baseURL: process.env.NUXT_APP_BASE_URL,
    buildAssetsDir: 'assets',
  },

  compatibilityDate: '2024-07-09',
});
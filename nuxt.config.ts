export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      url: process.env.NUXT_URL,
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
  // Включите генерацию статических файлов
  target: 'static',
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
  router: {
    base: '/elritech/',
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
    buildAssetsDir: 'assets',
  },
});

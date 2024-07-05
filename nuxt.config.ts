// https://nuxt.com/docs/api/configuration/nuxt-config
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
  // ssr: false,
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
  },
});

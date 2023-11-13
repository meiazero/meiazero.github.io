// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    debug: true,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {
      darkMode: 'class',
    },
    injectPosition: 'first',
    viewer: true,
  },
  typescript: {
    strict: false,
  },
  components: [
    {
      path: '~/components/ui',
      extensions: ['vue'],
      prefix: 'ui',
    },
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-br' },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
})

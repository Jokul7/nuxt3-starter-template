// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  typescript: {
    shim: false,
  },
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '@/assets/styles/reset.css',
    '@/assets/styles/theme.css',
  ],
  postcss: {
    plugins: {
      autoprefixer: {
        overrideBrowserslist: [
          '> 1%',
          'last 2 versions',
        ],
      },
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Nuxt',
      meta: [
        { name: 'description', content: 'description here' },
      ],
    },
  },
})

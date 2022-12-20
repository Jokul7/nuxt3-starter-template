import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: ({
      collections: {
        custom: FileSystemIconLoader(
          'src/assets/icons',
          svg => svg.replace(/#fff/, 'currentColor'),
        ),
      },
    }), // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
  css: [
    '@/assets/styles/theme.css',
    '@/assets/styles/reset.css',
    'normalize.css/normalize.css',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/var.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' },
      ],
    },
  },
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
})

import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - mimacademy',
    title: 'MimSchool',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        property: 'og:title',
        content: 'MimSchool',
      },
      {
        property: 'title',
        content: 'MimSchool',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:description',
        content: "Samarqanddagi eng zo'r o'quv markaz",
      },
      {
        property: 'description',
        content: "Samarqanddagi eng zo'r o'quv markaz",
      },
      // {
      //   property: 'og:image',
      //   content: 'https://i.pinimg.com/originals/35/38/36/3538363f9be4aec0f2a3a899c76678f9.png',
      // },
      // {
      //   property: 'image',
      //   content: 'https://i.pinimg.com/originals/35/38/36/3538363f9be4aec0f2a3a899c76678f9.png',
      // },
      {
        property: 'keywords',
        content: "o'quv markaz, it, it o'quv markaz, kurslar, o'quv kurslar, it o'quv kurslar",
      },
      {
        property: 'og:keywords',
        content: "o'quv markaz, it, it o'quv markaz, kurslar, o'quv kurslar, it o'quv kurslar",
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
    ]
  },

  css: [
    '@/assets/styles/main.css',
  ],

  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },

  plugins: [
    '~plugins/vanilla-tilt',
    '~plugins/GlobalComponents',
    { src: "@/plugins/aos", mode: "client" },
  ],

  components: true,

  buildModules: [
    '@nuxt/postcss8',
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },

  vuetify: {
    customVariables: ['~/assets/styles/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        // 'postcss-custom-properties': false
      },
    },
  }
}

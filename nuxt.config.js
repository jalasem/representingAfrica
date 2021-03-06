export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['./assets/scss/main.scss'],
  styleResources: {
    scss: './assets/scss/variables.scss'
  },
  colorMode: {
    preference: 'system',
    fallback: 'light'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/flamelink', ssr: true },
    { src: '~/plugins/front-only', ssr: false },
    { src: '~/plugins/universal', ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  purgeCSS: {
    whitelist: ['dark-mode']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, isServer }) {
      if (isServer) {
        config.externals = {
          'firebase-admin': 'commonjs firebase-admin',
          'firebase/app': 'commonjs firebase/app',
          'firebase/firestore': 'commonjs firebase/firestore',
          'firebase/database': 'commonjs firebase/database',
          'firebase/storage': 'commonjs firebase/storage',
          'flamelink/app': 'commonjs flamelink/app',
          'flamelink/cf/content': 'commonjs flamelink/cf/content',
          'flamelink/cf/storage': 'commonjs flamelink/cf/storage'
        }
      }
    }
  }
}

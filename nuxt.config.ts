// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  plugins: ['~/plugins/font-awesome.js'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@vesp/nuxt-fontawesome', 'nuxt-icon'],

  fontawesome: {
    icons: {
      solid: ['cog', 'mobile-alt'], // Example icons, adjust as needed
    },
  }
})

import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Adrian Yoris',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio of Adrian Yoris Mbake Woka - Software Engineer, ERP Developer, and Fullstack Developer' },
        { name: 'author', content: 'Adrian Yoris Mbake Woka' },
        { property: 'og:title', content: 'Adrian Yoris | Software Engineer' },
        { property: 'og:description', content: 'Portfolio of Adrian Yoris - Software Engineer & Fullstack Developer' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Adrian Yoris | Software Engineer' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ]
    }
  },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  modules: ['@nuxt/fonts', '@nuxt/icon'],
})
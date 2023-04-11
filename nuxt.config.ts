// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['@/assets/main.scss'],
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/_colors.scss";',
            },
        },
    },
  }
})

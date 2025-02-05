// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            apiBase: '/api'
        }
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    }
})

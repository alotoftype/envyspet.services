// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Envy's Pet Services ",
            charset: 'utf-8',
            viewport: 'width=500, initial-scale=1', 
            meta: [
              {
                "name": "viewport",
                "content": "width=device-width, initial-scale=1"
              },
              {
                "charset": "utf-8"
              }
            ],
            "link": [],
            "style": [],
            "script": [],
            "noscript": []
          }
    },
    css: [
        'bulma',
        '@/assets/styles/main.scss'
    ]
})

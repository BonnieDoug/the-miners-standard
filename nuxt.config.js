const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/the-miners-standard/'
  }
} : {}
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Miners Standard - Winster',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Lindsay and Wez would like to offer a warm and friendly welcome to their hostelry in the heart of the Derbyshire Peak District. The pub is located on the outskirts of the once industrial lead mining village of Winster. It is ideally situated to offer both walking and driving trips to see some of the best scenery the Peak District has to offer. The Heights of Abraham with its spectacular ride across the Derwent Valley & Hilltop Park, Crich Tramway Village with its tram rides and Carsington Water are just a few places located near to this fantastic warm and welcoming pub.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  ...routerBase,
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

import colors from 'vuetify/es5/util/colors'

require('dotenv').config()
const client = require('./plugins/contentful').default

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s',
    // title: process.env.npm_package_name || '',
    title: 'Keta-log',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'google-site-verification', name: 'google-site-verification', content: 'OgO9qwM2XY0qY5xaUMHmOlBtHCl6mI-bK052Sw_C60A'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/fujinotefavicon.png' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"},
      { rel: "stylesheet", href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/utils.js',
    '@/plugins/contentful',
    '@/plugins/prism',
    '@/plugins/vue-scrollto',
    { src: '@/plugins/vue-sidebar-menu', mode: 'client' },
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
    'nuxt-webfontloader',
    ['@nuxtjs/google-analytics', {
      id: 'UA-186293341-1'
    }]
  ],
  webfontloader: {
    google: {
      families: ['Montserrat&family=Noto+Sans&family=Open+Sans&family=Roboto&display=swap'] 
    }
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://self-update.netlify.app',
    routes() {
      return client
      .getEntries({ content_type: 'blog' })
      .then(entries => {
        return entries.items.map(post => {
          return "/posts/" + post.fields.slug
        })
      })
    }
  },
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    typography: true,
    use: [
      ['markdown-it-table-of-contents', {
        includeLevel: [1, 2, 3], // h2, h3を目次として表示する
        containerHeaderHtml: '<div class="toc-container-header">【Contents】</div>' // 目次の見出しの内容を設定する
      }],
      'markdown-it-anchor'  // 見出し内部リンク
    ]
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,/*ダークモードを常時適用の時は「true」にする。*/
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
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PREVIEW_ACCESS_TOKEN: process.env.CTF_PREVIEW_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  },
  router: {
    trailingSlash: true,
    middleware: [
      'getContentful',
      'redirect'
    ]
  },
  generate: {
    path: '/sitemap.xml/',
    async routes () {
      const [posts] = await Promise.all([
        client.getEntries({
          content_type: 'blog'
        })
      ]);
      return [
        ...posts.items.map((post) => {
          return { route: `posts/${post.fields.slug}`, payload: post };
        })
      ];
    }
  },
  styleResources: {
    scss: [
      '~assets/styles/_var.scss'
    ]
  }
}

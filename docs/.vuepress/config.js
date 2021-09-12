const locales = require('./config/locales');

module.exports = ctx => ({
  base: '/docs/',

  head: require('./config/head'),

  plugins: require('./config/plugins'),
  locales: locales.get(),

  head: [
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Mukta:wght@200;400;600&amp;display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: "/logo-docs.svg",

    algolia: ctx.isProd && {
        apiKey: '',
        indexName: ''
    },
    searchPlaceholder: 'Search Docs',

    docsRepo: 'citizenfx-reloaded/docs',
    docsDir: 'docs',
    editLinks: true,

    locales: locales.theme(),
  },
})

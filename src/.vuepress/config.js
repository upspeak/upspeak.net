module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Upspeak',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "A contextual discussion platform that can connect to Matrix",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo/logo-no-bg.png' }],
    ['meta', { name: 'theme-color', content: '#1f232f' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/logo/logo-no-bg@2x.png',
    lastUpdated: false,

    repo: 'upspeak/upspeak',
    repoLabel: 'View source',
    docsRepo: 'upspeak/upspeak.net',
    docsBranch: 'default',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit this page',

    nav: [
      {
        text: 'About',
        link: '/about/',
      },
      {
        text: 'Docs',
        link: '/docs/'
      }
    ],

    '/docs/': {
      sidebar: 'auto'
    },
    sidebar: {
      '/about/': [
        {
          title: 'About',
          collapsable: true,
          children: [
            '',
            'context',
            'hypothesis',
            'focus-areas',
            'data-model',
            'brand'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

module.exports = {
  lang: 'en-US',
  title: 'Django Setup Wiki',
  description: 'Django setup instructions',

  themeConfig: {
    // home: true,
    // logo: '/static/logo.png',
    // repo: 'faraday-academy/django-setup-wiki',
    // lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Docs', link: '/introduction' },
    ],
    sidebar: [
      '/',
      '/Overview',
      // {
      //   title: 'General Setup',
      //   collapsable: false,
      //   children: [
      //     '/general-setup/',
      //   ]
      // },
      // {
      //   title: 'General Setup',
      //   collapsable: false,
      //   children: [
      //     '/general-setup/',
      //   ]
      // },
      // {
      //   title: 'General Setup',
      //   collapsable: false,
      //   children: [
      //     '/general-setup/',
      //   ]
      // },
    ],
    plugins: [
      [
        '@vuepress/plugin-search',
      ],
    ],
  }
}

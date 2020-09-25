module.exports = {
  title: ' English Notebook',
  description: ' Practice and Writing ',
  base: '/English/',
//  dest: 'public',
  plugins: [
    ['autobar'],
    [
      'vuepress-plugin-git-log',
      {
        additionalArgs: '--no-merge',
      },
    ],
  ],
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/home/'
      },
      {
        text: 'H5',
        link: '/H5/'
      },
      {
        text: '规范',
        link: '/Standard/'
      }
    ],
    sidebar: [

    ]
  }
}

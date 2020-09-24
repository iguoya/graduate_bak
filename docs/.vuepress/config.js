module.exports = {
  title: ' 英语笔记 ',
  description: ' 阅读和写作',
  base: '/English/',
//  dest: 'public',
  plugins: [
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
      '/',
      '/1-精选美文120',
      ['/page-b', 'Explicit link text']
    ]
  }
}

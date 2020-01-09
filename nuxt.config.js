
export default {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost,
  },
  vue: {
    config: {
      productionTip: true,
      devtools: false,
      performance: {
        hints: 'warning',
        maxEntrypointSize: 900000001,
        maxAssetSize: 500000000,
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        }
      }
    }
  },
  head: {
    title: 'Test BLOG',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: 'prism', rel: 'stylesheet', href: '/css/prism.css' }
    ],
    script: [
      { src: '//at.alicdn.com/t/font_556506_8c5mvyqjye4.js' },
      { src: '/js/prism.js' },
      // 百度主推文章收录用
      { src: 'https://zz.bdstatic.com/linksubmit/push.js' },
      // 加入百度统计js，使用时自行添加为自己的
      { src: 'https://hm.baidu.com/hm.js?9ad747f5c0569abe42935fb32fece08f' }
    ]
  },
  loading: './components/Loading',
  router: {
    middleware: 'global'
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/scss/global.scss'
  ],
  styleResources: {
    scss: ['./assets/scss/variable.scss']
  },
  plugins: [
    '@/plugins/axios','@/plugins/element-ui','@/plugins/message','@/plugins/icon',{src:'@/plugins/common',mode:'client'}
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  build: {
    transpile: [/^element-ui/,'/plugins'],
    extractCSS: true,
    vendors: ['@nuxtjs/axios', 'element-ui'],
  },
}

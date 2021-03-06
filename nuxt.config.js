
export default {
  mode: 'universal',
  server: {
    port: 8081, // default: 3000
    host: '0.0.0.0', // default: localhost,
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
    title: "Hugh's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,viewport-fit=cover,user-scalable=no minimal-ui' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      //禁止百度等搜索引擎自动转码
      { hid: 'Cache-Contro', content: 'no-transform', 'http-equiv': 'Cache-Control' },
      { hid: 'Cache-Contro2', content: 'no-siteapp', 'http-equiv': 'Cache-Control' },
      { hid: 'Cache-Contro3', content: 'IE=edge,chrome=1', 'http-equiv': 'X-UA-Compatible' },

    ],
    link: [
      { hid:'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid:'icon2', rel: 'icon', type: 'image/x-icon', href: '/icon.png' },
      { hid: 'prism', rel: 'stylesheet', href: '/css/prism.css' },
      //font-awesome 4.2.0
      { hid: 'font-awesome', rel: 'stylesheet', href: 'https://lib.baomitu.com/font-awesome/4.2.0/css/font-awesome.min.css', type: 'text/css' },
    ],
    script: [
      { src: '//at.alicdn.com/t/font_556506_8c5mvyqjye4.js' },
      { src: '/js/prism.js' },
      // 百度主推文章收录用
      { src: 'https://zz.bdstatic.com/linksubmit/push.js', async: true },
      // 加入百度统计js，使用时自行添加为自己的
      { src: 'https://hm.baidu.com/hm.js?9ad747f5c0569abe42935fb32fece08f', async: true},
      //谷歌
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-TPC877MB0L', async: true },
      
      //waifu-tips.js和播放器 依赖 JQuery 库
      // { src: 'https://lib.baomitu.com/jquery/2.2.4/jquery.min.js' },
      { src: 'https://cdn.bootcss.com/jquery/3.3.1/jquery.js' },
      //实现拖动效果，需引入 JQuery UI
      // { src: 'https://cdn.bootcss.com/jqueryui/1.12.1/jquery-ui.min.js' },
      //key 
      // { innerHTML: 'XlchKey="hu990605112";', type: 'text/javascript', charset: 'utf-8' },
      // //JQuery-mousewheel  3.1.9 
      // { src: 'https://lib.baomitu.com/jquery-mousewheel/3.1.9/jquery.mousewheel.min.js' },
      // //  Scrollbar 
      // { src: 'https://static.https.badapple.top:8878/BadApplePlayer/js/scrollbar.js' },
      // // BadApplePlayer
      // { src: 'https://static.https.badapple.top:8878/BadApplePlayer/Player.js' },
      
    ],
    // __dangerouslyDisableSanitizersByTagID: {
    //   oldbrowser: 'innerHTML'
    // },
    __dangerouslyDisableSanitizers: ['script']
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
    '@/plugins/axios','@/plugins/element-ui','@/plugins/message','@/plugins/icon',{src:'@/plugins/image',mode:'client'},{src:'@/plugins/common',mode:'client'}
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
  ],
  build: {
    transpile: [/^element-ui/,'/plugins'],
    extractCSS: true,
    vendors: ['@nuxtjs/axios', 'element-ui'],
  },
  axios: {
    proxy: true,
  },
  proxy: {
    '/uploads': {
      target: 'https://huxiaojun.work',
      pathRewrite: {
        '^/uploads' : '/wp-content/uploads'
      }
    }
  }
}


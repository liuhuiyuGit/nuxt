import env from './env'
export default {
  // 全局head
  head: {
    title: 'web',
    htmlAttrs: {
      lang: 'cn',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  // less的变量是不能跨文件使用的，下面使用@nuxtjs/style-resources来把变量注入到项目中的所有文件。
  modules: [
    '@nuxtjs/style-resources'
  ],
  // less全局变量
  styleResources: {
    less: '@/style/theme.less'
  },

  // 插件主入口
  plugins: ['@/plugins/main'],
  // 组件自动注册
  components: true,
  // 环境变量
  env: {
    ...env[process.env.MODE],
  }

}

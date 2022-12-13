import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, { locale })
import '@/style/theme.less'
import '@/style/css-reset.less'
import '@/style/global-css.less'

import http from "@/utils/request";

// 请求挂载
Vue.prototype['$request'] = http;
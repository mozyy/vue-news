// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 第三方ui库
import MintUI, { MessageBox, Toast, Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'  // swiper滑动组件
import 'swiper/dist/css/swiper.css'
// css
import '@/assets/css/reset.css'
import '@/assets/css/icon.css'
import '@/assets/css/transition.css'
import '@/assets/css/global.css'

// 自定义组件
import myHeader from '@/components/myHeader'            // header组件
import myLoading from '@/components/loading'            // loading组件
import myError from '@/components/error'                // error组件
import listInfo from '@/components/info'                // 文章列表信息组件
import listItem from '@/components/listItem'            // 文章列表组件
import commentItem from '@/components/commentItem'      // 评论列表组件
import myBanner from '@/components/banner'              // banner组件
import popupMenu from '@/components/popupMenu'          // 弹框组件

// 注册全局组件
Vue.component('my-header', myHeader)
Vue.component('my-loading', myLoading)
Vue.component('my-error', myError)
Vue.component('list-info', listInfo)
Vue.component('list-item', listItem)
Vue.component('comment-item', commentItem)
Vue.component('my-banner', myBanner)
Vue.component('popup-menu', popupMenu)

import '@/directives'                 // 指令
Vue.config.productionTip = false
Vue.prototype.$toast = Toast
Vue.prototype.$msgBox = MessageBox
Vue.prototype.$indicator = Indicator
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

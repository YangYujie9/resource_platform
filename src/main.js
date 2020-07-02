// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import router from './router/index'
import VueRouter from 'vue-router'
// 6.22 
import $ from 'jquery'
// 6.22 

import './assets/icon/iconfont.css'



import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'


// 引入全局样式表
import './assets/css/global.css'


// import axios from 'axios'
// axios.defaults.baseURL = '192.168.2.26:8888/api/internal/user/login'
// Vue.prototype.$http = axios

Vue.use(VueRouter)


Vue.config.productionTip = false

/* eslint-disable no-new */

// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

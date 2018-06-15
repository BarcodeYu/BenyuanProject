// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import 'lib-flexible'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// 全局注册
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Vue.prototype.$axios = require('axios')// 挖坑！！！axios使用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Axios,
  components: { App },
  template: '<App/>'
})

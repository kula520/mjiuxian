// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.prototype.$axios = axios;
// 请求拦截器
axios.interceptors.request.use(
 function(config) {
   return config;
 },
 function(error) {
   return Promise.reject(error);
 }
);
// 响应拦截器
axios.interceptors.response.use(
 function(response) {
   return response;
 },
 function(error) {
   return Promise.reject(error);
 }
);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
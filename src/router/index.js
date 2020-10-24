import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/home.vue'
import Login from '../login/login'
import Sort from '../sortPage/sort'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/sortPage',
      name:'sort',
      component:Sort
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HomeLogin from '@/LoginPage/HomeLogin'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeLogin',
      component: HomeLogin
    }
  ]
})

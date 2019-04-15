import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import About  from './views/About.vue'
import Build from './views/Build.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user-login',
      name: 'user-login',
      component: Login
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Build',
      name: 'Build',
      props: true,
      component: Build
    }
  ]
})

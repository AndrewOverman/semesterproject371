import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Build from './views/Build.vue'
import CustomBuild from './views/CustomBuild.vue'
import CommunityBuilds from './views/CommunityBuilds.vue'
import PastBuilds from './views/PastBuilds.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
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
    },
    {
      path: '/CustomBuild',
      name: 'CustomBuild',
      props: true,
      component: CustomBuild
    },
    {
      path: '/PastBuilds',
      name: 'PastBuilds',
      props: true,
      component: PastBuilds
    },
    {
      path: '/CommunityBuilds',
      name: 'CommunityBuilds',
      props: true,
      component: CommunityBuilds
    }
  ]
})

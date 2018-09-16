import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main/main'
import Faq from '@/components/faq/faq'
import Profile from '@/components/profile/profile'
import Lab from '@/components/lab/lab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab
    },
    {
      path: '/lab',
      name: 'lab',
      component: Lab
    }
  ]
})

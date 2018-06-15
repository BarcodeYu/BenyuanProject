import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header/header'
import exam from '@/components/exam/exam'
import menu from '@/components/menu/menu'
import bottom from '@/components/bottom/bottom'
import popwindow from '@/components/popwindow/popwindow'
import onsale from '@/components/popwindow/onsale'
import popxueli from '@/components/popwindow/popxueli'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/exam',
      name: 'exam',
      component: exam
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    },
    {
      path: '/popwindow',
      name: 'popwindow',
      component: popwindow
    },
    {
      path: '/onsale',
      name: 'onsale',
      component: onsale
    },
    {
      path: '/popxueli',
      name: 'popxueli',
      component: popxueli
    }
  ]
})

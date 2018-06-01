import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import User from 'components/user/user'
import SingerPage from 'components/singer-page/singer-page'
import Disc from 'components/disc/disc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerPage
        }
      ]
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerPage
        }
      ]
    }
  ]
})
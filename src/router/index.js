import Vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Search from 'components/search/search'
import User from 'components/user/user'
import SingerPage from 'components/singer-page/singer-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
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
      component: Search
    }
  ]
})
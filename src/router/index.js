import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../views/login')
    },
    {
      path: '/admin-data',
      component: () => import('../views/login/admin-data')
    },
    {
      path: '/',
      component: () => import('../views/home'),
      children: [
        {
          path: '/industry',
          component: () => import('@/views/industry-set/industry')
        },
        {
          path: '/tourism',
          component: () => import('@/views/industry-set/tourism')
        },
        {
          path: '/account',
          component: () => import('@/views/account-set')
        }
      ]
    }
  ]
})

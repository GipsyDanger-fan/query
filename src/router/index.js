import Vue from 'vue'
import VueRouter from 'vue-router'
// import { getItem } from '@/utils/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/home'),
    children: [
      { path: '/', component: () => import('@/views/home/pages/overall') }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/erroPage')
  },
  {
    path: '*',
    name: 'error404',
    component: resolve => require(['@/views/erroPage'], resolve)
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  mode: 'hash',
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     next()
//   } else {
//     var token = getItem('token')
//     // 有token,执行下一步
//     if (token) {
//       next()
//     } else {
//       // 没有token，返回登录页
//       next({
//         path: '/login'
//       })
//     }
//   }
// })

export default router

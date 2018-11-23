import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'

// 路由懒加载
// component: () => import('@/pages/TokenLogin')
const Login = resolve => require(['@/pages/login/Login'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/login/Login'
// import Home from '@/pages/home/Home'

// 路由懒加载
// component: () => import('@/pages/login/Login')
Vue.use(Router)


const initialRouteMap = [
  { path: '/', component: () => import('@/pages/login/Login') },
  { path: '/home', component: () => import('@/pages/home/Home') },
  { path: '/login', component: () => import('@/pages/login/Login') }
]
const router = new Router({
  routes: initialRouteMap
})
// 访问之前，检查是否登陆了
router.beforeEach((to, from, next) => {
  if(to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('user');
    next()
  }else {
    let token = window.sessionStorage.getItem('user');
    if (!token) {
      next({path: '/login'})
    }else {
      next()
    }
  }
})

export default router
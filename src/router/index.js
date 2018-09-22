import Vue from 'vue'
import Router from 'vue-router'
import {mapState} from 'vuex'
const Index = () => import('@/components/index')
const Detail = () => import('@/components/detail')
const Type = () => import('@/components/type')
const Image = () => import('@/components/images')
const Login = () => import('@/components/login')
const ImgColor = () => import('@/components/ImgColor')
const Cities = () => import('@/components/city')
// const Login = () => import('@/components/login')
Vue.use(Router)

 const vueRouter = new Router({
  routes: [
    {
      path: '/index.html',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }, {
      path: '/image',
      name: 'image',
      component: Image
    }, {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/typeList',
      name: 'Type',
      component: Type
    }, {
      path: '/imgColor',
      name: 'imgColor',
      component: ImgColor
    },
    {
      path: '/cities',
      name: 'Cities',
      component: Cities
    },
    {
    	path: '*',
    	redirect: '/index.html'
    }
  ]
})
vueRouter.beforeEach((to, from, next) => {
  const nextRoute = [ 'account', 'order', 'course'];
    let login = window.sessionStorage.getItem('login')
    if(!login && to.path != '/login'){
      // console.log(45613)
      next('/login')
    }
  next()
})



export default vueRouter

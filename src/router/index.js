import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index' //首页
import shopping from '@/pages/shopping/shopping' //购物车
import classify from '@/pages/classify/classify' //分类
import my from '@/pages/my/my' //我的
import logIn from '@/pages/logIn/logIn' // 登录
import signIn from '@/pages/logIn/signIn'; //注册
import Commodity from '@/components/Commodity.vue' //商品详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/classify',
      name: 'classify',
      component: classify
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: logIn
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/Commodity',
      name: 'Commodity',
      component: Commodity
    },
  ]
})

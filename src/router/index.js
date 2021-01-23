import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index' //首页
import shopping from '@/pages/shopping/shopping' //购物车
import classify from '@/pages/classify/classify' //分类
import my from '@/pages/my/my' //我的
import logIn from '@/pages/logIn/logIn' // 登录
import signIn from '@/pages/logIn/signIn'; //注册
import Commodity from '@/components/commodity.vue' //商品详情
import order from '@/pages/order/order' //订单
import orderDetails from '@/pages/order/orderDetails'//订单详情
import orderPay from '@/pages/order/orderPay' //订单详情

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
    {
      path: '/order',
      name: 'order',
      component: order,
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/orderPay',
      name: 'orderPay',
      component: orderPay
    },
  ]
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import api from './api/api';
import store from './store/store';
Vue.prototype.$api = api.api;
Vue.use(Vant);
Vue.use(ElementUI);


Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
 
//请求拦截器
axios.interceptors.request.use(config => {
//判断是否存在token，如果存在将每个页面的header都添加token
  if(store.state.token){
    config.headers.common['Content-Type']=store.state.token   //此处的XX-Token要根据登录接口中请求头的名字来写
  }
 
  return config;
}, error => {
// 请求错误
  return Promise.reject(error);
});
 
//respone拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  
  error => {  //默认除了2XX之外都为错误
    if(error.response){
      switch(error.response.status){
        case 401:
          this.$store.commit('delToken');
          router.replace({ //跳转到登录页面
            path: '/Login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          });
      }
    }
    return Promise.reject(error.response);
  }
);
 

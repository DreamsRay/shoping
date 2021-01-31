import axios from 'axios' //引入axios模块
import qs from 'querystring' //引入qs模块
import { serverDomain } from './config' //引入配置文件，获取服务器域名
axios.defaults.baseURL = serverDomain; //设置路由字符串的默认字段
axios.defaults.withCredentials = true; //配置允许跨域携带cookie
axios.defaults.timeout = 100000; //配置超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //配置全局请求头

const ajax = {};
ajax.get = function (path,data) {
    return axios.get(path,{ params: data });
};
ajax.delete = function (path,data) {
    return axios.delete(path,{ params: data });
};
ajax.post = function (path,data) {
    return axios.post(path, qs.stringify(data));
};

const api = {
    add_user: data => ajax.post('/add_user', data), //添加用户
    user_login: data => ajax.post('/user_login', data),
    get_my_user: data => ajax.get('/get_my_user',data)
};

export default api;
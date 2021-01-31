import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4000'; //设置路由字符串的默认字段
axios.defaults.withCredentials = true; //配置允许跨域携带cookie
axios.defaults.timeout = 100000; //配置超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //配置全局请求头

let api = {
    login,  //登录
    myUser, //获取用户信息
    addUser,  //添加用户
    product, //产品展示
};

function login(data) {
    return axios({
        url: '/user_login',
        method: 'post',
        data: data
    });
}
function myUser() {
    return axios({
        url: '/get_my_user',
        method: 'get',
    });
}

function addUser(data) {
    return axios({
        url: '/add_user',
        method: 'post',
        data: data
    });
}

function product(data) {
    return axios({
        url: '/get_home_product',
        method: 'get',
        params: data
    })
}
export default {
    api
};
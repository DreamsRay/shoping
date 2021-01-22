import axios from 'axios';

let account = {
    login,  //登录
    myUser
};

function login(data) {
    // 用户登录
    return axios({
        url: 'http://localhost:4000/user_login',
        method: 'post',
        data: data
    });
}
function myUser() {
    return axios({
        url: 'http://localhost:4000/get_my_user',
        method: 'get',
    });
}
export default {
    account
};
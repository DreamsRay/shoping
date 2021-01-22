<template>
  <div>
    <div class="hd-background" @click="logIn">
      <div><img :src="avatar" alt="" /></div>
      <div v-text="uname">登录/注册</div>
    </div>
    <div class="order">
      <div>我的订单</div>
      <div style="color: rgba(0, 0, 0, 0.5)">
        查看全部订单 <van-icon name="arrow" />
      </div>
    </div>
    <div>
      <van-grid>
        <van-grid-item
          icon="https://gw.alicdn.com/tfs/TB135Ipp.H1gK0jSZSyXXXtlpXa-87-87.png_60x60q90_.webp"
          text="待付款"
          badge="99+"
        />
        <van-grid-item
          icon="https://gw.alicdn.com/tfs/TB1DdAqp.Y1gK0jSZFMXXaWcVXa-87-87.png_60x60q90_.webp"
          text="待发货"
        />
        <van-grid-item
          icon="https://gw.alicdn.com/tfs/TB1b3zgmMmTBuNjy1XbXXaMrVXa-87-87.png_60x60q90_.webp"
          text="待收货"
        />
        <van-grid-item
          icon="https://gw.alicdn.com/tfs/TB1fOKqm_tYBeNjy1XdXXXXyVXa-87-87.png_60x60q90_.webp"
          text="评价"
        />
      </van-grid>
    </div>
    <div class="ui-line"></div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
import api from '@/assets/js/api'
import {serverDomain} from '@/assets/js/config.js'
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      avatar:"",
      is_login:false,
      uname:""
    };
  },
  mounted(){
    this.myUser();
  },
  methods: {
    logIn() {
      if (this.is_login) {

      }else{
        this.$router.push({path:'/logIn'});
      }
    },
    order(){
      this.$router.push({path:'/order'});
    },
    myUser(){
      this.$account.myUser((res)=>{
          console.log(res.data);
      })
    }
  },
  async beforeMount() {
      const data = (await api.get_my_user()).data; // 以后遇见promise对像可以这样取
      console.log(data);
      if (data) {
          this.avatar = serverDomain + data.avatar;
          console.log(this.avatar);
        this.uname = data.uname;
        this.is_login= true;
      }else{
        this.avatar = "../../../static/img/my/avatar.png";
        this.uname = "登录/注册";
        this.is_login= false;
      }
      console.log(data);
  }
};
</script>

<style scoped>
.hd-background {
  height: 5rem;
  background: url(../../../static/img/my/bgmy.png) center 0 #f37d0f;
  background-size: 100%;
  display: flex;
  align-items: center;
}
.hd-background > div {
  margin: 1rem;
  color: #fff;
  font-size: 0.8rem;
}
.hd-background > div:first-child {
  margin: 1rem 0 1rem 1rem;
}
.hd-background > div > img {
  height: 2.5rem;
}
.order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 1rem;
  border-bottom: 3px solid rgb(245, 245, 245);
  font-size: 12px;
}
.ui-line {
  height: 1rem;
  background: #f5f5f5;
  overflow: hidden;
  clear: both;
}
</style>>

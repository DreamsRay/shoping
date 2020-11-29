<template>
  <div>
    <router-view />
    <van-tabbar route active-color="#07c160">
      <van-tabbar-item replace to="/" icon="home-o"> 首页 </van-tabbar-item>
      <van-tabbar-item replace to="/classify" icon="chat-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/shopping" icon="cart-o"> 购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o"> 我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "tabbar",
};
</script>

<style>
</style>
<template>
  <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="signIn">
          <span @click="signIn">免费注册</span>
      </div>
      <div style="margin: 16px">
        <van-button round block color="#ff6700" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    signIn(){
        this.$router.push({path:'/signIn'})
    }
  },
};
</script>

<style scoped>
.signIn{
    text-align: end;
    padding: .1rem 1rem;
    color: #555;
    font-size: 14px;
}
</style>>
</style>
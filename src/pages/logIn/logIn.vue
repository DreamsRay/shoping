<template>
  <div>
    <div class="title">
      <van-nav-bar
        title="登录"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="phone"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
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
      phone: "",
      password: "",
    };
  },
  created() {},
  methods: {
    onSubmit(values) {
      // console.log("submit", values);
      let data = {
        phone: this.phone,
        password: this.password,
      };
      this.$api.login(data).then((response) => {
        console.log(response)
        this.$dialog
          .alert({
            message: response.data.msg,
          })
          .then(() => {
            // on close
            if (response.data.msg == "登录成功") {
              this.$router.push({ path: "/my" });
            }
          });
      });
    },
    signIn() {
      this.$router.push({ path: "/signIn" });
    },
    onClickLeft() {
      this.$router.push({ path: "/my" });
    },
  },
};
</script>

<style scoped>
.signIn {
  text-align: end;
  padding: 0.1rem 1rem;
  color: #555;
  font-size: 14px;
}
.title /deep/ .van-nav-bar__content {
  background-color: #f2f2f2;
}
.title /deep/ .van-nav-bar__title {
  color: rgb(102, 102, 102);
}
.title /deep/ .van-nav-bar .van-icon {
  color: rgb(102, 102, 102);
}
</style>


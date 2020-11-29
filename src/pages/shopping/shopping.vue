<template>
  <div>
    <div class="title">
      <van-nav-bar
        left-arrow
        v-if="this.compile == true"
        title="购物车"
        right-text="编辑"
        @click-right="onClickRight"
        @click-left="onClickLeft"
      />
      <van-nav-bar
        v-else
        title="购物车"
        right-text="完成"
        @click-right="Right"
      />
    </div>
    <van-card
      :price="price.toFixed(2)"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-stepper @change="onChange(value)" v-model="value" />
      </template>
    </van-card>
    <van-submit-bar :price="total"  v-if="this.compile == true" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <van-submit-bar class="delete" v-else button-text="删除" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      compile: true,
      checked: false,
      value: 1,
      price: 2,
      total: 0,
    };
  },
  mounted() {
    console.log(this.value);
  },
  methods: {
    onClickLeft(){
      this.$router.push({path:'/'});
    },
    onClickRight() {
      this.compile = false;
    },
    Right() {
      this.compile = true;
    },
    onChange(value) {
      console.log(value);
      this.total = this.value * this.price * 100;
    },
    onSubmit() {
      console.log("1");
    },
  },
};
</script>

<style scoped>
.title /deep/ .van-nav-bar__title {
  color: rgb(102, 102, 102);
}
.title /deep/ .van-nav-bar__text {
  color: rgb(102, 102, 102);
}
.title /deep/ .van-nav-bar .van-icon {
  color: rgb(102, 102, 102);
}
.delete .van-submit-bar__bar {
  justify-content: space-between;
}
.title /deep/ .van-nav-bar__content{
        background-color: #f2f2f2;
}
</style>
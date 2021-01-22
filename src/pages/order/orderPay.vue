<template>
  <div>
    <div class="succeed">
      <van-icon name="arrow-left" />
      <span>订单提交成功</span>
    </div>
    <div class="goodsPrice">
      <span>订单金额：{{ pay.money }}元</span>
      <span>订单编号：{{ pay.number }}</span>
      <span>收货人名：{{ pay.name }}</span>
      <span>收货地址：{{ pay.site }}</span>
    </div>
    <div class="way">请选择支付方式</div>
    <van-radio-group v-model="pay.radio" direction="horizontal">
      <div class="item">
        <div><img src="../../../static/img/mibook/mibook.jpg" alt="" /></div>
        <div>余额</div>
        <div>
          <van-radio name="余额"></van-radio>
        </div>
      </div>
      <div class="item">
        <div><img src="../../../static/img/mibook/mibook.jpg" alt="" /></div>
        <div>余额</div>
        <div>
          <van-radio name="微信"></van-radio>
        </div>
      </div>
    </van-radio-group>
    <div class="pay" @click="s">
      <span>去付款</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pay: {
        money: 3,
        number: "adasd23123",
        name: "阿松大",
        site: "大撒大苏打",
        radio: "余额",
      },
    };
  },
  methods: {
    s() {
      console.log(this.pay);
    },
  },
};
</script>

<style scoped>
.succeed {
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.goodsPrice {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  color: #666666;
  font-size: 0.7rem;
  border: 1px solid #eee;
  background-color: #f8f8f8;
}
.succeed > span {
  color: #91b953;
  font-size: 1.5rem;
}
img {
  width: 2rem;
  height: 2rem;
}
.pay {
  position: fixed;
  bottom: 0;
  height: 5rem;
  width: 100%;
  background-color: #ff5722;
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  height: 4vh;
  display: flex;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eeeeee;
}
.way {
  padding: 0.5rem 1rem;
  color: #666;
}
.item > div:first-child {
  flex: 1;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
}
.item > div:nth-child(2) {
  flex: 1;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
}
.item > div:nth-child(3) {
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.van-radio-group--horizontal {
  flex-direction: column;
}
</style>>


<template>
  <div>
    <div class="title">
      <van-nav-bar
        title="订单详情"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <div class="orderNum"><span>订单编号：</span><span>订单状态：</span></div>
    <van-steps :active="active">
      <van-step>买家下单</van-step>
      <van-step>商家接单</van-step>
      <van-step>买家提货</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
    <div v-for="(item, index) in detailsList" :key="index">
      <van-card
        :num="item.amount"
        :price="item.price"
        :title="item.name"
        :thumb="item.img"
        :origin-price="item.originPrice"
      />
    </div>
    <div class="divider_line"></div>
    <div class="goodsPrice">
      <span>商品价格：{{ totalPrice }}元</span
      ><span>应付金额：{{ totalPrice }}元</span>
    </div>
    <div class="divider_line"></div>
    <div class="goodsPrice">
      <span>下单日期：</span><span>收货地址：</span><span>收货人名：</span
      ><span>收货时间：</span>
    </div>
    <div class="payment">
      <van-button
        size="small"
        round
        style="color: #999; border: 1px solid #999; padding: 0 1rem"
        >取消订单</van-button
      >
      <van-button
        size="small"
        round
        style="color: #ff6700; border: 1px solid #ff6700; padding: 0 1rem"
        >立即付款</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      detailsList: [
        {
          id: 1,
          name: "电脑",
          price: 100,
          img: "../../../static/img/miTelevision/television.jpg",
          amount: 1,
          isChecked: false,
          stock: 3,
          originPrice: 100,
        },
        {
          id: 1,
          name: "电脑",
          price: 100,
          img: "../../../static/img/miTelevision/television.jpg",
          amount: 1,
          isChecked: false,
          stock: 3,
          originPrice: 100,
        },
        {
          id: 1,
          name: "电脑",
          price: 100,
          img: "../../../static/img/miTelevision/television.jpg",
          amount: 1,
          isChecked: false,
          stock: 3,
          originPrice: 100,
        },
        {
          id: 1,
          name: "电脑",
          price: 100,
          img: "../../../static/img/miTelevision/television.jpg",
          amount: 1,
          isChecked: false,
          stock: 3,
          originPrice: 100,
        },
        {
          id: 1,
          name: "电脑",
          price: 100,
          img: "../../../static/img/miTelevision/television.jpg",
          amount: 1,
          isChecked: false,
          stock: 3,
          originPrice: 100,
        },
      ],
    };
  },
  computed: {
    totalPrice() {
      var total = 0;
      this.detailsList.forEach((item, index) => {
        total += item.amount * item.price;
      });
      return total;
    },
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/order" });
    },
  },
};
</script>

<style scoped>
.title /deep/ .van-nav-bar__content {
  background-color: #f2f2f2;
}
.title /deep/ .van-nav-bar__title {
  color: rgb(102, 102, 102);
}
.title /deep/ .van-nav-bar .van-icon {
  color: rgb(102, 102, 102);
}
.orderNum {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: 1rem solid rgb(245, 245, 245);
}
.van-card__content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 0.5rem;
}
.divider_line {
  height: 10px;
  background-color: rgb(245, 245, 245);
}
.goodsPrice {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}
.payment {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 4rem;
  width: 100%;
  background-color: #ffff;
  /* box-shadow: 0 -1px 5px #888888; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payment > button {
  margin: 2rem;
}
</style>>

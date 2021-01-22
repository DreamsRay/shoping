<template>
  <div class="body">
    <div class="title">
      <van-nav-bar
        title="订单"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <van-tabs v-model="active" animated>
      <van-tab v-for="(item, index) in goods" :title="item.text" :key="index">
        <div v-for="(i, index) in item.orderList" :key="index">
          <div class="goodsTime">
            <span>订单日期：2020/12/02 00:54</span><span>{{ item.text }}</span>
          </div>
          <van-card
            num="2"
            price="2.00"
            desc="描述信息"
            :title="i.name"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            origin-price="10.00"
            @click="orderDetails(i)"
          >
            <template #footer>
              <p>共2件商品 应付：<span style="font-size: 1rem">111元</span></p>
            </template>
          </van-card>
          <div class="vantBtn">
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
              @click="submit(i)"
              >立即付款</van-button
            >
          </div>
           <div class="divider_line"></div>
        </div>
      </van-tab>
    </van-tabs>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar.vue";
export default {
  components: {
    Tabbar,
  },
  data() {
    return {
      active: 0,
      goods: [
        {
          text: "全部",
          filter: "",
          orderList: [
            {
              id: 1,
              name: "电脑",
              price: 100,
              img: "../../../static/img/miTelevision/television.jpg",
              amount: 1,
              isChecked: false,
              stock: 3,
            },
            {
              id: 2,
              name: "手机",
              price: 200,
              img: "https://img.yzcdn.cn/vant/cat.jpeg",
              amount: 1,
              isChecked: true,
              stock: 10,
            },
            {
              id: 3,
              name: "电视",
              price: 300,
              img: "../../../static/img/miTelevision/television.jpg",
              amount: 2,
              isChecked: false,
              stock: 5,
            },
            {
              id: 3,
              name: "电视",
              price: 300,
              img: "../../../static/img/miTelevision/television.jpg",
              amount: 2,
              isChecked: false,
              stock: 5,
            },
          ],
        },
        {
          text: "待付款",
          filter: "unpaid",
          orderList: [
            {
              id: 1,
              name: "电脑",
              price: 100,
              img: "../../../static/img/miTelevision/television.jpg",
              amount: 1,
              isChecked: false,
              stock: 3,
            },
          ],
        },
        {
          text: "待收货",
          filter: "paid",
          orderList: [],
        },
        {
          text: "已完成",
          filter: "delivered",
          orderList: [],
        },
      ],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/my" });
    },
    submit(i) {
      this.$router.push({ path: "/orderPay" });
      console.log(i);
    },
    orderDetails(i) {
      console.log(i);
      this.$router.push({ path: "/orderDetails" });
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
.body {
  /* background-color: #f5f5f5; */
}
.goodsTime {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.7rem;
  border-bottom: 1px solid #ececec;
}
.goodsTime > span:nth-child(2) {
  color: #ff5722;
}
.vantBtn {
  text-align: end;
  margin: .5rem 1rem;
}
.van-card{
  background-color: none;
}
.divider_line {
  height: 10px;
  background-color: rgb(245, 245, 245);
}
</style>
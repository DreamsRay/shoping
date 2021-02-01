<template>
  <div>
    <div class="title">
      <van-nav-bar
        left-arrow
        title="购物车"
        @click-right="onClickRight"
        @click-left="onClickLeft"
      />
    </div>
    <div v-if="this.empty == false">
      <div class="items" v-for="(item, index) in goods" :key="index">
        <div class="item">
          <van-checkbox
            style="padding: 0 0.5rem"
            v-model="item.isChecked"
            checked-color="#fc5232"
          ></van-checkbox>
          <div>
            <img :src="item.img" alt="" />
          </div>
        </div>
        <div class="details">
          <span>{{ item.name }}</span>
          <span style="color: #999">售价：￥{{ item.price.toFixed(2) }}</span>
          <div class="stepper">
            <van-stepper min="1" :max="item.stock" v-model="item.amount" />
            <i class="ion" @click="DeleteGoods(index)"></i>
          </div>
        </div>
      </div>
      <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox
          v-model="checkAll"
          @click="checkOne()"
          checked-color="#fc5232"
          >全选</van-checkbox
        >
      </van-submit-bar>
    </div>
    <div v-else>
      <van-empty
        description="购物车竟然是空的"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
      >
        <van-button type="default">去逛逛</van-button>
      </van-empty>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      price: 2,
      total: 0,
      empty: false,
      goods: [
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
    };
  },
  mounted() {},
  watch: {
    goods(e) {
      if (e.length == 0) {
        this.empty = true;
      } else {
        this.empty = false;
      }
    },
  },
  computed: {
    totalPrice() {
      var total = 0;
      this.goods.forEach((item, index) => {
        if (item.isChecked == true) {
          total += item.amount * item.price;
        }
      });
      return total * 100;
    },
    checkAll: {
      get() {
        return this.goods.every((item) => {
          return item.isChecked;
        });
      },
      set() {},
    },
  },
  mounted() {
    this.myUser();
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
    onClickRight() {
      this.compile = false;
    },
    Right() {
      this.compile = true;
    },
    checkOne() {
      var f = !this.checkAll;
      this.goods.forEach((item) => (item.isChecked = f));
    },
    onSubmit() {
      console.log("1");
      console.log(this.result);
    },
    DeleteGoods(index) {
      console.log(index);
      this.goods.splice(index, 1);
      console.log(this.goods);
      // this.$dialog
      //   .alert({
      //     message: "弹窗内容",
      //     theme: "round-button",
      //   })
      //   .then(() => {
      //     // on close
      //   });
    },
    myUser() {
      this.$api.myUser().then((res) => {
        console.log(res);
        // if (res.data == "") {
        //   this.$router.push({ path: "/logIn" });
        // }
      });
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
.title /deep/ .van-nav-bar__content {
  background-color: #f2f2f2;
}
.ion {
  background: url(../../../static/img/shopping/delete.png) center center
    no-repeat;
  width: 3rem;
  height: 3rem;
  display: block;
  background-size: 2.5rem;
}
.items {
  height: 10rem;
  display: flex;
  border-bottom: 1rem solid rgb(245, 245, 245);
}
.item {
  height: 100%;
  display: flex;
  align-items: center;
  flex: 5;
  padding-left: 1rem;
}
.item > div:nth-child(2) {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item img {
  height: 7rem;
  width: 7rem;
}
.details {
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 0 1rem 0;
}

.stepper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
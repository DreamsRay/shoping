<template>
  <div class="background">
    <div class="Search">
      <div @click="my">
        <van-icon name="manager-o" />
      </div>
      <van-search
        v-model="value"
        show-action
        shape="round"
        background="rgb(242, 242, 242)"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!-- <img v-lazy="image"/> -->
        <img :src="image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="choiceness">
      <img
        src="../../../static/img/10d5e0e2a319079549175a8831417edc.jpg"
        alt=""
      />
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in redmi" :key="index">
        <div @click="Commodity"><img :src="item.img" alt="" /></div>
        <div class="introduce">
          <div>{{ item.name }}</div>
          <div>
            <span>￥{{ item.price }}起 </span
            ><span> ￥{{ item.priceOld }}</span>
          </div>
          <div>
            <van-button size="small" type="primary">立即购买</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="divider_line"></div>
    <div class="choiceness">
      <img src="../../../static/img/miTelevision/television.jpg" alt="" />
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in miTelevision" :key="index">
        <div><img :src="item.img" alt="" /></div>
        <div class="introduce">
          <div>{{ item.name }}</div>
          <div>
            <span>￥{{ item.price }}起 </span
            ><span> ￥{{ item.priceOld }}</span>
          </div>
          <div>
            <van-button size="small" type="primary">立即购买</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="divider_line"></div>
    <div class="choiceness">
      <img src="../../../static/img/mibook/mibook.jpg" alt="" />
    </div>
    <div class="items">
      <div class="item" v-for="(item, index) in miBook" :key="index">
        <div><img :src="item.img" alt="" /></div>
        <div class="introduce">
          <div>{{ item.name }}</div>
          <div>
            <span>￥{{ item.price }}起 </span
            ><span> ￥{{ item.priceOld }}</span>
          </div>
          <div>
            <van-button size="small" type="primary">立即购买</van-button>
          </div>
        </div>
      </div>
    </div>
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
      value: "",
      images: [
        "static/img/1.jpg",
        "static/img/2.jpg",
        "static/img/3.jpg",
        "static/img/4.jpg",
        "static/img/5.jpg",
      ],
      redmi: [
        {
          name: "Redmi K30 4G",
          img:
            "//img.alicdn.com/img/i2/130797528/O1CN01rtjk1B25TsDt0LNc0_!!0-saturn_solar.jpg_210x210.jpg",
          recommend: "120Hz流速屏，全速热爱",
          price: 1722,
          priceOld: "2231",
        },
        {
          name: "Redmi K30 4G",
          img:
            "//img.alicdn.com/img/i2/130797528/O1CN01rtjk1B25TsDt0LNc0_!!0-saturn_solar.jpg_210x210.jpg",
          recommend: "120Hz流速屏，全速热爱",
          price: 1722,
          priceOld: "2231",
        },
        {
          name: "Redmi K30 4G",
          img:
            "//img.alicdn.com/img/i2/130797528/O1CN01rtjk1B25TsDt0LNc0_!!0-saturn_solar.jpg_210x210.jpg",
          recommend: "120Hz流速屏，全速热爱",
          price: 1722,
          priceOld: "2231",
        },
        {
          name: "Redmi K30 4G",
          img:
            "//img.alicdn.com/img/i2/130797528/O1CN01rtjk1B25TsDt0LNc0_!!0-saturn_solar.jpg_210x210.jpg",
          recommend: "120Hz流速屏，全速热爱",
          price: 1722,
          priceOld: "2231",
        },
        {
          name: "Redmi K30 4G",
          img:
            "//img.alicdn.com/img/i2/130797528/O1CN01rtjk1B25TsDt0LNc0_!!0-saturn_solar.jpg_210x210.jpg",
          recommend: "120Hz流速屏，全速热爱",
          price: 1722,
          priceOld: "2231",
        },
      ],
      miTelevision: [
        {
          name: "小米电视4A 65英寸",
          img:
            "//gw3.alicdn.com/bao/uploaded/i1/782731205/O1CN01F13vhd1KlvtuGz8rj_!!0-item_pic.jpg_210x210.jpg",
          recommend: "4K HDR，人工智能语音系统",
          price: 2799,
          priceOld: "3231",
        },
        {
          name: "小米电视4A 65英寸",
          img:
            "//gw3.alicdn.com/bao/uploaded/i1/782731205/O1CN01F13vhd1KlvtuGz8rj_!!0-item_pic.jpg_210x210.jpg",
          recommend: "4K HDR，人工智能语音系统",
          price: 2799,
          priceOld: "3231",
        },
        {
          name: "小米电视4A 65英寸",
          img:
            "//gw3.alicdn.com/bao/uploaded/i1/782731205/O1CN01F13vhd1KlvtuGz8rj_!!0-item_pic.jpg_210x210.jpg",
          recommend: "4K HDR，人工智能语音系统",
          price: 2799,
          priceOld: "3231",
        },
      ],
      miBook: [
        {
          name: '小米笔记本15.6" MX110 独显版',
          img:
            "//gw3.alicdn.com/bao/uploaded/i2/291333743/O1CN01eSQfUo1dWL6lYIwKa_!!291333743.png_210x210.jpg",
          recommend: "4K HDR，人工智能语音系统",
          price: 2799,
          priceOld: "3231",
        },
      ],
    };
  },
  methods: {
    onSearch() {
      console.log(this.value);
    },
    my() {
      this.$router.push({ path: "/my" });
    },
    Commodity() {
      this.$router.push({ path: "/Commodity" });
      console.log(1);
    },
  },
};
</script>

<style scoped>
.background {
  background-color: #f2f2f2;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.my-swipe img {
  height: 150px;
  width: 100%;
}
.Search {
  display: flex;
  padding: 0 10px;
  background-color: rgb(242, 242, 242);
}
.Search > div:first-child {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.Search > div:last-child {
  flex: 9;
}
.Search > div:last-child /deep/ .van-search__content {
  background-color: rgb(255, 255, 255);
}
.choiceness {
  height: 230px;
}
.choiceness img {
  width: 100%;
  height: 100%;
}
.items {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
}
.items > div {
  width: 45%;
  margin: 3% 2%;
  background-color: #ffff;
  border-radius: 5px;
}
.items > div img {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 100%;
}
.introduce {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
}
.introduce div {
  margin: 2% 0;
}
.introduce > div:nth-child(2) {
  color: rgba(0, 0, 0, 0.54);
}
.introduce > div:nth-child(2) > span:nth-child(1) {
  color: #ea625b;
}
.introduce > div:nth-child(2) > span:nth-child(2) {
  font-weight: 100;
  text-decoration: line-through;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
}
.divider_line {
  height: 10px;
  background-color: rgb(245, 245, 245);
}
</style>

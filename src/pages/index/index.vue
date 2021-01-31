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
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="items">
        <div class="item" v-for="(item, index) in redmi" :key="index">
          <div @click="Commodity"><img :src="item.img" alt="" /></div>
          <div class="introduce">
            <div>{{ item.pname }}</div>
            <div>
              <span>￥{{ item.price }}起 </span
              ><span> ￥{{ item.price_old }}</span>
            </div>
            <div>
              <van-button size="small" type="primary">立即购买</van-button>
            </div>
          </div>
        </div>
      </div>
    </van-list>
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
      redmi: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  mounted() {
    this.product();
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
      this.page++;
      let data = {
        page: this.page,
      };
      this.$api.product(data).then((res) => {
        // console.log(res);
        for (let item of res.data) {
          item.img = "http://localhost:4000/" + JSON.parse(item.img);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (res.data.length == 0) {
          this.finished = true;
        } else {
         this.redmi = this.redmi.concat(res.data);
        }
        // console.log(this.redmi);
      });

      }, 1000);
    },
    product() {
      let data = {
        page: this.page,
      };
      this.$api.product(data).then((res) => {
        // console.log(res);
        for (let item of res.data) {
          item.img = "http://localhost:4000/" + JSON.parse(item.img);
        }
        this.redmi = res.data;
      });
    },
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

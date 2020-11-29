<template>
  <div>
    <van-swipe
      @change="onChange"
      class="my-swipe"
      :autoplay="3000"
      indicator-color="white"
    >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="indicator">{{ current + 1 }} / 4</div>
    <div @click="goBack"><van-icon class="goBack" name="arrow-left" /></div>
    <div>
      <div class="prices">
        <span class="price">￥1982 </span>
        <span class="priceOld"> ￥1982</span>
      </div>
      <div class="name">
        <span>Redmi K30</span>
        <span>「6GB+128GB到手价低至1399元；购机抽奖赢70英寸电视」</span>
      </div>
      <div class="ui-line"></div>
      <div>
        <van-cell is-link @click="showPopup">选择</van-cell>
        <van-popup
          closeable
          close-icon="close"
          position="bottom"
          :style="{ height: '30%' }"
        />
      </div>
      <div>
        <van-cell is-link @click="showParameter">参数</van-cell>
        <van-popup
          v-model="parameter"
          closeable
          close-icon="close"
          position="bottom"
          :style="{ height: '30%' }"
        />
      </div>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="home-o" text="首页" @click="toHome" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="onCart" />
        <van-goods-action-button type="warning" text="加入购物车" />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </div>

    <div class="sku-container">
      <van-sku
        v-model="showBase"
        :sku="sku"
        :goods="goods_info"
        :goods-id="goods_id"
        :hide-stock="sku.hide_stock"
        :quota="quota"
        :quota-used="quota_used"
        :initial-sku="initialSku"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :custom-sku-validator="customSkuValidator"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      parameter: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "颜色",
            k_id: "1",
            v: [
              {
                id: "30349",
                name: "粉色",
                imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
              },
              {
                id: "1215",
                name: "蓝色",
                imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-3.png",
              },
            ],
            k_s: "s1",
            count: 2,
          },
          {
            k: "尺寸",
            k_id: "2",
            v: [
              {
                id: "1193",
                name: "1",
              },
              {
                id: "1194",
                name: "2",
              },
            ],
            k_s: "s2",
            count: 2,
          },
        ],
        // 所有 sku 的组合列表，如下是：白色1、白色2、天蓝色1、天蓝色2
        list: [
          {
            id: 2259,
            price: 100, //价格
            discount: 122,
            s1: "1215",
            s2: "1193",
            stock_num: 20, //库存
            goods_id: 946755,
          },
          {
            id: 2260,
            price: 110,
            discount: 112,
            s1: "1215",
            s2: "1194",
            stock_num: 2, //库存
            goods_id: 946755,
          },
          {
            id: 2257,
            price: 120,
            discount: 132,
            s1: "30349",
            s2: "1193",
            stock_num: 40, //库存
            goods_id: 946755,
          },
          {
            id: 2258,
            price: 130,
            discount: 100,
            s1: "30349",
            s2: "1194",
            stock_num: 50, //库存
            goods_id: 946755,
          },
        ],
        price: "5.00", //？？
        stock_num: 227, // 商品总库存？？
        none_sku: false, // 是否无规格商品 false正常显示那些可供选择的标准，此处是颜色和尺寸
        hide_stock: false, // 是否隐藏剩余库存 false正常显示剩余多少件的那个库存
      },
      goods_id: "946755",
      quota: 3, //限购数量 库存旁边显示限购数
      quota_used: 0, //已经购买过的数量 和下方的数字选择框显示不一样 与限购数量是相对应的 0数字选择框显示3   1 -- 2   2 -- 1  3 -- 0
      goods_info: {
        title: "测试商品A",
        picture: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
      },
      showBase: false, //sku的框的显示
      showCustom: false,
      showStepper: false,
      showSoldout: false,
      closeOnClickOverlay: true, //点击空白处关闭购物框
      initialSku: {
        s1: "30349",
        s2: "1193",
        selectedNum: 1, //下面的数字选择框的数字即买了多少件
      },
      customSkuValidator: () => "请选择xxx!", //？？
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    showPopup() {
      this.showBase = true;
    },
    showParameter() {
      this.parameter = true;
    },
    toHome() {
      this.$router.push({ path: "/" });
    },
    onCart() {
      console.log("购物车");
    },
    onClickButton() {
      console.log("点击按钮");
    },
    onBuyClicked(sku) {
      console.log(sku);
    },

    onAddCartClicked(sku) {
      console.log(sku);
    },
    goBack() {
      this.$router.push({path:'/'});
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.indicator {
  position: absolute;
  top: 6.7rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px 15px;
  border-radius: 30px;
  color: #ffffff;
}
.goBack {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px;
  border-radius: 50%;
  color: #ffffff;
}
.priceOld {
  font-weight: 100;
  text-decoration: line-through;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
}
.price {
  color: #ea625b;
}
.name{
  padding: 1rem 1rem 0.5rem 1rem;
}
.prices{
   padding: 1rem 1rem 0 1rem;
}
.ui-line {
    height: 1rem;
    background: #f5f5f5;
    overflow: hidden;
    clear: both;
}
</style>
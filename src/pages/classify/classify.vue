<template>
  <div>
    <div class="title">
      <van-nav-bar
        title="分类"
        left-text=""
        left-arrow
        @click-left="onClickLeft"
      >
      </van-nav-bar>
    </div>
    <van-tree-select
      height="100vh"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <van-grid :column-num="3" v-if="active === 0">
          <van-grid-item
            v-for="value in 2"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
        <van-grid :column-num="3" v-if="active === 1">
          <van-grid-item
            v-for="value in 6"
            :key="value"
            icon="photo-o"
            text="文字"
          />
        </van-grid>
      </template>
    </van-tree-select>
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
      items: [{ text: "分组 1" }, { text: "分组 2" }],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.van-sidebar-item--select::before {
  background-color: #ffffff;
}
.van-tree-select__nav-item {
  text-align: center;
  transition: font-size 0.2s;
}
.van-sidebar-item--select,
.van-sidebar-item--select:active {
  color: #fb7d34;
  font-size: 1.3rem;
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
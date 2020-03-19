<template>
  <div id="app">
    <!-- 中间vue-router部分 -->
    <router-view></router-view>
    <!-- 底部 -->
    <van-tabbar :route="true" :safe-area-inset-bottom="true" v-show="show_tabbar">
      <van-tabbar-item replace to="/" icon="wap-home" van-tabbar-item--active>首页</van-tabbar-item>
      <!-- <van-tabbar-item replace to="/doc" icon="column" dot>资料库</van-tabbar-item> -->
      <van-tabbar-item replace to="/friends" icon="friends" info="5">同学圈</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager" info="">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import store from "./store";

export default {
  data() {
    return {
      show_tabbar: true, // 默认显示底部Tabbar
      // single_pages中存放不显示底部tabbar页面的路由
      single_pages: ["/mine/login", "/mine/register"]
    };
  },
  methods: {
    // 检查当前的路由，是否为单页面，若是，则隐藏底部Tabbar
    checkPath() {
      var now_path = this.$route.path;
      if (this.single_pages.includes(now_path)) {
        this.show_tabbar = false;
      } else {
        this.show_tabbar = true;
      }
    }
  },
  created() {
    if (localStorage.getItem("token")) {
      store.commit("set_token", localStorage.getItem("token"));
      store.commit("set_userinfo", {
        username: localStorage.getItem("username"),
        user_id: localStorage.getItem("user_id")
      });
    }
  },
  updated() {
    this.checkPath()
  },
  mounted() {
    this.checkPath()
  },
};
</script>

<style>
body {
  background-color: #f4f4f4;
}

/* 切换tabbar的动画 */
/* .v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
  position: absolute
}
.v-enter-active{
  transition: all 1s ease
}
.v-leave-active{
  transition: all 1s ease;
} */

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>

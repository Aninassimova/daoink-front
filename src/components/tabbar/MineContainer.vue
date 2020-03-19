<template>
  <div>
    <!-- 个人信息 -->
    <van-row class="panel-selfinfo">
      <van-col span="6" offset="2">
        <img width="100" class="img-head" src="../../assets/images/logo.jpg" />
      </van-col>
      <van-col span="16">
        <!-- 已登录时,显示 -->
        <van-row v-show="show" type="flex" align="center" style="height: 62px">
          <van-col>
            <van-row type="flex" align="center">
              <van-col span="10">
                <label class="font-phone">{{ username }}</label>
              </van-col>
            </van-row>
            <van-row type="flex" align="center">
              <van-col span="24">
                <van-button plain type="info" size="small" @click="logout">退出登录</van-button>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <!-- 未登录时,显示 -->
        <div v-show="!show">
          <van-row type="flex" align="center" style="height: 62px">
            <van-col span="6">
              <van-button plain type="info" size="small" to="/mine/login">登录</van-button>
            </van-col>
            <van-col span="6" offset="1">
              <van-button plain type="primary" size="small" to="/mine/register">注册</van-button>
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
    <!-- 遮罩 -->
    <!-- 登录遮罩 -->
    <br />
    <!-- 中间菜单 -->
    <van-cell-group>
      <van-cell title="问题与反馈" icon="records" size="large" is-link />
      <van-cell title="设置课表" icon="setting-o" size="large" is-link />
    </van-cell-group>
  </div>
</template>

<script>
import store from "../../store";

export default {
  data() {
    return {
      show: false, // 是否显示登录后的组件
      username: ""
    };
  },
  // 创建时，读取store中的信息，判断是否登录
  created() {
    if (store.state.token !== "") {
      this.show = true;
      this.username = store.state.username
    }
  },
  methods: {
    logout: function() {
      store.commit("del_token")
      this.show = false
    }
  }
};
</script>

<style scoped>
.panel-selfinfo {
  padding-top: 5%;
  background-color: white;
  padding-bottom: 5%;
}

.img-head {
  width: 62px;
  height: 62px;
  border-radius: 14px;
}
.font-phone {
  font-size: 20px;
  font-weight: 500;
  color: dimgrey;
}
</style>
<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="onClickLeft" />
    <br />
    <!-- 表单 -->
    <van-row>
      <van-col span="22" offset="1">
        <van-form @submit="onSubmit">
          <van-field
            v-model="userInfo.username"
            type="tel"
            name="username"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }]"
          />
          <van-field
            v-model="userInfo.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">登录</van-button>
          </div>
        </van-form>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import axios from "axios";
import qs from "qs";
import store from "./../../store";
// import changeToken from '../../store/mutation'

export default {
  data() {
    return {
      loginUrl: "http://dao.wayen.tech/api/login/",
      userInfo: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 提交登录信息
    onSubmit(values) {
      var that = this;
      axios
        .post(this.loginUrl, qs.stringify(values), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function(response) {
          let data = response.data;
          // console.log(data.success);
          if (response.data.success) {
            //token, username存储在本地的localStograge中
            var userInfo = {
              username: data["username"],
              user_id: data["user_id"]
            };
            store.commit("set_token", data["token"]);
            store.commit("set_userinfo", userInfo);
            // console.log(store.state.token);
            // console.log(store.state.userInfo.username);
            Toast({
              message: "登录成功",
              iconClass: "fa fa-check"
            });
            that.onClickLeft();
          } else {
            Toast({
              message: "登录失败",
              iconClass: "fa fa-exclamation"
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>
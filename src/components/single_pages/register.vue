<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="onClickLeft" />
    <br />
    <!-- 表单 -->
    <van-row>
      <van-col span="22" offset="1">
        <van-form @submit="onSubmit">
          <van-field
            v-model="formInfo.phone_number	"
            type="tel"
            name="phone_number"
            label="手机号"
            placeholder="手机号"
            :rules="[{ required: true, message: '请填写手机号' }, {pattern: '^1(3|4|5|7|8)\d{9}$', message: '手机号格式不正确'}]"
          />
          <van-field
            v-model="formInfo.verify_code"
            center
            name="verify_code"
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          >
            <van-button
              slot="button"
              size="small"
              :type="button.type"
              :disabled="button.disabled"
              @click="sendSms"
            >{{ button.content }}</van-button>
          </van-field>
          <van-field
            v-model="formInfo.password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <van-row type="flex" align="center" style="height: 50px">
            <van-col span="10" offset="1">
              <span class="span-confirm">阅读并同意</span>
              <a class="a-confirm" href="#">《相关条款》</a>
            </van-col>
            <van-col span="1">
              <van-switch v-model="checked" size="15px" />
            </van-col>
          </van-row>

          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit" >注册</van-button>
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

export default {
  data() {
    return {
      button: {
        type: "primary",
        disabled: false,
        content: "发送验证码",
        totalTime: 60, // 短信发送间隔时间
        canClick: true //添加canClick
      },
      checked: false,
      loginUrl: "http://dao.wayen.tech/api/login/",
      smsUrl: "http://dao.wayen.tech/api/phone_verification_code/",
      registerUrl: "http://dao.wayen.tech/api/register/",
      formInfo: {
        phone_number: "",
        password: "",
        verify_code: ""
      }
    };
  },
  methods: {
    // 返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 发送验证码按钮倒计时
    countDown(btnObj) {
      if (btnObj.disabled) return;
      btnObj.disabled = true;
      btnObj.content = btnObj.totalTime + "s后重新发送";
      let clock = window.setInterval(() => {
        btnObj.totalTime--;
        btnObj.content = btnObj.totalTime + "s后重新发送";
        if (btnObj.totalTime < 0) {
          window.clearInterval(clock);
          btnObj.content = "重新发送验证码";
          btnObj.totalTime = 10;
          btnObj.disabled = false; //这里重新开启
        }
      }, 1000);
    },
    phoneNumVerify () {
      return /[1][3,4,5,6,7,8][0-9]{9}$/.test(this.formInfo.phone_number);
    },
    // 发送验证码
    sendSms() {
      var that = this;
      if (this.formInfo.phone_number !== "") {
        console.log("手机号不为空", this.formInfo.phone_number);
        axios
          .get(this.smsUrl + "?phone_number=" + this.formInfo.phone_number)
          .then(function(res) {
            if (res.data.success) {
              Toast({
                message: "发送成功",
                iconClass: "fa fa-check",
                duration: 2000
              });
              // 按钮倒计时
              that.countDown(that.button);
            } else {
              Toast({
                message: "发送失败" + " " + res.data.message,
                iconClass: "fa fa-exclamation-triangle",
                duration: 3000
              });
            }
          });
      }
    },
    // 提交注册信息
    onSubmit(values) {
      if (!this.checked) {
        Toast({
          message: "请确认《相关条款》",
          iconClass: "fa fa-exclamation"
        });
        return;
      }
      var that = this;
      axios
        .post(this.registerUrl, qs.stringify(values), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(function(response) {
          let data = response.data;
          console.log(data);
          if (data.success) {
            //token, username存储在本地的localStograge中
            var userInfo = {
              username: that.formInfo.phone_number
            };
            store.commit("set_token", data["token"]);
            store.commit("set_userinfo", userInfo);
            // console.log(store.state.token);
            // console.log(store.state.userInfo.username);
            Toast({
              message: "注册成功",
              iconClass: "fa fa-check"
            });
            that.onClickLeft();
          } else {
            var errorMsg = "";
            for (let key in data.message) {
              errorMsg += data.message[key]
            }
            Toast({
              message: "注册失败: " + errorMsg,
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
.span-confirm {
  color: #6a6a6e;
  font-size: 12px;
  line-height: 24px;
}
.a-confirm {
  color: #1989fa;
  font-size: 12px;
  line-height: 24px;
}
</style>
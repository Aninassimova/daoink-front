<template>
  <div>
    <!-- 朋友圈背景图 -->
    <van-row class="img-panel">
      <van-col span="22" offset="1">
        <van-row type="flex" justify="end">
          <i class="fa fa-camera" aria-hidden="true" style="color: white"></i>
        </van-row>
      </van-col>
    </van-row>
    <!-- 头像 -->
    <van-row style="margin-top: -35px;">
      <van-col span="22" offset="1">
        <van-row type="flex" justify="end">
          <img class="img-head" src="../../assets/images/logo.jpg" />
        </van-row>
      </van-col>
    </van-row>
    <!-- 内容条目 -->
    <br />
    <br />
    <van-row>
      <van-col span="22" offset="1">
        <van-row>
          <!-- 头像 -->
          <van-col span="4">
            <img class="img-headsmall" src="../../assets/images/logo.jpg" />
          </van-col>
          <!-- 内容 -->
          <van-col span="16">
            <!-- 用户名 -->
            <span class="span-name">小圈</span>
            <!-- 朋友圈正文 -->
            <p class="p-content">今天也是开心的一天呢！尽管生活总有遗憾，但是永远相信美好事情即将发生！</p>
            <!-- 图片内容 -->
            <img class="img-content" src="../../assets/images/background-2.png" />
            <!-- 发布时间 -->
            <span class="span-time">2020年3月9日 14:10</span>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.img-panel {
  padding-top: 5%;
  height: 170px;
  background-image: url(../../assets/images/background-1.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.img-head {
  height: 60px;
  width: 60px;
  border-radius: 0.4em;
}
.img-headsmall {
  height: 50px;
  width: 50px;
  border-radius: 0.4em;
}
.img-content {
  width: 100%;
}
.span-name {
  font-weight: bolder;
  color: #0f4c81;
}
.p-content {
  margin: 0px;
  font-weight: 400;
}
.span-time {
  font-size: 12px;
  color: #888888
}
</style>
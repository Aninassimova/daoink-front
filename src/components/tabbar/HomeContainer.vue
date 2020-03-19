<template>
  <div>
    <van-row>
      <van-col span="22" offset="1">
        <!-- 顶部轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item>
            <img class="img-swipe" src="../../assets/images/slider-2.png" />
          </van-swipe-item>
          <van-swipe-item>
            <img class="img-swipe" src="../../assets/images/slider-1.png" />
          </van-swipe-item>
        </van-swipe>

        <!-- 学校 -->
        <br>
        <van-row type="flex" justify="center">
          <van-col>
            <i class="fa fa-graduation-cap" aria-hidden="true" style="color: #6a6a6e"></i> 
            <strong> 西安理工大学</strong>
          </van-col>
        </van-row>

        <!-- 滚动通知 -->
        <br />
        <van-notice-bar color="#ffa41b" background="#ededed" left-icon="volume-o">通知内容，巴拉巴拉，巴拉巴拉</van-notice-bar>
      </van-col>
    </van-row>
    <!-- 今日课表 -->
    <br />
    <van-row>
      <van-col span="22" offset="1">
        <van-row type="flex" justify="space-between">
          <van-col>
            <strong>{{ nowWeek }}课表</strong>
          </van-col>
          <van-col>
            <span class="span-note">{{ nowDate }}</span>
          </van-col>
        </van-row>
        <!-- 若已设置课表 -->
        <van-tabs v-model="active">
          <van-tab title="早上">
            <van-collapse v-model="activeNames">
              <van-collapse-item title="8:00~10:00" name="1" value="通信原理">
                <van-row>
                  <van-icon name="location-o" />
                  <span>教学楼：教六302</span>
                  <br />
                  <van-icon name="underway-o" />
                  <span>周次：1-14周</span>
                  <br />
                  <van-icon name="contact" />
                  <span>授课老师：王老师</span>
                </van-row>
              </van-collapse-item>
              <van-collapse-item title="10:10~12:00" name="2" value="计算机网络">内容</van-collapse-item>
            </van-collapse>
          </van-tab>
          <van-tab title="下午">
            <van-collapse v-model="activeNames">
              <van-collapse-item title="14:10~16:00" name="1">内容</van-collapse-item>
              <van-collapse-item title="16:10~18:00" name="2">内容</van-collapse-item>
            </van-collapse>
          </van-tab>
          <van-tab title="晚上">
            <van-collapse v-model="activeNames">
              <van-collapse-item title="19:00~21:50" name="1">内容</van-collapse-item>
              <van-collapse-item title="10:10~12:00" name="2">内容</van-collapse-item>
            </van-collapse>
          </van-tab>
        </van-tabs>
        <!-- 今日新鲜事 -->
        <br />
        <van-row>
          <van-col>
            <strong>今日新鲜事</strong>
          </van-col>
        </van-row>
        <!-- 新闻列表 -->
        <div class="panel-news">
          <a href="#">
            <van-row type="flex" justify="space-between">
              <van-col>
                <img class="img-news" src="../../assets/images/head-roo.gif" />
              </van-col>
              <van-col>
                <p class="p-news">震惊！校内一男子竟然干出这种事情！！</p>
              </van-col>
            </van-row>
          </a>
          <van-divider />
          <a>
            <van-row type="flex" justify="space-between">
              <van-col>
                <img class="img-news" src="../../assets/images/head-roo.gif" />
              </van-col>
              <van-col>
                <p class="p-news">震惊！校内一男子竟然干出这种事情！！</p>
              </van-col>
            </van-row>
          </a>
          <van-divider />

          <a>
            <van-row type="flex" justify="space-between">
              <van-col>
                <img class="img-news" src="../../assets/images/head-roo.gif" />
              </van-col>
              <van-col>
                <p class="p-news">震惊！校内一男子竟然干出这种事情！！</p>
              </van-col>
            </van-row>
          </a>
          <van-divider />
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowDate: new Date().getMonth() + 1 + "月" + new Date().getDate() + "日",
      nowWeek: "周" + "日一二三四五六".charAt(new Date().getDay()),
      fileList: [],
      activeNames: ["1"], // 折叠面板
      active: ""
    };
  },
  methods: {
    // 格式化当前日期
    getNowdate: function() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDay() + 1;
      this.nowDate = month + "月" + day + "日";
    }
  }
};
</script>

<style scoped>
.my-swipe {
  line-height: 0px;
  border-radius: 0.5em;
  box-shadow: 0px 5px 5px #888888;
}
.van-swipe-item{
  line-height: 0px;
  border-radius: 0.5em;
  box-shadow: 0px 5px 5px #888888;
}
.img-swipe {
  width: 100%;
  /* border-radius: 0.5em;
  box-shadow: 0px 5px 5px #888888; */
}
.upload-panel {
  padding: 20px;
  border: 1px dashed #b8cacc;
  margin: 10px;
  background-color: #ffffff;
}
.span-title {
  font-size: 17px;
  font-weight: 600;
}
.span-note {
  font-size: 14px;
  color: #888888;
}
.img-news {
  width: 80px;
  height: 60px;
}
.p-news {
  font-size: 11px;
}
.panel-news {
  background-color: #ffffff;
  padding: 9px;
  border-radius: 0.5em;
}
</style>
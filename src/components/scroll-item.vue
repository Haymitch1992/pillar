<template>
  <div class="scroll-item" @click="changStatus">
    <!-- 文字显示 -->
    <div class="scroll-box" ref="scrollBox">
      <div class="scroll-text" v-if="showText">
        <!-- <p>{{ $store.state.alertInfo }}</p> -->
        <div
          class="alert-item"
          v-for="(item, index) in $store.state.alertInfo"
          :key="index"
        >
          <p class="alert-text">{{ item.status }}</p>
          <img :src="item.image_url" />
        </div>
      </div>
      <div class="scroll-text" v-if="showText">
        <!-- <p>{{ $store.state.alertInfo }}</p> -->
        <div
          class="alert-item"
          v-for="(item, index) in $store.state.alertInfo"
          :key="index"
        >
          <p class="alert-text">{{ item.status }}</p>
          <img :src="item.image_url" />
        </div>
      </div>
      <div class="scroll-text" v-if="!showText">
        <p>欢迎乘坐北京地铁11号线 Welcome to BeiJing Subway Line 11</p>
      </div>
      <div class="scroll-text" v-if="!showText">
        <p>欢迎乘坐北京地铁11号线 Welcome to BeiJing Subway Line 11</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'screen1',
  // 声明周期
  data() {
    return {
      timer: {},
      num: 0,
      showText: false
    };
  },
  watch: {
    '$store.state.alertInfo'(v1, v2) {
      // 监听 告警信息发生变化
      this.changStatus();
    }
  },
  methods: {
    changStatus() {
      this.num = 0;
      this.showText = true;
      this.start();
    },
    // width 2560px
    start() {
      let boxDom = this.$refs.scrollBox;
      // let num = 2560;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.num <= -2560) {
          // 判断如果是轮播图片的话 切换成字幕
          if (this.showText) {
            this.showText = false;
          }
          this.num = 0;
        } else {
          this.num = this.num - 2;
        }
        boxDom.style.left = this.num + 'px';
      }, 20);
    }
  },
  mounted() {
    this.start();
  }
};
</script>

<style lang="less" scoped>
.alert-item {
  width: 150px;
  display: inline-block;
  height: 200px;
  margin: 0 5px 0 5px;
  .alert-text {
    height: 60px;
    color: #fff;
    font-size: 26px;
    display: block;
    width: 150px;
    line-height: 60px;
    text-align: center;
  }
  img {
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 6px;
    margin-left: 20px;
  }
}
@import '../theme/index.less';
.scroll-item {
  height: 200px;
  width: 2560px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: @color-background;
  overflow: hidden;
}
.scroll-box {
  position: absolute;
  width: 5120px;
  left: 0;
}
.scroll-text {
  width: 2560px;
  text-align: left;
  float: left;
  p {
    font-size: 50px;
    line-height: 200px;
  }
}
@keyframes scrolltext {
  0% {
    left: 2560px;
  }
  100% {
    left: -1280px;
  }
}
</style>

<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
    </div>
    <div class="screen-content">
      <div class="station-title-box" v-show="$store.state.showItme == 1">
        <!-- 乘客画像 -->
        <h2 class="info-title info-title2">乘客画像</h2>
        <!-- 识别图 -->
        <div class="recognize-img">
          <img src="../assets/user-img.png" class="choseImg" alt="" />
          <img
            class="error-img"
            :src="$store.state.perceptionData.picture_path"
            alt=""
          />
        </div>
        <!-- 文字介绍 -->

        <div class="error-text">
          <p>性别：{{ $store.state.perceptionData.gender }}</p>
          <p>年龄：{{ $store.state.perceptionData.age }}</p>
        </div>
        <time-table></time-table>
      </div>

      <div class="station-title-box" v-show="$store.state.showItme == 2">
        <h2 class="info-title info-title2">乘客画像</h2>
        <echarts-item v-show="$store.state.showItme == 2"></echarts-item>
      </div>
      <div class="station-title-box" v-show="$store.state.showItme == 3">
        <h2 class="info-title">通告 Notice Board</h2>
        <p class="info-text">
          各位乘客：2022年3月21日19时至4月5日24时，11号线模式口站B1、B2口封闭,在此期间，请您合理安排出行。
        </p>
        <time-table></time-table>
      </div>
      <div class="station-img-box">
        <img
          class="map-img"
          v-if="$store.state.station == 11002 || $store.state.station == 11102"
          src="../assets/map-2.png"
          alt=""
        />
        <img class="map-img" v-else src="../assets/map-2-other.png" alt="" />
        <div class="ar-mark">
          <img src="../assets/ar-mark.png" class="bounceIn" alt="" />
          <p>AR疏散</p>
        </div>
        <!-- 首钢站 特殊显示 -->
      </div>
    </div>
    <socket-item></socket-item>
  </div>
</template>
<style lang="less" scoped>
@import '../theme/index.less';
@keyframes mymove {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.recognize-img {
  display: inline-block;
  width: 200px;
  height: 200px;
  vertical-align: top;
  position: relative;
}
.error-text {
  display: inline-block;
  font-size: 26px;
  width: 240px;
  height: 200px;
  color: #fff;
  padding-top: 40px;
  vertical-align: top;
  p {
    line-height: 60px;
  }
}
.station-title-box {
  position: relative;
}
.station-img-box {
  position: relative;
}
.error-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  display: inline-block;
  margin: 0 20px;
  vertical-align: top;
  position: absolute;
  left: 12px;
  top: 30px;
}
.choseImg {
  width: 200px;
  height: 200px;
  display: inline-block;
  animation: mymove 5s infinite;
  vertical-align: top;
}
.ar-mark {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 90px;
  text-align: center;
  img {
    width: 60px;
  }
  p {
    color: #fff;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
}
.info-text {
  font-size: 24px;
  line-height: 36px;
  padding: 0 10px;
  text-align: left;
}
.info-title {
  font-size: 20px;
  color: #fff;
  font-weight: normal;
  margin: 0;
  background: #345298;
  padding: 0 4px;
  line-height: 44px;
  border: 2px solid #3a3a5a;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 60px;
  text-align: left;
  padding-left: 20px;
}
.info-title.info-title2 {
  margin-bottom: 6px;
}
@-webkit-keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  10% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  30% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  40% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.bounceIn {
  animation: bounceIn 5s ease 0s infinite both;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import guidance from '../components/guidance4.vue';
import socketItem from '../components/socket-2.vue';
import echartsItem from '../components/echarts.item.vue';

export default defineComponent({
  name: 'screen4',
  components: {
    guidance,
    socketItem,
    echartsItem
  }
});
</script>

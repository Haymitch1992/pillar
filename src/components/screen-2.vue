<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
    </div>
    <div class="screen-content">
      <div class="station-title-box">
        <pis></pis>
      </div>
      <div class="station-img-box">
        <!-- 首钢站 特殊显示 -->
        <!-- <img
          class="map-img"
          v-if="
            ($store.state.station === '11004' &&
              $store.state.trainInfo.train1.train_state.arrival_state === 2) ||
            ($store.state.station === '11104' &&
              $store.state.trainInfo.train1.train_state.arrival_state === 2)
          "
          src="../assets/map-7.png"
          alt=""
        /> -->
        <img class="map-img" src="../assets/map-3.png" alt="" />
        <div class="ar-mark">
          <img src="../assets/ar-mark.png" class="bounceIn" alt="" />
          <p>AR线路图</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import guidance from '../components/guidance2.vue';
import pis from '../components/pis.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    guidance,
    pis
  }
});
</script>
<style lang="less" scoped>
@import '../theme/index.less';
.station-img-box {
  position: relative;
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

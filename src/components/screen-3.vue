<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
      <!-- 金安桥站显示 -->
      <guidance3
        v-if="$store.state.station == 11002 || $store.state.station == 11102"
      ></guidance3>
    </div>
    <div class="screen-content">
      <div class="station-title-box station-title-container">
        <!-- <img class="tag-img" src="../assets/tag.png" alt="" /> -->
        <span
          class="tag-box"
          v-for="item in currentStation"
          :key="item.station_id"
        >
          <p
            class="station-title-cn"
            v-if="item.station_id == $store.state.station"
          >
            {{ item.cn_name }}
          </p>
          <P
            v-if="item.station_id == $store.state.station"
            class="station-title-en"
          >
            {{ item.en_name }}
          </P>
        </span>
      </div>
      <!-- 车门防夹 模块-->
      <!-- <div class="door-model-container">
        <span>上车人数：{{ $store.state.carDoor.inPeople }}</span>
        <span>下车人数：{{ $store.state.carDoor.outPeople }}</span>
        <span>
          车门状态：{{ $store.state.carDoor.gap ? '异常' : '正常' }}
          <i :class="{ 'door-error': $store.state.carDoor.gap }"></i>
        </span>
      </div> -->
      <div class="station-img-box">
        <!-- 首钢 -->
        <video
          v-show="
            $store.state.station === '11004' || $store.state.station === '11104'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/4.mp4"
          muted="muted"
          loop="loop"
          autoplay="autoplay"
        ></video>
        <!-- 北辛安路 -->
        <video
          v-show="
            $store.state.station === '11003' || $store.state.station === '11103'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/3.mp4"
          muted="muted"
          loop="loop"
          autoplay="autoplay"
        ></video>
        <!-- 金安桥 -->
        <video
          v-show="
            $store.state.station === '11002' || $store.state.station === '11102'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/2.mp4"
          muted="muted"
          loop="loop"
          autoplay="autoplay"
        ></video>
        <!-- 金顶桥 -->
        <video
          v-show="
            $store.state.station === '11001' || $store.state.station === '11101'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/1.mp4"
          muted="muted"
          loop="loop"
          autoplay="autoplay"
        ></video>
        <div class="ar-mark">
          <img src="../assets/ar-mark.png" class="bounceIn" alt="" />
          <p>AR车站</p>
        </div>

        <!-- 首钢站 特殊显示 -->
        <!-- <img
          class="map-img"
           v-if="
            ($store.state.station === '11004' &&
              $store.state.trainInfo.train1.train_state.arrival_state === 2) ||
            ($store.state.station === '11104' &&
              $store.state.trainInfo.train1.train_state.arrival_state === 2)
          "
          src="../assets/map-6.png"
          alt=""
        /> -->
        <!-- <img class="map-img" v-else-if="showImg" src="../assets/map-1.png" alt="" />
        <img class="map-img"  v-else-if="!showImg" src="../assets/map-4.png" alt="" /> -->
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import guidance from '../components/guidance.vue';
import guidance3 from '../components/guidance3.vue';
export default defineComponent({
  components: {
    guidance,
    guidance3
  },
  data() {
    return {
      showImg: false
    };
  },
  computed: {
    currentStation() {
      let lineObj = [];
      if (this.$store.state.direction == 1) {
        // 下行
        lineObj = this.$store.state.stationInfo.down;
      } else {
        // 上行
        lineObj = this.$store.state.stationInfo.up;
      }
      return lineObj;
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.showImg = !this.showImg;
    // }, 10000);
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
  width: 74px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
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
.tag-img {
  display: inline-block;
  vertical-align: middle;
  margin-right: 30px;
}
.tag-box {
  display: inline-block;
  vertical-align: middle;
}
.station-title-box {
  padding-top: 46px;
  background: url('../assets/station-bg.jpg') no-repeat 0 0 !important;
}
.showVideo {
  display: block;
  width: 100%;
  height: 100%;
}
.station-title-container {
  height: 258px !important;
  padding-top: 60px;
}
.door-model-container {
  height: 50px;
  color: #fff;
  background: #17172c;
  border-radius: 10px;
  margin-top: 8px;
  line-height: 50px;
  span {
    margin: 0 20px;
    font-size: 18px;
  }
  i {
    width: 16px;
    height: 16px;
    background: #01be00;
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
    vertical-align: top;
    margin-top: 16px;
  }
  .door-error {
    background: #ff0000;
  }
}
</style>

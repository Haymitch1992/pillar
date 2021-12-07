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
      <div class="station-title-box">
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
      <div class="station-img-box">
        <!-- 首钢 -->
        <video
          v-show="
            $store.state.station === '11004' || $store.state.station === '11104'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/4.mp4"
          loop
          autoplay
        ></video>
        <!-- 北辛安路 -->
        <video
          v-show="
            $store.state.station === '11003' || $store.state.station === '11103'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/3.mp4"
          loop
          autoplay
        ></video>
        <!-- 金安桥 -->
        <video
          v-show="
            $store.state.station === '11002' || $store.state.station === '11102'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/2.mp4"
          loop
          autoplay
        ></video>
        <!-- 金顶桥 -->
        <video
          v-show="
            $store.state.station === '11001' || $store.state.station === '11101'
          "
          class="showVideo"
          src="http://172.51.215.158:8081/train/statics/video/1.mp4"
          loop
          autoplay
        ></video>
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
  padding-top: 70px;
  background: url('../assets/station-bg.jpg') no-repeat 0 0 !important;
}
.showVideo {
  display: block;
  width: 100%;
  height: 100%;
}
</style>

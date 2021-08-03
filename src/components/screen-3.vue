<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
      <guidance3></guidance3>
    </div>
    <div class="screen-content">
      <div class="station-title-box">
        <img class="tag-img" src="../assets/tag.png" alt="" />
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
        <img class="map-img" src="../assets/map-1.png" alt="" />
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
  padding-top: 90px;
}
</style>

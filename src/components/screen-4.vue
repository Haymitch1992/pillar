<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
    </div>
    <div class="screen-content">
      <div class="station-title-box">
        <!-- <pis></pis> -->
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
        <!-- 首钢站 特殊显示 -->
 
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../theme/index.less';
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
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import guidance from '../components/guidance4.vue';
export default defineComponent({
  name: 'screen4',
  components: {
    guidance
  }
});
</script>

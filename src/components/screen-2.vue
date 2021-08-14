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
        <img
          class="map-img"
          v-if="
            ($store.state.station === '11004' &&
              $store.state.trainInfo.train1.train_state.arrival_state === 2) ||
            ($store.state.station === '11104' &&
              $store.state.trainInfo.train1.train_state.arrival_state === 2)
          "
          src="../assets/map-7.png"
          alt=""
        />
        <img v-else class="map-img" src="../assets/map-3.png" alt="" />
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
</style>

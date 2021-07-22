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
        <img class="map-img" src="../assets/map-1.png" alt="" />
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

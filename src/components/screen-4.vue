<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
    </div>
    <div class="screen-content">
      <div class="station-title-box">
        <pis></pis>
      </div>
      <div class="station-img-box"></div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../theme/index.less';
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import pis from '../components/pis.vue';
import guidance from '../components/guidance4.vue';
export default defineComponent({
  name: 'screen4',
  components: {
    pis,
    guidance
  }
});
</script>

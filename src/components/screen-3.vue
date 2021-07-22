<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
      <guidance3></guidance3>
    </div>
    <div class="screen-content">
      <div class="station-title-box">
        <p class="station-title-cn">金安桥</p>
        <P class="station-title-en">JIN'ANQIAO</P>
      </div>
      <div class="station-img-box"></div>
    </div>
  </div>
</template>
<script lang="ts">
import guidance from '../components/guidance.vue';
import guidance3 from '../components/guidance3.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    guidance,
    guidance3
  }
});
</script>
<style lang="less" scoped>
@import '../theme/index.less';
</style>

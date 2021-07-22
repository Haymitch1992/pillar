<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
    </div>
    <div class="screen-content">
      <div class="station-title-box"></div>
      <div class="station-img-box"></div>
    </div>
  </div>
</template>
<script lang="ts">
import guidance from '../components/guidance2.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    guidance
  }
});
</script>
<style lang="less" scoped>
@import '../theme/index.less';
</style>

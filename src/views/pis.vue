<template>
  <!-- 新大楼车站pis屏幕  尺寸1920- 540-->
  <div class="pis-container">
    <div class="station-title-box">
      <pis></pis>
      <!-- 获取到站信息 -->
      <socket-item class="socket-item"></socket-item>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../theme/index.less';
.pis-container {
  width: 1920px;
  height: 540px;
  background: #17172c;
  overflow: hidden;
}
.socket-item {
  opacity: 0;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';
import pis from '../components/pis-door.vue';
import socketItem from '../components/socket.vue';
export default defineComponent({
  name: 'screen4',
  components: {
    pis,
    socketItem
  }
});
</script>

<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
      <guidance3></guidance3>
    </div>
    <div class="screen-content">
      <div class="station-title-box">
        <img class="tag-img" src="../assets/tag.png" alt="" />
        <span class="tag-box">
          <p class="station-title-cn">金安桥</p>
          <P class="station-title-en">JIN'ANQIAO</P>
        </span>
      </div>
      <div class="station-img-box">
        <img class="map-img" src="../assets/map-1.png" alt="" />
      </div>
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

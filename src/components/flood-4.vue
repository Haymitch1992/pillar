<template>
  <div class="emergency-box">
    <div class="emergency-container-2">
      <div class="emergency-item">
        <p>禁止入内请尽快出站</p>
        <p class="t2"></p>
        <p class="t2">
          No&nbsp;entry&nbsp;Please&nbsp;leave&nbsp;the&nbsp;station&nbsp;immediately
        </p>
        <img class="arrow-img" src="../assets/stop-icon.png" alt="" />
        <h2 class="danger-text warning-text">水灾红色预警</h2>
        <div class="danger-box waring-box">
          <div class="danger-line"></div>
          <span>10分钟后水位</span>
        </div>
        <wave class="wave"></wave>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../theme/wave.less';
.emergency-item {
  margin-top: 40px;
  color: #d40000;
  font-size: 60px;
  font-weight: bold;
  .t2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
}
</style>
<script>
import wave from '../components/wave.vue';
export default {
  components: {
    wave
  }
};
</script>

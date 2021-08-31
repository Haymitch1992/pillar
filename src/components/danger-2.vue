<template>
  <div class="emergency-box">
    <div class="emergency-container">
      <div class="emergency-item">
        <p class="tx1">安全出口</p>
        <p>
          <span class="tx2">
            <img src="../assets/people-left.png" alt="" />
            20m
          </span>
          <span class="tx3">Exit</span>
        </p>
        <img class="arrow-img" src="../assets/arrow-all-icon.png" alt="" />
        <h2 class="danger-text ">水灾红色预警</h2>
        <div class="danger-box ">
          <div class="danger-line"></div>
          <span>5分钟后水位</span>
        </div>

        <wave class="wave danger"></wave>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../theme/wave.less';
</style>
<script>
import wave from '../components/wave.vue';
export default {
  components: {
    wave
  }
};
</script>

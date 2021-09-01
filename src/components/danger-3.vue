<template>
  <div class="emergency-box">
    <div class="emergency-container">
      <div class="emergency-item">
        <p class="tx1">安全出口</p>
        <p>
          <span class="tx2">
            <img src="../assets/people-left.png" alt="" />
           4min
          </span>
          <span class="tx3">EXIT</span>
        </p>
        <arrow-right class="inverted"></arrow-right>

        <h2 class="danger-text">暴雨红色预警</h2>
        <h2 class="danger-text2">Red Rainstorm Warning</h2>
        <div class="danger-box">
          <div class="danger-line"></div>
          <span>预计10min后最大水位</span>
        </div>
        <img class="danger-person" src="../assets/danger-person.png" alt="" />
        <!-- <span class="current-wave">当前水位</span> -->
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
import arrowRight from '../components/arrow-left.vue';
export default {
  components: {
    wave,
    arrowRight
  }
};
</script>

<template>
  <!-- 引导 -->
  <div class="guidance">
    <span class="text-info">
      <p class="text-info-cn">出口</p>
      <p class="text-info-en">EXIT</p>
    </span>

    <span class="station-icon">A</span>
    <span class="station-icon">B</span>
    <span class="station-icon">C</span>
    <span>5m</span>
    <img class="person-img" src="../assets/distance-right.gif" alt="" />

    <img class="arrow-img" src="../assets/arrow-right.png" alt="" />
  </div>
</template>

<style lang="less" scoped>
@import '../theme/index.less';
.station-icon {
  color: #fff;
  font-size: 50px !important;
  background: #0b3b96;
  width: 59px;
  height: 59px;
  line-height: 59px;
  display: inline-block;
  border: 2px solid #fff;
  border-radius: 14px;
  position: relative;
  top: -3px;
  box-sizing: border-box;
}
</style>

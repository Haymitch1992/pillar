<template>
  <div class="emergency-box">
    <div class="emergency-container">
      <div class="emergency-item">
        <p>禁止入内</p>
        <p>请尽快出站</p>
        <p class="t2">No&nbsp;entry</p>
        <p class="t2">
          Please&nbsp;leave&nbsp;the&nbsp;station&nbsp;immediately
        </p>
        <img src="../assets/stop-icon.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="less" scoped>
.emergency-box {
  height: 1024px;
  position: relative;
  z-index: 1000;
  width: 640px;
  background: #000;
}
.emergency-container {
  border: 10px solid #d40000;
  background: rgba(255, 12, 0, 0.2);
  box-sizing: border-box;
  height: 1024px;
  width: 640px;
}
.emergency-item {
  margin-top: 200px;
  color: #d40000;
  font-size: 70px;
  font-weight: bold;
  .t2 {
    font-size: 30px;
    margin-bottom: 10px;
  }
}
</style>

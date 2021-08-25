<template>
  <div class="emergency-box">
    <div class="emergency-container">
      <div class="tips">
        <p class="text-1">当前区域为安全区域，请按引导标识有序疏散</p>
        <p class="text-2">
          The current area is safe, please evacuate orderly by guidence
        </p>
      </div>
      <div class="emergency-item">
        <p class="tx1">安全出口</p>
        <p>
          <span class="tx2">Exit</span>
          <span class="tx3">
            20m
            <img class="inverted" src="../assets/people-left.png" alt="" />
          </span>
        </p>
        <img src="../assets/arrow-left-icon.png" alt="" />
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
.tips {
  color: #fff;
  text-align: right;
  padding-right: 40px;
  .text-1 {
    font-size: 20px;
  }
  .text-2 {
    font-size: 12px;
  }
}
.inverted {
  transform: rotateY(180deg);
}

.emergency-container {
  border: 10px solid #00d900;
  background: rgba(0, 255, 0, 0.2);
  box-sizing: border-box;
  height: 1024px;
  width: 640px;
}
.tx1 {
  font-size: 100px;
}
.tx2 {
  font-size: 70px;
  display: inline-block;
  width: 200px;
  text-align: left;
}
.tx3 {
  font-size: 40px;
  display: inline-block;
  width: 200px;
  text-align: right;
  img {
    width: 24px;
  }
}
.emergency-item {
  margin-top: 200px;
  color: #00d900;
  font-weight: bold;
}
</style>

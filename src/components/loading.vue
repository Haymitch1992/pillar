<script setup lang="ts">
import { reactive, ref ,defineProps} from 'vue';
const propsObj = defineProps({
  loadgingText: String,
});
</script>

<template>
  <div class="container">
    <div class="emergency-box">
      <div class="emergency-container">
        <div class="emergency-item">
          <h2 class="quick-text">{{ propsObj.loadgingText }}</h2>
          <div class="progress candy" data-width="100%">
            <div class="progress-bar" style="width: 100%">
              <div class="progress-text">执行中</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.emergency-container {
  border: 10px solid rgb(45, 241, 38);
  background: rgba(16, 32, 16, 0.2);
  height: 540px;
  box-sizing: border-box;
  background-color: #17172c;
}
.quick-text {
  color: #fff;
  font-size: 80px;
}
.emergency-item {
  // margin-top: 300px;
  margin-top: 140px;
}
.progress {
  position: relative;
  z-index: 5;
  background: #484848;
  border: 10px solid #282828;
  border-radius: 30px;
  display: inline-block;
  box-shadow: 0 5px 17px rgba(40, 40, 40, 0.5),
    0 0 3px 1px rgba(40, 40, 40, 0.5) inset;
  width: 1200px;
  .progress-text {
    width: 100%;
    color: #fff;
    font-size: 24px;
  }
  .progress-bar {
    background-color: rgb(45, 241, 38);
    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3) inset;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.35) 25%,
      rgba(255, 255, 255, 0) 25%,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0.35) 75%,
      rgba(255, 255, 255, 0) 75%,
      rgba(255, 255, 255, 0)
    );
    background-repeat: repeat-x;
    background-size: 50px 50px;

    animation: candystripe 1s linear infinite;
    overflow: hidden;
    position: relative;
    z-index: 10;
    border-radius: 22px;
    line-height: 50px;

    transition: width 0.2s linear;
  }
  @keyframes candystripe {
    to {
      background-position: 50px 0;
    }
  }
}
</style>

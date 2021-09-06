<template>
  <div class="wave">
    <div class="wave-container" v-if="$store.state.emergencyState === 3"></div>
    <div
      class="wave-container wave-container2"
      v-if="$store.state.emergencyState === 4"
    ></div>
    <div class="wave-line"></div>
  </div>
</template>
<style>
.wave {
  width: 620px;
  height: 450px;
  overflow: hidden;
  position: relative;
}
.svg-container {
  display: block;
  position: absolute;
}
.cover-icon {
  width: 0;
  height: 0;
  position: absolute;
  top: 91px;
  border: 10px solid transparent;
  border-bottom: 32px solid rgba(150, 212, 227, 0.7);
  display: block;
  box-sizing: border-box;
}
.cover-icon-1 {
  left: 140px;
}
.cover-icon-2 {
  left: 340px;
}
.cover-icon-3 {
  left: 540px;
}
.wave-1 {
  left: -50px;
  top: 0;
}
.wave-2 {
  left: 150px;
  top: 0;
}
.wave-3 {
  left: 350px;
  top: 0;
}
.wave-4 {
  left: 550px;
  top: 0;
}
.wave-container {
  background: url('../assets/wave-2.png') repeat 0 0;
  width: 1020px;
  height: 450px;
  display: block;
  position: relative;
  top: 130px;
  animation: move 5s linear 1s infinite alternate both running;
}
.wave-container2 {
  background: url('../assets/wave-1.png') repeat 0 0;
}
@keyframes move {
  0% {
    left: 0px;
  }
  100% {
    left: -200px;
  }
}
.wave-line {
  width: 100%;
  height: 4px;
  position: absolute;
  bottom: 240px;
  border-bottom: 4px dashed #dba132;
}
</style>

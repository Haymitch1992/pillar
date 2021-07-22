<template>
  <div class="snow"></div>
</template>
<style lang="less" scoped>
@keyframes snow {
  0% {
    background-position: 0 0, 0 0;
  }
  100% {
    background-position: 500px 500px, 1000px 500px;
  }
}

.snow {
  width: 2560px;
  position: fixed;
  top: 0;
  height: 300px;
  background: url('../assets/snow1.png'), url('../assets/snow2.png');
  animation: 10s snow linear infinite;
}
</style>

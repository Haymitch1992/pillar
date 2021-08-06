<template>
  <div class="home">
    <screen4 class="item item-4"></screen4>
    <screen3 class="item item-3"></screen3>
    <screen2 class="item item-2"></screen2>
    <screen1 class="item item-1"></screen1>
    <scroll-item></scroll-item>
    <snow></snow>
    <socket-item class="socket-item"></socket-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import screen1 from '../components/screen-1.vue';
import screen2 from '../components/screen-2.vue';
import screen3 from '../components/screen-3.vue';
import screen4 from '../components/screen-4.vue';
import scrollItem from '../components/scroll-item.vue';
import snow from '../components/snow.vue';
import socketItem from '../components/socket.vue';

export default defineComponent({
  name: 'Home',
  components: {
    screen1,
    screen2,
    screen3,
    screen4,
    scrollItem,
    snow,
    socketItem
  }
});
</script>
<style lang="less" scoped>
.home {
  width: 2560px;
  height: 1024px;
  display: flex;
  position: relative;
  box-sizing: border-box;
  .item {
    width: 640px;
    box-sizing: border-box;
    background: #000;
  }
}
.socket-item {
  display: none;
}
</style>

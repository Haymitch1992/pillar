<template>
  <div class="home">
    <screen4
      v-show="$store.state.emergencyState == 1"
      class="item item-4"
    ></screen4>
    <screen3
      v-show="$store.state.emergencyState == 1"
      class="item item-3"
    ></screen3>
    <screen2
      v-show="$store.state.emergencyState == 1"
      class="item item-2"
    ></screen2>
    <screen1
      v-show="$store.state.emergencyState == 1"
      class="item item-1"
    ></screen1>
    <!-- 暴雨黄色预警 -->
    <warning1
      class="item item-4"
      v-show="$store.state.emergencyState == 3"
    ></warning1>
    <warning2
      class="item item-3"
      v-show="$store.state.emergencyState == 3"
    ></warning2>
    <warning3
      class="item item-2"
      v-show="$store.state.emergencyState == 3"
    ></warning3>
    <warning4
      class="item item-1"
      v-show="$store.state.emergencyState == 3"
    ></warning4>

    <!-- 暴雨红色预警 -->
    <danger1
      class="item item-4"
      v-show="$store.state.emergencyState == 4"
    ></danger1>
    <danger2
      class="item item-3"
      v-show="$store.state.emergencyState == 4"
    ></danger2>
    <danger3
      class="item item-2"
      v-show="$store.state.emergencyState == 4"
    ></danger3>
    <danger4
      class="item item-1"
      v-show="$store.state.emergencyState == 4"
    ></danger4>

    <!-- 紧急疏散 -->
    <emergency1
      class="item item-4"
      v-show="$store.state.emergencyState === 2"
    ></emergency1>
    <emergency2
      class="item item-3"
      v-show="$store.state.emergencyState === 2"
    ></emergency2>
    <emergency3
      class="item item-2"
      v-show="$store.state.emergencyState === 2"
    ></emergency3>
    <emergency4
      class="item item-1"
      v-show="$store.state.emergencyState === 2"
    ></emergency4>
    <scroll-item></scroll-item>
    <!-- 一键开关站 -->
    <quick-open-station
      class="item item-4"
      v-show="$store.state.emergencyState == 5"
    ></quick-open-station>
    <quick-open-station
      class="item item-3"
      v-show="$store.state.emergencyState == 5"
    ></quick-open-station>
    <quick-open-station
      class="item item-2"
      v-show="$store.state.emergencyState == 5"
    ></quick-open-station>
    <quick-open-station
      class="item item-1"
      v-show="$store.state.emergencyState == 5"
    ></quick-open-station>

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
import emergency1 from '../components/emergency-1.vue';
import emergency2 from '../components/emergency-2.vue';
import emergency4 from '../components/emergency-4.vue';
import emergency3 from '../components/emergency-3.vue';

import warning1 from '../components/flood-1.vue';
import warning2 from '../components/flood-2.vue';
import warning3 from '../components/flood-3.vue';
import warning4 from '../components/flood-4.vue';

import danger1 from '../components/danger-1.vue';
import danger2 from '../components/danger-2.vue';
import danger3 from '../components/danger-3.vue';
import danger4 from '../components/danger-4.vue';
import QuickOpenStation from '../components/quick-open-station.vue';

export default defineComponent({
  name: 'Home',
  components: {
    screen1,
    screen2,
    screen3,
    screen4,
    scrollItem,
    snow,
    socketItem,
    emergency1,
    emergency2,
    emergency3,
    emergency4,
    warning1,
    warning2,
    warning3,
    warning4,
    danger1,
    danger2,
    danger3,
    danger4,
    QuickOpenStation
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

<!-- 广告位 -->

<script setup lang="ts">
import { useStore } from 'vuex';
import { ref, watch } from 'vue';
// 通过ipad 终端统一控制状态 设置开
const num = ref(0);
let store = useStore();
watch([() => store.state.showItme], (newVal, oldVal) => {
  console.log(newVal, oldVal);
  num.value = parseInt(7 * Math.random());
}); // 监听
</script>

<template>
  <div class="container">
    <!-- 上午推荐 -->
    <img v-if="num === 0" src="../assets/banner-2.jpg" alt="" />
    <img v-if="num === 1" src="../assets/banner-1.jpg" alt="" />
    <img v-if="num === 2" src="../assets/banner-3.jpg" alt="" />
    <img v-if="num === 3" src="../assets/banner-4.jpg" alt="" />
    <img v-if="num === 4" src="../assets/banner-5.jpg" alt="" />
    <img v-if="num === 5" src="../assets/banner-6.jpg" alt="" />
    <img v-if="num === 6" src="../assets/banner-7.jpg" alt="" />
    <img v-if="num === 7" src="../assets/banner-8.jpg" alt="" />
    <img v-if="num === 8" src="../assets/banner-9.jpg" alt="" />
    <!-- 下午推荐咖啡 -->
  </div>
</template>

<style lang="less" scoped></style>

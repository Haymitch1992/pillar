<template>
  <div class="scroll-item">
    <!-- 文字显示 -->
    <div class="scroll-text">
      <p>
        欢迎乘坐北京地铁十一号线 欢迎乘坐北京地铁十一号线
        欢迎乘坐北京地铁十一号线
      </p>
    </div>
    <!-- 轮播成功进站显示 -->
    <div class="scroll-status">
      <div>
        <div class="passenger-img"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'screen1',
  // 声明周期
  // setup
  //
  setup() {
    console.log('1.开始创建组件');
    const data = reactive({
      listarr: ['a', 'b', 'c'],
      sel: '',
      selectFuc: (index: number) => {
        data.sel = data.listarr[index];
      }
    });
  }
});
</script>

<style lang="less" scoped>
@import '../theme/index.less';
.scroll-item {
  height: 200px;
  width: 2560px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: @color-background;
  overflow: hidden;
}
.scroll-text {
  position: absolute;
  animation: 10s scrolltext linear infinite;
  p {
    line-height: 200px;
    font-size: 60px;
    text-align: left;
  }
}
@keyframes scrolltext {
  0% {
    left: 2560px;
  }
  100% {
    left: -640px;
  }
}
</style>

<template>
  <div class="pis">
    <div class="pis-top">
      <span>开往 {{ data.direction }}方向</span>
      <span>{{ data.carType }}</span>
    </div>
    <div class="pis-line">
      <span>金顶街</span>
      <span>金安桥</span>
      <span>北辛安桥</span>
      <span>首钢</span>
    </div>
    <div class="car-status"></div>
    <div class="car-info">
      <span class="fl-info">1-2号车门未普通列车停靠点</span>
      <span class="fr-info">3-4号车门未快车停靠点</span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'pis',
  setup() {
    const data = reactive({
      direction: '首钢',
      carType: '快车'
    });
    return {
      data
    };
  }
});
</script>

<style lang="less" scoped>
.pis {
  color: #ffff;
  text-align: left;
  padding: 20px;
  .fl-info {
    float: left;
  }
  .fr-info {
    float: right;
  }
}
</style>

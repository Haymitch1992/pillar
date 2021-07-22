<template>
  <div>
    <div class="screen-top">
      <!-- 引导 -->
      <div>
        <img class="arrow-img" src="../assets/arrow-left.png" alt="" />
        <img class="person-img" src="../assets/distance-left.gif" alt="" />
        <span>10m</span>
        <img class="station-img" src="../assets/station-A.png" alt="" />
        <span class="text-info">
          <p class="text-info-cn">出口</p>
          <p class="text-info-en">EXIT</p>
        </span>
      </div>
    </div>
    <div class="screen-content">
      <div class="content-box"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  watch
} from 'vue';
interface DataProps {
  listarr: string[];
  sel: string;
  selectFuc: (index: number) => void;
}
export default defineComponent({
  name: 'screen1',
  // 声明周期
  // setup
  //
  setup() {
    console.log('1.开始创建组件');
    const overtext = ref('123');
    const data: DataProps = reactive({
      listarr: ['a', 'b', 'c'],
      sel: '',
      selectFuc: (index: number) => {
        data.sel = data.listarr[index];
      }
    });
    onBeforeMount(() => {
      console.log('2.组件挂在到页面之前');
    });
    onMounted(() => {
      console.log('3.组件挂在页面之后执行');
    });
    onBeforeUpdate(() => {
      console.log('4.组件更新执行');
    });
    onUpdated(() => {
      console.log('5.更新之后执行');
    });
    onBeforeUnmount(() => {
      console.log('6.在组件卸载之前');
    });
    watch([overtext, () => data.sel], (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });
    return {
      ...toRefs(data),
      overtext
    };
  }
});
</script>

<style lang="less" scoped>
@import '../theme/index.less';
</style>

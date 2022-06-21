<template>
  <div>
    <div class="screen-top">
      <guidance></guidance>
      <!-- 金安桥站显示 -->
      <guidance3
        v-if="$store.state.station == 11002 || $store.state.station == 11102"
      ></guidance3>
    </div>
    <div class="screen-content">
      <div class="content-box">
        <linebox></linebox>
        <div class="ar-mark">
          <img src="../assets/ar-mark.png" class="bounceIn" alt="" />
          <p>AR线路图</p>
        </div>
      </div>
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
import guidance from '../components/guidance-reverse.vue';
import guidance3 from '../components/guidance3-reverse.vue';
import linebox from '../components/line.vue';
interface DataProps {
  listarr: string[];
  sel: string;
  selectFuc: (index: number) => void;
}
export default defineComponent({
  name: 'screen1',
  components: {
    guidance,
    guidance3,
    linebox
  },
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
.content-box {
  position: reactive;
}
.ar-mark {
  position: absolute;
  right: 10px;
  bottom: 160px;
  width: 90px;
  text-align: center;
  img {
    width: 60px;
  }
  p {
    color: #fff;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
}
@-webkit-keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  0%,
  20%,
  40%,
  60%,
  80%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  10% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  30% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  40% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.bounceIn {
  animation: bounceIn 5s ease 0s infinite both;
}
</style>

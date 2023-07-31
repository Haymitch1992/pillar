<template>
  <div>
    <!-- 图片轮播区域 -->
    <div class="scroll-img">
      <!-- {{ pageData.imgList }} -->
      <div
        class="alert-img"
        v-for="(item, index) in pageData.imgList"
        :key="index"
        :style="{ left: item.left + 'px' }"
      >
        <img :src="'data:image/jpg;base64,' + item.url" alt="" />
        <p>{{ item.type }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { watch, ref, reactive, defineEmits, onMounted } from 'vue';
import { GETPERCEPTIONALARM } from '../services/user';

onMounted(() => {
  console.log('执行轮询');
  setInterval(() => {
    getInfo();
  }, 5000);
});
// 轮询请求手动召援
const getInfo = () => {
  GETPERCEPTIONALARM().then((res) => {
    // 有数据
    if (res.data.result && res.data.result.abnormal_info.length !== 0) {
      addList(res.data.result.abnormal_info);
    }
  });
};

const emit = defineEmits<{
  (event: 'changeStatus', str: boolean): void;
}>();
let store = useStore();
watch([() => store.state.pictureBase], (newVal, oldVal) => {
  console.log(newVal, oldVal);
  addList(store.state.pictureBase);
}); //

const pageData = reactive({
  imgList: []
});

let timer: any = '';

const addList = (obj: any) => {
  console.log('&&&&&&&&&&&&&&', obj.url);
  let num = findMax();
  if (obj.url) {
    // 根据后缀进行切割
    var typeStr = '';
    switch (obj.type) {
      case 'Model_goods_func_backpack':
        typeStr = '遗留';
        break;
      case 'Model_behavior_func_fallDown':
        typeStr = '倒地';
        break;
      default:
        typeStr = obj.type;
        break;
    }
    pageData.imgList.push({
      url: obj.url,
      type: typeStr,
      left: num + 100 * 0,
      showType: 'img'
    });
    start();
  }
};

const findMax = () => {
  let num = 0;
  // 空
  if (pageData.imgList.length === 0) {
    num = 2560;
  } else {
    pageData.imgList.forEach((item: any) => {
      if (item.left > num) {
        num = item.left;
      }
    });
  }
  if (num < 2460) {
    num = 2560;
  } else if (num >= 2460) {
    num = num + 100;
  }
  return num;
};

const start = () => {
  clearInterval(timer);
  console.log('启动轮播', pageData.imgList);
  emit('changeStatus', true);
  // this.$emit('changeStatus', true);
  timer = setInterval(() => {
    if (pageData.imgList.length === 0) {
      console.log('轮播终止');
      emit('changeStatus', false);
      // this.$emit('changeStatus', false);
      clearInterval(timer);
    }
    // 如果没有数据了 则结束定时任务
    pageData.imgList.forEach((item, index) => {
      // 如果小于零 清除 队列
      // 否则
      if (item.left < -100) {
        console.log(index);
        // 从数组中清除
        pageData.imgList.splice(index, 1);
      } else {
        item.left -= 2;
      }
    });
  }, 20);
};
</script>
<!-- <script>
// import { GETPERCEPTIONALARM } from '../services/user';

export default {

  mounted() {
    // 找到当前数组的最大值
    // 处理数据
    setInterval(() => {
      this.getInfo();
    }, 5000);
  },
  methods: {
    // 通过store 获取招援信息

    getInfo() {
      // GETPERCEPTIONALARM().then((res) => {
      //   // 有数据
      //   if (res.data.result && res.data.result.abnormal_info.length !== 0) {
      //     this.addList(res.data.result.abnormal_info);
      //   }
      // });
    },
    addList(arr) {},
    findMax() {},
    // 照片宽度 是 90px
    // 主定时器
    start() {

    }
  }
};
</script> -->
<style lang="less" scoped>
.scroll-img {
  width: 2560px;
  height: 100px;
  // display: none;
  position: fixed;
  top: 890px;
  text-align: left;
  background: #000;
  color: #fff;
  .alert-img {
    margin-top: 10px;
    width: 90px;
    height: 90px;
    position: absolute;
    top: -5px;
    img {
      display: block;
      position: absolute;
      width: 90px;
      height: 90px;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
    video {
      display: block;
      position: absolute;
      width: 90px;
      height: 90px;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
    p {
      text-align: center;
      font-size: 18px;
      position: absolute;
      top: 45px;
      width: 100%;
    }
  }
}
</style>

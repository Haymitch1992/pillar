<template>
  <div>
    <!-- 图片轮播区域 -->
    <div class="scroll-img">
      <div
        class="alert-img"
        v-for="(item, index) in imgList"
        :key="index"
        :style="{ left: item.left + 'px' }"
      >
        <video
          width="90"
          height="90"
          v-if="item.showType === 'video'"
          loop
          autoplay
          :src="item.url"
        ></video>
        <img v-if="item.showType === 'img'" :src="item.url" alt="" />
        <p>{{ item.type }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { GETPERCEPTIONALARM } from '../services/user';
export default {
  data() {
    return {
      timer: '',
      imgList: []
    };
  },
  mounted() {
    // 找到当前数组的最大值
    // 处理数据
    setInterval(() => {
      this.getInfo();
    }, 5000);
  },
  methods: {
    getInfo() {
      GETPERCEPTIONALARM().then((res) => {
        // 有数据
        if (res.data.result && res.data.result.abnormal_info.length !== 0) {
          this.addList(res.data.result.abnormal_info);
        }
      });
    },
    addList(arr) {
      let num = this.findMax();
      arr.forEach((item, index) => {
        if (item.image_url) {
          let showType = item.image_url.indexOf('mp4') === -1 ? 'img' : 'video';
          // 根据后缀进行切割
          this.imgList.push({
            url: item.image_url,
            type: item.type,
            left: num + 100 * index,
            showType: showType
          });
        }
      });
      this.start();
    },
    findMax() {
      let num = 0;
      // 空
      if (this.imgList.length === 0) {
        num = 2560;
      } else {
        this.imgList.forEach((item) => {
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
    },
    // 照片宽度 是 90px
    // 主定时器
    start() {
      clearInterval(this.timer);
      console.log('启动轮播');
      this.$emit('changeStatus', true);
      this.timer = setInterval(() => {
        if (this.imgList.length === 0) {
          console.log('轮播终止');
          this.$emit('changeStatus', false);
          clearInterval(this.timer);
        }
        // 如果没有数据了 则结束定时任务
        this.imgList.forEach((item, index) => {
          // 如果小于零 清除 队列
          // 否则
          if (item.left < -100) {
            console.log(index);
            // 从数组中清除
            this.imgList.splice(index, 1);
          } else {
            item.left -= 2;
          }
        });
      }, 20);
    }
  }
};
</script>
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

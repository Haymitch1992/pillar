<template>
  <div class="scroll-item">
    <!-- 图片轮播 -->
    <div class="scroll-box" ref="scrollBox2" v-show="!showText">
      <div class="scroll-text">
        <p>
          {{ base_info.cn }}
          {{ base_info.en }}
        </p>
      </div>
      <div class="scroll-text">
        <p>
          {{ base_info.cn }}
          {{ base_info.en }}
        </p>
      </div>
    </div>
    <!-- 文字显示 -->
    <div class="scroll-box" ref="scrollBox" v-show="showText">
      <div class="scroll-text">
        <!-- <p>{{ $store.state.alertInfo }}</p> -->
        <div class="img-top">
          <div
            class="alert-item"
            v-for="(item, index) in $store.state.alertInfo"
            :key="index"
          >
            <img :src="item.image_url" />
            <p class="alert-text">{{ item.type }}</p>
          </div>
        </div>
        <div class="img-bottom">
          {{ base_info.cn }}
          {{ base_info.en }}
        </div>
      </div>
      <div class="scroll-text">
        <!-- <p>{{ $store.state.alertInfo }}</p> -->
        <div class="img-top">
          <div
            class="alert-item"
            v-for="(item, index) in $store.state.alertInfo"
            :key="index"
          >
            <img :src="item.image_url" />
            <p class="alert-text">{{ item.type }}</p>
          </div>
        </div>
        <div class="img-bottom">
          {{ base_info.cn }}
          {{ base_info.en }}
        </div>
      </div>
    </div>
    <!-- 图片的轮播 -->
    <scrollImg @changeStatus="changeStatus" v-show="showText"></scrollImg>
  </div>
</template>

<script>
import { GETHOTSPOTINFO } from '../services/user';
import scrollImg from '../components/scrollImg.vue';
export default {
  name: 'screen1',
  components: {
    scrollImg
  },
  // 声明周期
  data() {
    return {
      timer: {},
      num: 0,
      showText: false,
      base_info: {
        cn: '',
        en: ''
      },
      timer2: '',
      timeLength: 6000
    };
  },

  methods: {
    changeStatus(val) {
      this.showText = val;
    },
    getHotSpotInfo() {
      GETHOTSPOTINFO().then(this.afterGetInfo);
    },
    // width 2560px
    start() {
      let boxDom = this.$refs.scrollBox;
      let boxDom2 = this.$refs.scrollBox2;
      // let num = 2560;
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.num < -2560) {
          this.num = 0;
        } else {
          this.num = this.num - 2;
        }
        boxDom.style.left = this.num + 'px';
        boxDom2.style.left = this.num + 'px';
      }, 20);
    },
    afterGetInfo(res) {
      if (res.data.code === 200) {
        this.base_info = res.data.result[0].base_info;
      }
    }
  },
  mounted() {
    this.start();
    this.getHotSpotInfo();
  }
};
</script>

<style lang="less" scoped>
.img-top {
  height: 110px;
  display: block;
}
.img-bottom {
  height: 30px;
  display: block;
  font-size: 26px;
  line-height: 26px;
}
.alert-item {
  width: 130px;
  display: inline-block;
  height: 140px;
  margin: 0 5px 0 5px;
  position: relative;
  .alert-text {
    height: 40px;
    color: #fff;
    font-size: 18px;
    display: block;
    width: 150px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 40px;
    left: 0px;
  }
  img {
    display: block;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    margin-left: 30px;
    margin-top: 10px;
  }
}
@import '../theme/index.less';
.scroll-item {
  height: 140px;
  width: 2560px;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: @color-background;
  overflow: hidden;
}
.scroll-box {
  position: absolute;
  width: 5120px;
  left: 0;
}
.scroll-text {
  width: 2560px;
  text-align: left;
  float: left;
  p {
    font-size: 36px;
    line-height: 140px;
  }
}
@keyframes scrolltext {
  0% {
    left: 2560px;
  }
  100% {
    left: -1280px;
  }
}
</style>

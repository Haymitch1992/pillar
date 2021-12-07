<template>
  <div class="pis" v-if="store.state.emergencyState === 1">
    <div class="pis-top">
      <span>
        <span class="pis-text-line">开往</span>
        <span class="current pis-text-line">
          {{ direction }}
        </span>
        <span class="pis-text-line">方向</span>
        <span class="pis-text-line" style="font-size: 40px; margin-left: 40px">
          To
        </span>
        <span class="current pis-text-line" style="font-size: 40px">
          {{ directionEn }}
        </span>
      </span>
      <span class="manche">
        <p class="cn">普通车</p>
        <p>Local</p>
      </span>
    </div>
    <div v-if="!showStatus">
      <div class="tips-line">
        <!-- 下行不显示 -->
        <span class="current tips"></span>
      </div>
      <div class="pis-line">
        <i v-for="(item, index) in lineInfo" :key="item.station_id">
          <span
            class="pis-line-item"
            :class="item.station_id == store.state.station ? 'active' : ''"
            :title="item.station_id"
          >
            <p>{{ item.cn_name }}</p>
            <p class="en">{{ item.en_name }}</p>
            <p class="daozhan">
              预计到站{{
                store.state.trainInfo.train2.train_state.arrival_time
              }}分钟
            </p>
          </span>
          <img
            v-if="index < lineInfo.length - 1"
            src="../assets/next-1.png"
            alt=""
          />
        </i>
      </div>
    </div>
    <!-- 10s秒间隔切换 -->
    <div v-if="showStatus">
      <div class="pis-background">
        <img src="../assets/pis-line.png" alt="" />
      </div>
      <div class="pis-car car-status animate__animated animate__fadeInLeft">
        <div class="pis-car-box">
          <div class="pis-car-status">
            <p>24.5℃</p>
            <div
              class="crowding-line"
              :class="
                'crowding' +
                store.state.trainInfo.train1.carriage_state[0].crowding_degree
              "
            ></div>
          </div>
          <div class="pis-car-status">
            <p>24.5℃</p>
            <div
              class="crowding-line"
              :class="
                'crowding' +
                store.state.trainInfo.train1.carriage_state[1].crowding_degree
              "
            ></div>
          </div>
        </div>
        <img src="../assets/pis-car.png" alt="" />
      </div>
    </div>
  </div>
  <div class="danger" v-if="store.state.emergencyState === 4">
    <div class="dnager-box">
      <h2 class="danger-text">{{ dangerText }}</h2>
      <h2 class="danger-en">
        {{ dangerEn }}
      </h2>
    </div>
  </div>
  <loading
    :loadgingText="loadgingText"
    v-if="store.state.emergencyState === 5"
  ></loading>
</template>
<script setup lang="ts">
import 'animate.css';
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import loading from '../components/loading.vue';
let store = useStore();

const dangerText = ref('暴雨红色预警，请勿停留');
const dangerEn = ref('Red Rainstorm Warning, No Loitering!');
const loadgingText = ref('已启动一键开关站流程,请做好开关站保障工作');
// 切换间隔 10s 还是希望长时间显示
// const timer = setInterval(() => {
//   if (new Date().getMinutes() % 2 === 0) {
//     showStatus.value = false;
//   } else {
//     showStatus.value = true;
//   }
// }, 1000 * 1);
const carType = ref('快车');
const showStatus = ref(false);
const direction = computed(() => {
  return store.state.direction == 1 ? '模式口' : '新首钢';
});
const directionEn = computed(() => {
  return store.state.direction == 1 ? 'Moshi Kou' : 'Xin Shougang';
});
const lineInfo = computed(() => {
  let lineObj: any = [];
  if (store.state.direction == 1) {
    // 下行
    lineObj = store.state.stationInfo.down;
  } else {
    // 上行
    lineObj = store.state.stationInfo.up;
  }
  return lineObj;
});
</script>

<style lang="less" scoped>
.pis-car-status {
  display: inline-block;
  width: 340px;
  margin: 0 18px;
  font-size: 40px;
}
.pis-car-box {
  text-align: center;
  padding-bottom: 30px;
}
.crowding-line {
  width: 340px;
  height: 20px;
  background: #ddd;
  border-radius: 10px;
}

.crowding-line.crowding1 {
  background: #01be00;
}
.crowding-line.crowding2 {
  background: #e28b00;
}
.crowding-line.crowding3 {
  background: #541911;
}
.crowding-line.crowding4 {
  background: #c40001;
}
.pis-background {
  width: 1920px;
  display: block;
  position: absolute;
  top: 280px;
  left: 0;
  img {
    width: 1920px;
  }
}
.pis-car {
  text-align: center;
}
.dnager-box {
  border: 16px solid #df2f3b;
  width: 100%;
  height: 540px;
  box-sizing: border-box;
  background-color: #17172c;
  h2 {
    color: #df2f3b;
    padding: 0;
    margin: 0;
  }
  .danger-text {
    font-size: 120px;
    margin-top: 130px;
  }
  .danger-en {
    font-size: 80px;
  }
}

.pis-top {
  font-size: 54px;
  margin-bottom: 98px;
}
.pis-text-line {
  display: inline-block;
  line-height: 70px;
}
.pis-text-p {
  font-size: 34px;
}
.men-info {
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: -4px;
  p {
    font-size: 14px;
  }
}
.men-img {
  margin: 0 10px !important;
  vertical-align: top;
  width: 20px;
}
.men-num {
  font-size: 24px;
  vertical-align: top;
}
.active {
  color: #fff;
  p {
    font-size: 120px;
  }
}
.pis {
  color: #ddd;
  text-align: left;
  padding: 40px 60px;
  font-size: 20px;
  .current {
    color: #fc9a6a;
    margin: 0 20px;
  }
  .kauiche {
    background: #0070ac;
    color: #fff;
    display: block;
    border-radius: 10px;
    font-size: 22px;
    float: right;
    width: 100px;
    text-align: center;
    padding: 2px 0;
    p {
      font-size: 12px;
      line-height: 20px;
    }
    .cn {
      font-size: 16px;
    }
  }
  .manche {
    background: #ed9166;
    color: #fff;
    display: block;
    border-radius: 10px;
    font-size: 22px;
    padding: 8px 40px;
    float: right;
    width: 100px;
    text-align: center;
    p {
      font-size: 24px;
    }
    .cn {
      font-size: 32px;
    }
  }
  .pis-line {
    text-align: center;
    width: 100%;
    font-size: 100px;
    padding-bottom: 20px;
    display: inline-block;
    width: 1800px;
    i {
      font-style: normal;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .en {
      font-size: 40px;
    }
    margin-top: 20px;
    img {
      display: inline-block;
      margin: 0 20px;
      vertical-align: middle;
      width: 80px;
    }
  }
  .pis-line-item {
    position: relative;
    .daozhan {
      font-size: 14px;
      background: #0d3d62;
      position: absolute;
      top: -66px;
      left: calc(50% - 160px);
      display: inline-block;
      width: 320px;
      padding: 8px 0;
      z-index: 10;
      display: none;
      font-size: 40px;
    }
    .daozhan::after {
      content: '';
      display: block;
      position: absolute;
      top: 64px;
      left: 148px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 20px solid #0d3d62;
      z-index: 1;
    }
  }
  .pis-line-item.active .daozhan {
    display: block;
  }
  .car-status {
    text-align: center;
    padding-bottom: 10px;
    width: 1400px;
    margin: 0 auto;
    display: block;
  }
  .tips-line {
    padding-top: 4px;
  }
  .tips {
    margin-left: 322px;
    font-size: 16px;
  }
}
</style>

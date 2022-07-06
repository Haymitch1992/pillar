<template>
  <div class="ipss-container">
    <div v-if="store.state.emergencyState === 1">
      <!-- 运营状态 -->
      <div class="top-box">
        <div class="current-time">{{ currentTime }}</div>
      </div>
      <div class="content-box">
        <div class="info">
          <ul class="info-ul">
            <li class="info-item line-11-theme">
              <div class="middle-text">
                <p class="strong-text">开往</p>
                <p class="small-text">to</p>
              </div>
              <div class="middle-text">
                <p class="strong-text color-1">{{ direction }}</p>
                <p class="small-text color-1">{{ directionEn }}</p>
              </div>
            </li>
            <li class="info-item">
              <div class="middle-text">
                <p class="strong-text">本站</p>
                <p class="small-text">This station</p>
              </div>
              <div class="middle-text">
                <p class="strong-text color-2">{{ currentStation.cn }}</p>
                <p class="small-text color-2">{{ currentStation.en }}</p>
              </div>
            </li>
            <li class="info-item">
              <div class="middle-text">
                <p class="strong-text">本次</p>
                <p class="small-text">This train</p>
              </div>
              <div class="middle-text">
                <p class="strong-text color-2">
                  <span
                    v-if="
                      $store.state.trainInfo.train2.train_state.arrival_state ==
                      2
                    "
                  >
                    {{
                      $store.state.trainInfo.train2.train_state.arrival_time
                    }}分钟
                  </span>
                  <span
                    v-if="
                      $store.state.trainInfo.train2.train_state.arrival_state ==
                      1
                    "
                  >
                    即将到达
                  </span>
                  <span
                    v-if="
                      $store.state.trainInfo.train2.train_state.arrival_state ==
                      0
                    "
                  >
                    已到达
                  </span>
                </p>
                <p class="small-text color-2">
                  <span
                    v-if="
                      $store.state.trainInfo.train2.train_state.arrival_state ==
                      2
                    "
                  >
                    {{
                      $store.state.trainInfo.train2.train_state.arrival_time
                    }}min
                  </span>
                  <span
                    v-if="
                      $store.state.trainInfo.train2.train_state.arrival_state ==
                      1
                    "
                  >
                    arriving
                  </span>
                  <span
                    v-if="
                      $store.state.trainInfo.train2.train_state.arrival_state ==
                      0
                    "
                  >
                    arrived
                  </span>
                </p>
              </div>
            </li>
            <li class="info-item line-empty-theme">
              <div class="middle-text">
                <p class="strong-text">下次</p>
                <p class="small-text">This train</p>
              </div>
              <div class="middle-text">
                <p class="strong-text">
                  {{
                    $store.state.trainInfo.train2.train_state.arrival_time + 5
                  }}分钟
                </p>
                <p class="small-text">
                  {{
                    $store.state.trainInfo.train2.train_state.arrival_time + 5
                  }}Min
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="train">
          <!-- {{ lineInfo }} -->
          <!-- 线路 -->
          <div v-if="store.state.carDoor.gap === 0">
            <div class="line-box">
              <!-- 路网 -->
              <div class="line">
                <span
                  v-for="item in lineInfo"
                  :key="item.station_id"
                  :class="item.stationStatus ? 'active' : ''"
                >
                  <!-- {{ item.stationStatus }} -->
                </span>
              </div>
              <span
                class="point"
                :class="[
                  `point-${index + 1}`,
                  item.stationStatus ? 'active-2' : '',
                  item.station_id == $store.state.station ? 'active' : ''
                ]"
                v-for="(item, index) in lineInfo"
                :key="item.station_id"
              >
                <span v-if="index === 0">起</span>
                <span v-if="item.transfer_line.length !== 0">
                  <img
                    class="center-img"
                    src="../assets/transfer-station.png"
                    alt=""
                  />
                </span>
                <span v-if="index === 3">终</span>
              </span>

              <span
                class="station station-1"
                :class="[
                  `station-${index + 1}`,
                  item.station_id == $store.state.station ? 'active' : ''
                ]"
                v-for="(item, index) in lineInfo"
                :key="item.station_id"
              >
                <p>{{ item.cn_name }}</p>
                <p class="small-text">{{ item.en_name }}</p>
                <span class="transfer-item" v-if="item.transfer_line.length">
                  <span class="tramsfer-station tramsfer-station-1">S1</span>
                  <span class="tramsfer-station-3"></span>
                </span>
                <span
                  v-if="item.station_id == $store.state.station"
                  class="current-train-item"
                  :class="
                    $store.state.trainInfo.train2.train_state.arrival_state ==
                      0 ||
                    $store.state.trainInfo.train2.train_state.arrival_state == 1
                      ? 'current-train-item-1'
                      : `text-${$store.state.trainInfo.train2.train_state.arrival_time}`
                  "
                >
                  <!-- 本次列车的位置 -->
                  <p>
                    <span
                      v-if="
                        $store.state.trainInfo.train2.train_state
                          .arrival_state == 2
                      "
                    >
                      {{
                        $store.state.trainInfo.train2.train_state.arrival_time
                      }}分钟
                    </span>
                    <span
                      v-if="
                        $store.state.trainInfo.train2.train_state
                          .arrival_state == 1
                      "
                    >
                      即将到达
                    </span>
                    <span
                      v-if="
                        $store.state.trainInfo.train2.train_state
                          .arrival_state == 0
                      "
                    >
                      已到达
                    </span>
                  </p>
                  <span class="current-train">
                    <img
                      class="center-img"
                      src="../assets/current-train.png"
                      alt=""
                    />
                  </span>

                  <!-- 即将到站 -->
                  <!-- 已经到站 -->
                </span>
              </span>
              <!-- 站点 -->
              <!-- 当前车辆位置 -->
            </div>

            <!-- 列车 -->
            <div class="train-box">
              <span class="pos-text-1">本次列车 This train</span>
              <span class="pos-text-2" :class="`pos-door-${doorType}`">
                <i class="icon-here"></i>

                您在此 You're here
              </span>
              <!-- 第一节 -->
              <img src="../assets/train3.png" alt="" />
              <!-- 第二节 -->
              <img src="../assets/train2.png" alt="" />
              <!-- 第三节 -->

              <img
                v-if="
                  $store.state.trainInfo.train2.carriage_state[0]
                    .crowding_degree == 0
                "
                src="../assets/train-1-1.png"
                alt=""
              />
              <img
                v-if="
                  $store.state.trainInfo.train2.carriage_state[0]
                    .crowding_degree == 1
                "
                src="../assets/train-1-2.png"
                alt=""
              />
              <img
                v-if="
                  $store.state.trainInfo.train2.carriage_state[0]
                    .crowding_degree == 2
                "
                src="../assets/train-1-3.png"
                alt=""
              />
            </div>
          </div>
          <div v-if="store.state.carDoor.gap === 1">
            <p class="jiaren-text">车门夹人</p>
            <span class="pos-text-2" :class="`pos-door-${doorType}`">
              <i class="icon-here"></i>
              您在此 You're here
            </span>
            <div class="jiaren-img-box">
              <img src="../assets/jiaren-1.png" alt="" />
              <span class="door door-1">
                <span>6</span>
                <span>6</span>
              </span>
              <span class="door door-2">
                <span>5</span>
                <span>5</span>
              </span>
              <span class="door door-3">
                <span>4</span>
                <span>4</span>
              </span>
              <span class="door door-4">
                <span>3</span>
                <span>3</span>
              </span>
              <span class="door door-5 active">
                <span>2</span>
                <span>2</span>
              </span>
              <span class="door door-6 active">
                <span>1</span>
                <span>1</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="store.state.emergencyState === 4" class="danger-box">
      <!-- 应急 -->
      <img src="../assets/pis-danger.png" alt="" />
      <div class="left-arrow">
        <img src="../assets/pis-arrow-3.png" class="arrow-1" alt="" />
        <img src="../assets/pis-arrow-2.png" class="arrow-2" alt="" />
        <img src="../assets/pis-arrow-1.png" class="arrow-3" alt="" />
      </div>
      <div class="left-arrow rotate90">
        <img src="../assets/pis-arrow-3.png" class="arrow-1" alt="" />
        <img src="../assets/pis-arrow-2.png" class="arrow-2" alt="" />
        <img src="../assets/pis-arrow-1.png" class="arrow-3" alt="" />
      </div>
      <span class="pos-text-3" :class="`pos-door-${doorType}`">
        <i class="icon-here"></i>
        您在此 You're here
      </span>
    </div>
    <div v-if="store.state.emergencyState === 5">
      <loading :loadgingText="loadgingText"></loading>
    </div>
    <!-- 获取到站信息 -->
    <socket-item class="socket-item"></socket-item>

    <!-- 正常 -->
    <!-- 夹人 -->

    <!-- 科普状态 -->
  </div>
</template>

<style lang="less" scoped>
.danger-box {
  position: relative;
  .left-arrow {
    position: absolute;
    right: 180px;
    top: 280px;
    display: block;
    animation: shanguang 2s linear 1s infinite alternate both running;
    @keyframes shanguang {
      0% {
        //start css
        opacity: 1;
      }
      25% {
        //center css
        opacity: 0;
      }
      50% {
        //center css
        opacity: 1;
      }
      75% {
        //center css
        opacity: 0;
      }
      100% {
        //end css
        opacity: 1;
      }
    }
    img {
      display: block;
      width: 60px;
    }
    .arrow-1 {
      margin-left: 120px;
    }
    .arrow-2 {
      margin-left: 60px;
    }
    .arrow-3 {
      margin-left: 0px;
    }
  }
  .rotate90 {
    transform: rotate(270deg);
    right: 1120px;
  }
}
.door {
  position: absolute;
  bottom: 18px;
  span {
    width: 34px;
    height: 75px;
    background-color: #fff;
    margin: 0 2px;
    display: inline-block;
    line-height: 75px;
    font-size: 24px;
    border-radius: 4px;
  }
}
.door-1 {
  left: 210px;
}
.door-2 {
  left: 350px;
}

.door-3 {
  left: 540px;
}
.door-4 {
  left: 750px;
}

.door-5 {
  left: 920px;
}
.door-6 {
  left: 1090px;
}
.door.active span {
  background-color: #ff0000;
  color: #fff;
  animation: test 0.5s linear 2s infinite normal;
}

@keyframes test {
  0% {
    background-color: #fff;
    color: #333;
  }
  30% {
    background-color: #ff0000;
    color: #fff;
  }
  50% {
    background-color: #ff0000;
    color: #fff;
  }
  100% {
    background-color: #fff;
    color: #333;
  }
}
.jiaren-text {
  padding-top: 100px;
  line-height: 100px;
  font-size: 40px;
}
.jiaren-img-box {
  padding-top: 20px;
  position: relative;
}
.center-img {
  width: 36px;
  padding-top: 14px;
  margin: 0 auto;
}
.train-box {
  padding-top: 310px;
  position: relative;
  img {
    margin: 0 6px;
  }
  .pos-text-1 {
    position: absolute;
    left: 100px;
    top: 274px;
    font-size: 24px;
  }
}
.pos-text-2 {
  position: absolute;
  right: 260px;
  top: 274px;
  font-size: 24px;
  .icon-here {
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 10px solid #ee796b;
    position: relative;
    top: 4px;
    margin-right: 8px;
  }
}
.pos-text-3 {
  position: absolute;
  top: 480px;
  font-size: 24px;
  color: #fff;
  .icon-here {
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom: 10px solid #ee796b;
    position: relative;
    top: -4px;
    margin-right: 8px;
  }
}
.pos-door-1 {
  right: 40px;
}
.pos-door-2 {
  right: 260px;
}
.line-box {
  position: relative;
  top: 80px;
  width: 1200px;
  display: block;
  margin: 0 auto;
}
.tramsfer-station {
  height: 32px;
  line-height: 32px;
  width: 32px;
  display: block;
  margin: 0 auto;
  color: #fff;
  font-size: 22px;
  border-radius: 8px;
  text-align: center;
}
.current-train-item {
  width: 140px;
  position: absolute;
  left: -140px;
  top: -140px;
  p {
    font-size: 28px !important;
    line-height: 40px;
  }
  .current-train {
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%;
    margin: 20px auto 0;
    background-color: #32c17b;
    border: 5px solid #fff;
    box-shadow: 0px 4px 12px 0px rgba(74, 223, 69, 0.6);
    line-height: 60px;
    font-size: 36px;
    color: #fff;
  }
}

.current-train-item.text-5 {
  left: -100px;
  transition: all 1s;
}
.current-train-item.text-4 {
  left: -60px;
  transition: all 1s;
}
.current-train-item.text-3 {
  left: -20px;
  transition: all 1s;
}
.current-train-item.text-2 {
  left: 20px;
  transition: all 1s;
}
.current-train-item.text-1 {
  left: 60px;
  transition: all 1s;
}
.current-train-item.text-0 {
  left: 77px;
  transition: all 1s;
}
.current-train-item-1 {
  left: 77px;
  top: -140px;
  transition: all 1s;
}
.transfer-item {
  width: 100px;
  position: absolute;
  top: 10px;
  left: 180px;
  text-align: center;
}
.tramsfer-station-1 {
  background-color: #b35a20;
}
.tramsfer-station-2 {
  background-color: #d19700;
}
// .tramsfer-station-3 {
//   display: block;
//   width: 0;
//   height: 0;
//   margin: 0 auto;
//   border: 10px solid transparent;
//   border-bottom: 10px solid #000;
// }
.station {
  position: absolute;
  left: 0;
  top: 80px;
  width: 300px;
  text-align: center;
  p {
    font-size: 36px;
    margin: 0;
    padding: 0;
  }
  .small-text {
    font-size: 18px;
  }
}
.station-1 {
  left: 136px;
}
.station-2 {
  left: 460px;
}

.station-3 {
  left: 754px;
}
.station-4 {
  left: 1050px;
}
.active {
  color: #32c17b;
}

.line {
  width: 1200px;
  height: 22px;
  // background-color: #ee796b;
  position: absolute;
  top: 20px;
  left: 0px;
  span {
    width: 300px;
    height: 22px;
    display: inline-block;
    background-color: #eee;
    box-sizing: border-box;
  }
  .active {
    background-color: #ee796b;
  }
}
.point {
  width: 58px;
  height: 58px;
  display: block;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #ddd;
  border: 5px solid #fff;
  box-shadow: 0px 4px 12px 0px rgba(24, 22, 22, 0.6);
  line-height: 58px;
  font-size: 36px;
  color: #fff;
}
.active.point {
  background-color: #32c17b;
  box-shadow: 0px 4px 12px 0px rgba(74, 223, 69, 0.6);
}
.active-2.point {
  background-color: #ee796b;
  box-shadow: 0px 4px 12px 0px rgba(238, 121, 107, 0.6);
}
.point-1 {
  left: 250px;
}
.point-2 {
  left: 570px;
}
.point-3 {
  left: 870px;
}

.point-4 {
  left: 1165px;
}
.ipss-container {
  width: 1920px;
  height: 540px;
  background: #fff;
  box-sizing: border-box;
  overflow: hidden;
}

.top-box {
  height: 80px;

  background: url('../assets/piss-top.png') no-repeat 0 0;
  .current-time {
    float: right;
    padding: 0 20px;
    font-size: 24px;
    line-height: 40px;
    padding-top: 24px;
  }
}
.info {
  float: left;
  width: 500px;
}
.train {
  float: right;
  width: 1420px;
}
.info-ul {
  list-style: none;
}
.info-item {
  width: 440px;
  height: 95px;
  margin-bottom: 16px;
  text-align: center;
  .middle-text {
    display: inline-block;
    width: 200px;
    vertical-align: top;
    padding-top: 14px;
  }
  background: linear-gradient(
    180deg,
    rgba(50, 193, 123, 0.3) 0%,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 70%,
    rgba(50, 193, 123, 0.3) 100%
  );
  .color-1 {
    color: #ee796b;
  }
  .color-2 {
    color: #32c17b;
  }
  border-radius: 16px;
  .strong-text {
    font-size: 36px;
  }
  .small-text {
    font-size: 16px;
    padding-top: 4px;
  }
}
.line-11-theme {
  background: linear-gradient(
    180deg,
    rgba(238, 121, 107, 0.3) 0%,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 70%,
    rgba(238, 121, 107, 0.3) 100%
  );
}
.line-empty-theme {
  background: linear-gradient(
    180deg,
    rgba(174, 174, 174, 0.3) 0%,
    rgba(255, 255, 255, 0) 30%,
    rgba(255, 255, 255, 0) 70%,
    rgba(174, 174, 174, 0.3) 100%
  );
}
.socket-item {
  opacity: 0;
}
</style>
<script setup lang="ts">
import { reactive, ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import socketItem from '../components/socket.vue';
import loading from '../components/loading.vue';
import dayjs from 'dayjs';

let timer = 123;
let currentTime = ref();
let daylist = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六'
];
let route = useRoute();
let doorType = ref('1');
if (route.query.door) {
  let str = route.query.door;
  doorType.value = str;
}

// 判断当前车门
console.log(doorType);

onMounted(() => {
  // 获取当前路由参数
  timer = setInterval(() => {
    // 获取当前时间
    let day = dayjs();
    currentTime.value =
      day.format('YYYY-MM-DD HH:mm:ss') + ' ' + daylist[day.day()];
  }, 1000 * 1);
});

let store = useStore();
const loadgingText = ref('已启动一键开关站流程,请做好开关站保障工作');
const direction = computed(() => {
  return store.state.direction == 1 ? '模式口' : '新首钢';
});
const directionEn = computed(() => {
  return store.state.direction == 1 ? 'Moshi Kou' : 'Xin Shougang';
});

const currentStation = reactive({
  en: '',
  cn: ''
});

// 获取当前上行 还是下行 direction
const lineInfo = computed(() => {
  let lineObj = [];
  if (store.state.direction == 1) {
    // 下行
    lineObj = store.state.stationInfo.down;
  } else {
    // 上行
    lineObj = store.state.stationInfo.up;
  }
  if (lineObj && lineObj.length) {
    let status = false;
    lineObj.forEach((item) => {
      item.stationStatus = status;
      if (item.station_id == store.state.station) {
        currentStation.cn = item.cn_name;
        currentStation.en = item.en_name;
        status = true;
      }
    });
  }
  console.log('&&&&&&&&&&&&&&&', lineObj);
  return lineObj;
});
// 获取当前站  station
// 获取列车状态 trainInfo
</script>

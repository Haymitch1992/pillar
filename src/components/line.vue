<template>
  <div class="line-box">
    <!-- 站台 -->
    <div class="station-box">
      <div
        class="station"
        v-for="(item, index) in lineInfo"
        :key="item.station_id"
        :class="[
          item.station_id == $store.state.station ? 'active' : '',
          'station-item-' + index
        ]"
      >
        <p>{{ item.cn_name }}</p>
        <p class="en">{{ item.en_name }}</p>
        <!-- 向上的箭头 -->
        <div
          class="arrow-up-box"
          :class="['station-arrow-' + index]"
          v-if="item.station_id == $store.state.station"
        >
          <img src="../assets/arrow.png" class="arrow-up" alt="" />
          <img src="../assets/arrow.png" class="arrow-up" alt="" />
          <img src="../assets/arrow.png" class="arrow-up" alt="" />
        </div>
        <div
          class="arrow-up-box right"
          :class="['station-arrow-' + index]"
          v-if="item.station_id == $store.state.station"
        >
          <img src="../assets/arrow.png" class="arrow-up" alt="" />
          <img src="../assets/arrow.png" class="arrow-up" alt="" />
          <img src="../assets/arrow.png" class="arrow-up" alt="" />
        </div>
      </div>
    </div>

    <!-- 线路 -->
    <div class="line-box kuai" v-if="$store.state.direction == 1">
      <div class="line line-left line-1">
        <span
          :class="[
            'station-' + index,
            $store.state.direction == 1 ? 'shangxing' : '',
            item.station_id == $store.state.station ? 'active' : ''
          ]"
          v-for="(item, index) in lineInfo"
          :key="item.station_id"
        ></span>
      </div>
    </div>
    <div class="line-box kuai" v-if="$store.state.direction == 0">
      <div class="line line-left line-2">
        <span
          :class="[
            'station-' + index,
            item.station_id == $store.state.station ? 'active' : ''
          ]"
          v-for="(item, index) in lineInfo"
          :key="item.station_id"
        ></span>
      </div>
    </div>

    <div class="line-box man">
      <div class="line line-right line-2">
        <span
          :class="[
            'station-' + index,
            item.station_id == $store.state.station ? 'active' : ''
          ]"
          v-for="(item, index) in lineInfo"
          :key="item.station_id"
        ></span>
      </div>
    </div>
    <!-- 站牌 -->
    <div class="sign" v-if="$store.state.direction == 1">
      <img
        v-if="$store.state.station != 11102"
        src="../assets/arrow-left-top.png"
        alt=""
      />
      <!-- 金安桥站显示 快车不停车 -->
      <img v-else src="../assets/stop.png" alt="" />
      <div class="sign-bottom">
        <p v-if="$store.state.station != 11102">
          {{ $store.state.trainInfo.train2.train_state.arrival_time }}分钟
        </p>
        <P v-if="$store.state.station != 11102">
          {{ $store.state.trainInfo.train2.train_state.arrival_time }}Min
        </P>
        <span class="sign-text" v-if="$store.state.station != 11102">
          快车线路
        </span>
        <span class="sign-text" v-else>快车通过不停车</span>
        <span v-if="$store.state.station != 11102" class="sign-en">
          Express Line
        </span>
        <span v-else class="sign-en">Express Line Skip-Stop</span>
      </div>
    </div>
    <div class="sign sign-3" v-if="$store.state.direction == 0">
      <img src="../assets/arrow-left-top.png" alt="" />
      <div class="sign-bottom">
        <p>{{ $store.state.trainInfo.train2.train_state.arrival_time }}分钟</p>
        <P>{{ $store.state.trainInfo.train2.train_state.arrival_time }}Min</P>
        <span class="sign-text">普通车线路</span>
        <span class="sign-en">Local Line</span>
      </div>
    </div>
    <div class="sign sign-2">
      <img src="../assets/arrow-right-top.png" alt="" />
      <div class="sign-bottom">
        <p>{{ $store.state.trainInfo.train1.train_state.arrival_time }}分钟</p>
        <P>{{ $store.state.trainInfo.train1.train_state.arrival_time }}Min</P>
        <span class="sign-text">普通车线路</span>
        <span class="sign-en">Local Line</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'line',
  data() {
    return {};
  },
  computed: {
    // 区分上下行 首钢到金顶街 有快车
    // 金顶街到首钢 都是普通
    lineInfo() {
      // 获取上下行
      let lineObj = [];
      if (this.$store.state.direction == 1) {
        // 下行
        lineObj = this.$store.state.stationInfo.down;
      } else {
        // 上行
        lineObj = this.$store.state.stationInfo.up;
      }
      return lineObj;
    }
  }
};
</script>
<style lang="less" scoped>
.arrow-up-box {
  position: absolute;
  top: 100px;
  left: -62px;
  width: 18px;
  overflow: hidden;
  z-index: 100;
  img {
    display: block;
  }
}
.station-arrow-0 {
  display: none;
}
.arrow-up-box.right {
  left: 250px;
}
.line-box {
  position: relative;
}

.station {
  border: 2px solid #fff;
  background: #202c44;
  text-align: center;
  border-radius: 10px;
  display: inline-block;
  width: 200px;
  font-size: 30px;
  padding: 4px 0;
  color: #fff;
  margin-bottom: 80px;
  .en {
    font-size: 20px;
  }
}
.station-item-0 {
  position: absolute;
  top: 450px;
  left: 0px;
}
.station-item-1 {
  position: absolute;
  top: 280px;
  left: 0px;
}
.station-item-2 {
  position: absolute;
  top: 110px;
  left: 0px;
}
.station-item-3 {
  position: absolute;
  top: -60px;
  left: 0px;
}
.station-box {
  width: 200px;
  position: absolute;
  left: 210px;
  top: 110px;
  .station.active {
    background: #0b3b96;
    p {
      color: #fff;
    }
    .en {
      font-size: 24px;
    }
  }
}
.kuai {
  position: absolute;
  left: 150px;
  top: 60px;
}
.man {
  position: absolute;
  right: 150px;
  top: 60px;
}
.line-left {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.line-right {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.line {
  width: 18px;
  height: 550px;
  position: relative;

  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 4px solid #fff;
    background: #28bd72;
    display: inline-block;
  }
  .active::before {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #28bd72;
    display: inline-block;
    top: 0px;
    left: 0px;

    border-radius: 50%;
    content: '';
  }
  .active::before {
    animation: scale 2s infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
      opacity: 0.9;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

  .station-0 {
    position: absolute;
    left: -5px;
    bottom: -10px;
  }
  .station-1 {
    position: absolute;

    top: 360px;
    left: -5px;
  }
  .station-2 {
    position: absolute;
    top: 190px;
    left: -5px;
  }
  .shangxing.station-2 {
    opacity: 0;
  }
  .station-3 {
    position: absolute;

    top: 0px;

    left: -5px;
  }
}
.line-1 {
  background: #0070ac;
}
.line-2 {
  background: #ed9166;
}
.sign {
  display: block;
  width: 70px;
  border: 2px solid #fff;
  border-radius: 10px;
  color: #fff;
  background: #0070ac;
  position: absolute;
  text-align: left;
  top: 220px;
  left: 40px;
  height: 360px;
  img {
    display: block;
    width: 80%;
    margin: 4px auto;
  }
  p {
    text-align: center;
    font-size: 20px;
  }
  .sign-bottom {
    border-top: 2px solid #fff;
    padding: 10px 0;
  }
  .sign-text {
    width: 30px;
    line-height: 40px;
    font-size: 24px;
    display: block;
    display: inline-block;
    margin-left: 10px;
  }
  .sign-en {
    display: block;
    width: 300px;
    font-size: 20px;
    line-height: 24px;
    transform: rotate(90deg);
    -ms-transform: rotate(90deg); /* IE 9 */
    -moz-transform: rotate(90deg); /* Firefox */
    -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
    -o-transform: rotate(90deg);
    position: absolute;
    left: -100px;
    top: 280px;
  }
}
.sign-2 {
  left: 520px;
  background: #ed9166;
}
.sign-3 {
  left: 40px;
  background: #ed9166;
}
.line-arrow-1 {
  position: absolute;
  top: 50px;
  left: 140px;
}
.line-arrow-2 {
  position: absolute;
  top: 50px;
  right: 140px;
}
</style>

<template>
  <div class="pis">
    <div class="pis-top">
      <span>
        <span class="pis-text-line">
          <p>开往</p>
          <P class="pis-text-p">To</P>
        </span>
        <span class="current pis-text-line">
          <p>{{ direction }}</p>
          <P class="pis-text-p">{{ directionEn }}</P>
        </span>
        方向
      </span>
      <span class="manche">
        <p class="cn">普通车</p>
        <p>Local</p>
      </span>
    </div>
    <div class="tips-line">
      <!-- 下行不显示 -->
      <span class="current tips"></span>
    </div>
    <div class="pis-line">
      <i v-for="(item, index) in lineInfo" :key="item.station_id">
        <span
          class="pis-line-item"
          :class="item.station_id == $store.state.station ? 'active' : ''"
          :title="item.station_id"
        >
          <p>{{ item.cn_name }}</p>
          <p class="en">{{ item.en_name }}</p>
          <p class="daozhan">
            预计到站{{
              $store.state.trainInfo.train2.train_state.arrival_time
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
    <div class="car-status">
      <div
        class="car-container"
        :class="
          'active' +
          $store.state.trainInfo.train1.carriage_state[0].crowding_degree +
          '-' +
          $store.state.trainInfo.train1.carriage_state[1].crowding_degree
        "
      >
        <div class="car-men">
          <span></span>
          <span></span>
        </div>
        <div class="car-men car-men-1">
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- <img src="../assets/car-1.png" alt="" />
      <img src="../assets/car-2.png" alt="" /> -->
      <img class="per-1" src="../assets/person-2.png" alt="" />
      <!-- <span class="pos-num-1">1</span>
      <span class="pos-num-2">2</span> -->
      <img class="per-2" src="../assets/person.png" alt="" />
    </div>
    <div class="car-info">
      <span class="fl-info">
        <span class="men-num">3-4</span>
        <img class="men-img" src="../assets/pingbimen.png" alt="" />
        <!--  -->
        <div class="men-info" v-if="$store.state.direction == 0">
          <p>普通车</p>
          <p>Local</p>
        </div>
        <div class="men-info" v-if="$store.state.direction == 1">
          <p>快车</p>
          <p>Express</p>
        </div>
      </span>
      <span class="fr-info">
        <span class="men-num">1-2</span>
        <img class="men-img" src="../assets/pingbimen.png" alt="" />
        <div class="men-info">
          <p>普通车</p>
          <p>Local</p>
        </div>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pis',
  data() {
    return {
      carType: '快车'
    };
  },
  computed: {
    direction() {
      return this.$store.state.direction == 1 ? '模式口' : '新首钢';
    },
    directionEn() {
      return this.$store.state.direction == 1 ? 'Moshi Kou' : 'Xinshou Gang';
    },
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
.car-container {
  width: 300px;
  height: 34px;
  display: block;
  margin: 0 auto;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border: 1px solid #fff;
  box-sizing: border-box;
  background: linear-gradient(to right, #01be00, #01be00);
  // 红色 #c40001
  position: relative;
  .car-men {
    position: absolute;
    bottom: 0;
    left: 60px;
    span {
      display: inline-block;
      height: 20px;
      width: 10px;
      background: #fff;
      margin-right: 2px;
      vertical-align: bottom;
    }
  }
  .car-men-1 {
    left: 210px;
  }
}
.active1-1 {
  background: linear-gradient(to right, #01be00, #01be00);
}
.active1-2 {
  background: linear-gradient(to right, #01be00, #e28b00);
}
.active1-3 {
  background: linear-gradient(to right, #01be00, #541911);
}
.active1-4 {
  background: linear-gradient(to right, #01be00, #c40001);
}
//

.active2-1 {
  background: linear-gradient(to right, #e28b00, #01be00);
}
.active2-2 {
  background: linear-gradient(to right, #e28b00, #e28b00);
}
.active2-3 {
  background: linear-gradient(to right, #e28b00, #541911);
}
.active2-4 {
  background: linear-gradient(to right, #e28b00, #c40001);
}

.active3-1 {
  background: linear-gradient(to right, #541911, #01be00);
}
.active3-2 {
  background: linear-gradient(to right, #541911, #e28b00);
}
.active3-3 {
  background: linear-gradient(to right, #541911, #541911);
}
.active3-4 {
  background: linear-gradient(to right, #541911, #c40001);
}

.active4-1 {
  background: linear-gradient(to right, #c40001, #01be00);
}
.active4-2 {
  background: linear-gradient(to right, #c40001, #e28b00);
}
.active4-3 {
  background: linear-gradient(to right, #c40001, #541911);
}
.active4-4 {
  background: linear-gradient(to right, #c40001, #c40001);
}

.pis-text-line {
  display: inline-block;
  vertical-align: top;
  p {
    text-align: center;
  }
}
.pis-text-p {
  font-size: 14px;
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
    font-size: 30px;
  }
}
.pis {
  color: #fff;
  text-align: left;
  padding: 20px;
  font-size: 20px;
  .fl-info {
    float: left;
    font-size: 16px;
    img {
      margin: 0 4px;
    }
  }
  .fr-info {
    float: right;
    font-size: 16px;
    img {
      margin: 0 4px;
    }
  }
  .current {
    color: #fc9a6a;
    margin: 0 4px;
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
    padding: 2px 0;
    float: right;
    width: 100px;
    text-align: center;
    p {
      font-size: 14px;
      line-height: 20px;
    }
    .cn {
      font-size: 18px;
    }
  }
  .pis-line {
    text-align: center;
    width: 100%;
    font-size: 20px;
    padding-bottom: 20px;
    margin-top: 4px !important;
    i {
      font-style: normal;
    }
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .en {
      font-size: 16px;
    }
    margin-top: 20px;
    img {
      display: inline-block;
      margin: 0 10px;
      vertical-align: middle;
    }
  }
  .pis-line-item {
    position: relative;
    .daozhan {
      font-size: 14px;
      background: #0d3d62;
      position: absolute;
      top: -24px;
      left: calc(50% - 65px);
      display: inline-block;
      width: 130px;
      padding: 2px 0;
      z-index: 10;
      display: none;
    }
    .daozhan::after {
      content: '';
      display: block;
      position: absolute;
      top: 22px;
      left: 63px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 10px solid #0d3d62;
      z-index: 1;
    }
  }
  .pis-line-item.active .daozhan {
    display: block;
  }
  .car-status {
    text-align: center;
    padding-bottom: 10px;
    position: relative;
  }
  .tips-line {
    padding-top: 4px;
  }
  .tips {
    margin-left: 322px;
    font-size: 16px;
  }
  .per-1 {
    position: absolute;
    bottom: 10px;
    left: 235px;
  }
  .pos-num-1 {
    position: absolute;
    bottom: 18px;
    left: 170px;
  }
  .pos-num-2 {
    position: absolute;
    bottom: 18px;
    left: 410px;
  }
  .per-2 {
    position: absolute;
    bottom: 10px;
    left: 385px;
  }
}
</style>

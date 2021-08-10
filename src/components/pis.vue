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
      <span class="kauiche" v-if="$store.state.direction == 1">
        <p class="cn">快车</p>
        <p>Express</p>
      </span>
      <span class="manche" v-if="$store.state.direction == 0">
        <p class="cn">普通车</p>
        <p>Local</p>
      </span>
    </div>
    <div class="tips-line">
      <!-- 下行不显示 -->
      <span class="current tips" v-show="$store.state.direction == 1">
        本次列车不停靠
      </span>
      <span class="current tips" v-show="$store.state.direction == 0"></span>
    </div>
    <div class="pis-line">
      <i v-for="(item, index) in lineInfo" :key="item.station_id">
        <span
          :class="item.station_id == $store.state.station ? 'active' : ''"
          :title="item.station_id"
        >
          <p>{{ item.cn_name }}</p>
          <p class="en">{{ item.en_name }}</p>
        </span>
        <img
          v-if="index < lineInfo.length - 1"
          src="../assets/next-1.png"
          alt=""
        />
      </i>
    </div>
    <div class="car-status">
      <img src="../assets/car-1.png" alt="" />
      <img src="../assets/car-2.png" alt="" />
      <img class="per-1" src="../assets/person-2.png" alt="" />
      <span class="pos-num-1">1</span>
      <span class="pos-num-2">2</span>
      <img class="per-2" src="../assets/person.png" alt="" />
    </div>
    <div class="car-info">
      <span class="fl-info">
        <span class="men-num">3-4</span>
        <img class="men-img" src="../assets/pingbimen.png" alt="" />
        <div class="men-info">
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
      return this.$store.state.direction == 1 ? '金顶街' : '首钢';
    },
    directionEn() {
      return this.$store.state.direction == 1 ? 'JINDINGJIE' : 'SHOUGANG';
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
    background: #c69000;
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
    bottom: 20px;
    left: 220px;
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
    bottom: 20px;
    left: 350px;
  }
}
</style>

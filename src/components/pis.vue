<template>
  <div class="pis">
    <div class="pis-top">
      <span>
        开往
        <span class="current">{{ direction }}</span>
        方向
      </span>
      <span class="kauiche">{{ carType }}</span>
    </div>
    <div class="tips-line">
      <span class="current tips">本次列车不停靠</span>
    </div>
    <div class="pis-line">
      <span>
        <p>金顶街</p>
        <p class="en">JINDINGJIE</p>
      </span>
      <img src="../assets/next-1.png" alt="" />
      <span>
        <p>金安桥</p>
        <p class="en">JINANQIAO</p>
      </span>
      <img src="../assets/next-1.png" alt="" />
      <span>
        <p>北辛安路</p>
        <p class="en">BEIXINANLU</p>
      </span>
      <img src="../assets/next-1.png" alt="" />
      <span>
        <p>首钢</p>
        <p class="en">SHOUGANG</p>
      </span>
    </div>
    <div class="car-status">
      <img src="../assets/car-1.png" alt="" />
      <img src="../assets/car-2.png" alt="" />
      <img class="per-1" src="../assets/person-2.png" alt="" />
      <img class="per-2" src="../assets/person.png" alt="" />
    </div>
    <div class="car-info">
      <span class="fl-info">
        <img src="../assets/arrow-2.png" alt="" />
        3-4号车门为快车停靠点
      </span>
      <span class="fr-info">
        1-2号车门为普通列车停靠点
        <img src="../assets/arrow-1.png" alt="" />
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
      return this.$store.state.direction ? '首钢' : '金顶街';
    },
    lineInfo() {
      // 获取上下行
      let lineObj = [];
      if (this.$store.state.direction === 1) {
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
.pis {
  color: #ffff;
  text-align: left;
  padding: 20px;
  font-size: 24px;
  .fl-info {
    float: left;
    font-size: 20px;
    img {
      margin: 0 4px;
    }
  }
  .fr-info {
    float: right;
    font-size: 20px;
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
    line-height: 40px;
    float: right;
    width: 100px;
    text-align: center;
  }
  .pis-line {
    text-align: center;
    width: 100%;
    font-size: 20px;
    padding-bottom: 20px;
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
    padding-bottom: 30px;
    position: relative;
  }
  .tips-line {
    padding-top: 10px;
  }
  .tips {
    margin-left: 280px;
    font-size: 20px;
  }
  .per-1 {
    position: absolute;
    bottom: 40px;
    left: 220px;
  }
  .per-2 {
    position: absolute;
    bottom: 40px;
    left: 350px;
  }
}
</style>

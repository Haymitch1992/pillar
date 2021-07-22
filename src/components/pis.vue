<template>
  <div class="pis">
    <div class="pis-top">
      <span>
        开往
        <span class="current">{{ data.direction }}</span>
        方向
      </span>
      <span class="kauiche">{{ data.carType }}</span>
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
    </div>
    <div class="car-info">
      <span class="fl-info">
        <img src="../assets/arrow-2.png" alt="" />
        1-2号车门未普通列车停靠点
      </span>
      <span class="fr-info">
        3-4号车门未快车停靠点
        <img src="../assets/arrow-1.png" alt="" />
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'pis',
  setup() {
    const data = reactive({
      direction: '金顶街',
      carType: '快车'
    });
    return {
      data
    };
  }
});
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
    font-size: 26px;
    padding-bottom: 20px;
    span {
      display: inline-block;
      vertical-align: middle;
    }
    .en {
      font-size: 18px;
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
  }
  .tips-line {
    padding-top: 10px;
  }
  .tips {
    margin-left: 280px;
    font-size: 20px;
  }
}
</style>

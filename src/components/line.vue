<template>
  <div class="line-box">
    <img class="line-arrow-1" src="../assets/line-arrow-1.png" alt="" />
    <img class="line-arrow-2" src="../assets/line-arrow-2.png" alt="" />
    <!-- 站台 -->
    <div class="station-box">
      <div class="station">
        <p>金顶街</p>
        <p class="en">JINDINGJIE</p>
      </div>
      <div class="station">
        <p>金安桥</p>
        <p class="en">JINANQIAO</p>
      </div>
      <div class="station">
        <p>北辛安</p>
        <p class="en">BEIXINAN</p>
      </div>
      <div class="station">
        <p>首钢</p>
        <p class="en">SHOUGANG</p>
      </div>
    </div>

    <!-- 线路 -->
    <div class="line-box kuai">
      <div class="line line-1">
        <span class="station-1"></span>
        <span class="station-2"></span>
        <span class="station-4 active"></span>
      </div>
    </div>
    <div class="line-box man">
      <div class="line line-2">
        <span class="station-1"></span>
        <span class="station-2"></span>
        <span class="station-3"></span>
        <span class="station-4 active"></span>
      </div>
    </div>
    <!-- 站牌 -->
    <div class="sign">
      <img src="../assets/arrow-left-top.png" alt="" />
      <div class="sign-bottom">
        <p>2分钟</p>
        <P>2Min</P>
        <span class="sign-text">快车线路</span>
        <span class="sign-en">Express Line</span>
      </div>
    </div>
    <div class="sign sign-2">
      <img src="../assets/arrow-right-top.png" alt="" />
      <div class="sign-bottom">
        <p>2分钟</p>
        <P>2Min</P>
        <span class="sign-text">慢车线路</span>
        <span class="sign-en">Local Line</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.line-box {
  position: relative;
}
.station-box {
  width: 200px;
  position: absolute;
  left: 210px;
  top: 110px;
}
.station {
  border: 2px solid #fff;
  text-align: center;
  border-radius: 10px;
  display: inline-block;
  width: 200px;
  font-size: 36px;
  padding: 4px 0;
  color: #fff;
  margin-bottom: 140px;
  .en {
    font-size: 24px;
  }
}
.kuai {
  position: absolute;
  left: 150px;
  top: 140px;
}
.man {
  position: absolute;
  right: 150px;
  top: 140px;
}
.line {
  width: 18px;
  height: 800px;
  position: relative;
  span {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #fff;
    background: #28bd72;
    display: inline-block;
  }
  .active::before {
    position: absolute;
    width: 30px;
    height: 30px;
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

  .station-1 {
    position: absolute;
    top: -10px;
    left: -10px;
  }
  .station-2 {
    position: absolute;
    top: 220px;
    left: -10px;
  }
  .station-3 {
    position: absolute;
    top: 440px;
    left: -10px;
  }
  .station-4 {
    position: absolute;
    bottom: 100px;
    left: -10px;
  }
}
.line-1 {
  background: #0070ac;
}
.line-2 {
  background: #c69000;
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
  top: 320px;
  left: 40px;

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
    line-height: 50px;
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
  left: 500px;
  background: #c69000;
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

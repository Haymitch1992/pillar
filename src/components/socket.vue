<template>
  <div class="box">websocket</div>
</template>
<script>
import { GETSTAIONINFO, GETTRAININFO } from '../services/user';
import { mapMutations } from 'vuex';
const heartCheck = {
  timeout: 60 * 1000,
  timer: null,
  serverTimer: null,
  reset() {
    this.timer && clearTimeout(this.timer);
    this.serverTimer && clearTimeout(this.serverTimer);
  },
  start(ws) {
    this.reset();
    this.timer = setTimeout(() => {
      // console.log('发送心跳,后端收到后，返回一个心跳消息')
      // onmessage拿到返回的心跳就说明连接正常
      ws.send(JSON.stringify({ heart: 1 }));
      this.serverTimer = setTimeout(() => {
        // 如果超过一定时间还没响应(响应后触发重置)，说明后端断开了
        ws.close();
      }, this.timeout);
    }, this.timeout);
  }
};
export default {
  // 获取车辆信息
  // 获取车站信息
  name: 'Websocket',
  data() {
    return {
      wsuri: 'ws://172.51.215.158:8081/api/v1/device/platform_ats/connection', // ws wss
      lockReconnect: false, // 连接失败不进行重连
      maxReconnect: 5, // 最大重连次数，若连接失败
      socket: null
    };
  },
  mounted() {
    this.initWebSocket();
    this.getInfo();
    setInterval(() => {
      this.getTrain();
    }, 3000);
  },
  methods: {
    ...mapMutations([
      'setStationInfo',
      'setAlterInfo',
      'setDirection',
      'setStation',
      'setTainInfo',
      'setEmergencyState',
      'setCarDoorInfo'
    ]),
    afterGetTrainInfo(res) {
      // 更新车辆的数据
      if (res.data.result === '') return;
      // 没跑车 两个车的数据都没有

      if (res.data.result.train_002 === '') return;
      let train1 = {};
      let train2 = {};
      if (res.data.result.train_001 === '') {
        train1 = {
          train_state: res.data.result.train_002.train_state,
          carriage_state: res.data.result.train_002.carriage_state
        };
        train2 = {
          train_state: res.data.result.train_002.train_state,
          carriage_state: res.data.result.train_002.carriage_state
        };
      } else {
        train1 = {
          train_state: res.data.result.train_002.train_state,
          carriage_state: res.data.result.train_002.carriage_state
        };
        train2 = {
          train_state: res.data.result.train_001.train_state,
          carriage_state: res.data.result.train_001.carriage_state
        };
      }

      this.setTainInfo({
        train1: train1,
        train2: train2
      });
    },
    getTrain() {
      GETTRAININFO(this.$store.state.direction, this.$store.state.station).then(
        this.afterGetTrainInfo
      );
    },
    getInfo() {
      GETSTAIONINFO().then((res) => {
        console.log(res);
        // 拿到的数据 存储到vuex
        this.setStationInfo({
          up: res.data.result[0][0]['line_info'],
          down: res.data.result[0][1]['line_info']
        });
        console.log('**************', this.$store.state.stationInfo);
      });
      this.getTrain();
    },
    reconnect() {
      console.log('尝试重连');
      if (this.lockReconnect || this.maxReconnect <= 0) {
        return;
      }
      setTimeout(() => {
        // this.maxReconnect-- // 不做限制 连不上一直重连
        this.initWebSocket();
      }, 60 * 1000);
    },
    initWebSocket() {
      try {
        if ('WebSocket' in window) {
          this.socket = new WebSocket(this.wsuri);
        } else {
          console.log('您的浏览器不支持websocket');
        }
        this.socket.onopen = this.websocketonopen;
        this.socket.onerror = this.websocketonerror;
        this.socket.onmessage = this.websocketonmessage;
        this.socket.onclose = this.websocketclose;
      } catch (e) {
        this.reconnect();
      }
    },
    websocketonopen() {
      console.log('WebSocket连接成功', this.socket.readyState);
      heartCheck.start(this.socket);
      // this.socket.send('发送数据')
      this.websocketsend();
    },
    websocketonerror(e) {
      console.log('WebSocket连接发生错误', e);
      this.reconnect();
    },
    websocketonmessage(e) {
      // console.log(e)
      // console.log('得到响应', e.data);
      // 将数据进行切割
      let arr = e.data.split('|');
      if (arr.length === 2) {
        this.setDirection(arr[1]);
        this.setStation(arr[0]);
      }
      // 修改应急状态 setEmergencyState
      if (e.data === 'emergent1') {
        this.setEmergencyState(4); // danger
      } else if (e.data === 'recover') {
        this.setEmergencyState(1);
      } else if (e.data === 'waiting') {
        this.setEmergencyState(5);
      } else if (e.data === 'emergent3') {
        this.setEmergencyState(3); // warning
      } else {
        // 判断字符串是否包含 outPeople
        // gap=0&inPeople=0&outPeople=0
        if (e.data.indexOf('outPeople') !== -1) {
          let arr = e.data.split('&');
          let gap = parseInt(arr[0].split('=')[1]);
          let inPeople = arr[1].split('=')[1];
          let outPeople = arr[2].split('=')[1];
          this.setCarDoorInfo({
            gap,
            inPeople,
            outPeople
          });
        }
      }
      // console.log('可以渲染网页数据...');
      // 消息获取成功，重置心跳
      heartCheck.start(this.socket);
    },
    websocketclose(e) {
      console.log('connection closed (' + e.code + ')');
      this.reconnect();
    },
    websocketsend() {
      let data = { id: 'start' };
      this.socket.send(JSON.stringify(data));
    }
  },
  unmounted() {
    this.socket.close();
  }
};
</script>
<style lang="scss" scoped></style>

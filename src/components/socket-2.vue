<template>
  <div class="box">websocket</div>
</template>
<script>
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
      ws.send(JSON.stringify({ registerId: '12451', id: 'start' }));
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
      timer: 123,
      wsuri: 'ws://172.51.216.152:5005', // ws wss
      lockReconnect: false, // 连接失败不进行重连
      maxReconnect: 5, // 最大重连次数，若连接失败
      socket: null
    };
  },
  mounted() {
    this.initWebSocket();
  },
  methods: {
    ...mapMutations([
      'setPerceptionData',
      'setPassenger_records_data',
      'setShowItme'
    ]),
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
      console.log(e);
      if (e.data.indexOf('face_recognition') !== -1) {
        let obj = JSON.parse(e.data);
        this.setShowItme(1);
        this.setPerceptionData(obj.face_recognition_data);
        // 10秒后
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.setPerceptionData({
            picture_path: '',
            gender: '',
            age: ''
          });
          this.setShowItme(2);
          setTimeout(() => {
            this.setShowItme(3);
          }, 1000 * 10);
        }, 1000 * 10);
      }
      if (e.data.indexOf('passenger_records') !== -1) {
        let obj = JSON.parse(e.data);
        this.setPassenger_records_data(obj.passenger_records_data);
        // 10秒后
      }
      heartCheck.start(this.socket);
    },
    websocketclose(e) {
      console.log('connection closed (' + e.code + ')');
      this.reconnect();
    },
    websocketsend() {
      let data = { registerId: '12451', id: 'start' };
      this.socket.send(JSON.stringify(data));
    }
  },
  unmounted() {
    this.socket.close();
  }
};
</script>
<style lang="scss" scoped></style>

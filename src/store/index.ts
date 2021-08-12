import { createStore } from "vuex";

export default createStore({
  state: {
    stationInfo: {
      up: {},
      down: {}
    },
    alertInfo: [],
    trainInfo: {
      train1: {
        train_state: {
          arrival_time: 6, //剩余到站时间
          arrival_state: 0  // 2 未到达 ，1 即将到达 ，0已到达
        },
        carriage_state:  [  // 车厢拥挤度
          {
              carriageId: 1,    //车厢编号
              crowding_degree: 0, // 拥挤度：0 轻松舒适，1 轻度拥挤，2 严重拥挤
              temperture: "23℃",//
              barrier_free: true//
          },
          {
              carriageId: 2,
              crowding_degree: 0,
              temperture: "23℃",
              barrier_free: true
          }
        ]
      },
      train2: {
        train_state: {
          arrival_time: 5, //剩余到站时间
          arrival_state: 0  // 2 未到达 ，1 即将到达 ，0已到达
        },
        carriage_state:  [  // 车厢拥挤度
          {
              carriageId: 1,    //车厢编号
              crowding_degree: 0, // 拥挤度：0 轻松舒适，1 轻度拥挤，2 严重拥挤
              temperture: "23℃",//
              barrier_free: true//
          },
          {
              carriageId: 2,
              crowding_degree: 0,
              temperture: "23℃",
              barrier_free: true
          }
        ]
      },
    },
    direction: 0,// 上下行 0 上行 金顶街 => 首钢 // 1下行 首钢 => 金顶街
    station: 11001, // 当前车站
    // 001 是快车 002 是慢车
  },
  mutations: {
    setStationInfo(state, info) {
      state.stationInfo = info
    },
    setAlterInfo(state, info) {
      state.alertInfo = info
    },
    setDirection(state, info) {
      state.direction = info
    },
    setStation(state, info) {
      state.station = info
    },
    setTainInfo(state, info) {
      console.log('查看我要保存的数据',info)
       state.trainInfo.train1 = info.train1
      state.trainInfo.train2 = info.train2
    }
  },
  actions: {},
  modules: {},
});

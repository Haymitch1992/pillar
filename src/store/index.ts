import { createStore } from "vuex";

export default createStore({
  state: {
    stationInfo: {
      up: {},
      down: {}
    },
    alertInfo: [],
    trainInfo: {},
    direction: 0,// 上下行 0 上行 1下行
    station: 11101, // 当前车站
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

  },
  actions: {},
  modules: {},
});

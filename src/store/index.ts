import { createStore } from "vuex";

export default createStore({
  state: {
    stationInfo: {
      up: {},
      down: {}
    },
    trainInfo: {},
    direction: 1,// 上下行 0 上行 1下行
    station:11101 // 当前车站
  },
  mutations: {
    setStationInfo(state, info) {
      state.stationInfo = info
    }
  },
  actions: {},
  modules: {},
});

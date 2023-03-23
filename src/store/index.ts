import { createStore } from "vuex";

export default createStore({
  state: {
    stationInfo: {
      up: {},
      down: {}
    },
    carDoor: { // 车门防夹
      gap:0, //0正常 1夹人
      inPeople: 0, // 上车人数
      outPeople:0 // 下车人数
    },
    showItme:3,
    perceptionData: {
      picture_path: '',
      gender: '',
      age:''
    },
    pictureBase:{
      url: '',
      type:''
    },
    passenger_records_data:{
        man_num: 0,
        girl_num: 0,
        age_a: 0,  
        age_b: 0,
        age_c: 0,
        age_d: 0,
        age_e: 0
    },
    recommend:1,
    lineNumber:0,
    alertInfo: [],
    emergencyState:1, // 1正常状态 2应急状态 3普通暴雨 4严重暴雨 5一键开关站
    trainInfo: {
      train1: {
        train_state: {
          arrival_time: 2, //剩余到站时间
          arrival_state: 1  // 2 未到达 ，1 即将到达 ，0已到达
        },
        carriage_state:  [  // 车厢拥挤度
          {
              carriageId: 1,    //车厢编号
              crowding_degree: 1, // 拥挤度：0 轻松舒适，1 轻度拥挤，2 严重拥挤
              temperture: "23℃",//
              barrier_free: true//
          },
          {
              carriageId: 2,
              crowding_degree: 1,
              temperture: "23℃",
              barrier_free: true
          }
        ]
      },
      train2: {
        train_state: {
          arrival_time: 2, //剩余到站时间
          arrival_state: 2  // 2 未到达 ，1 即将到达 ，0已到达
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
    direction: 1,// 上下行 0 上行 金顶街 => 首钢 // 1下行 首钢 => 金顶街
    station: '11104', // 当前车站
    // 001 是快车 002 是慢车
    lamplight:0,
  },
  mutations: {
    setLamplight(state, info) { 
      state.lamplight = info
    },
    setCarDoorInfo(state, info) { 
      state.carDoor = info
    },
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
    },
    setEmergencyState(state, status) {
      state.emergencyState = status
    },
    setLineNumber(state, status) { 
      state.lineNumber = status
    },
    setPerceptionData(state, status) { 
      state.perceptionData = status
    },
    setPassenger_records_data(state, status) { 
      state.passenger_records_data = status
    },
    setShowItme(state, status) { 
      state.showItme = status
    },
    setRecommend(state, status) { 
      state.recommend = status
    },
    setPictureBase(state, status) { 
      state.pictureBase = status
    }
  },
  actions: {},
  modules: {},
});

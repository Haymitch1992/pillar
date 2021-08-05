//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  STATIONINFO: `/api/v1/device/platform_ats/station_info`,// 车站信息查询
  TRAININFO: `/api/v1/device/platform_ats/train_info`, // 车辆信息查询
  HOTSPOTINFO:`/api/v1/device/platform_ats/hotspot_info`,// 广播信息
  PERCEPTIONALARM: `/renwen/v1/device/platform_ips/perception_alarm` // 车站感知数据
}

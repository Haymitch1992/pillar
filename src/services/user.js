import {
  TRAININFO,
  STATIONINFO,
  PERCEPTIONALARM
} from '@/services/api'
import {request, METHOD, removeAuthorization} from '@/utils/request'

/**
 * 车站感知数据
 * @param name 0为进出站类，1为车站召援类，2为车站感知类，3为列车感知类 如不填写，则请求所有类型
 * @param password 请求的数量 如不填写，则请求指定类型所有未处理的异常
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function GETPERCEPTIONALARM(type, number) {
  return request(PERCEPTIONALARM, METHOD.GET, {
    type: type,
    number: number
  })
}

/**
 * 车辆信息
 * @param direction 0上行，1下行
 * @param station 车站Id
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function GETTRAININFO(direction,station) {
  return request(TRAININFO, METHOD.GET,{
    direction: direction,
    station:station
  })
}

/**
 * 车站信息
 * @param direction 0上行，1下行
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function GETSTAIONINFO(direction) {
  return request(STATIONINFO, METHOD.GET, {
      direction:direction
    })
}


export default {
  GETTRAININFO,
  GETSTAIONINFO,
  GETPERCEPTIONALARM
}

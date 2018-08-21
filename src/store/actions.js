import {
  RECEIVE_LIST,
  RECEIVE_LOCATION,
  RECEIVE_SHOPS
} from './mutation-types'
import {reqShopList, reqFoodList, reqLocation} from '../api'

export default {
  //异步获取地址
  async getLocation({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqLocation(geohash)
      if (result.code === 0) {
        const address = result.data
        commit(RECEIVE_LOCATION, {address})
    }
  },
  //异步获取食品分类列表
  async getFoodList({commit, state}) {
    const result = await reqFoodList()
    if (result.code === 0) {
      const list = result.data
      commit(RECEIVE_LIST, {list})
    }
  },
  //异步获取商家列表
  async getShops({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShopList(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
}

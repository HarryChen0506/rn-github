/**
 * 网络缓存
 * 1. LOCAL_FIRST 本地优先 当本地数据在有效期内，优先使用本地数据，若过期则请求网络数据，同时将网络数据持久化到本地
 * 2. NET_FIRST 网络优先
 */
import { AsyncStorage } from 'react-native'
import { request } from '@utils/http'

class NetCache {
  static defaultOptions = {
    mode: 'LOCAL_FIRST'
  }
  constructor(options = {}) {
    options = { ...NetCache.defaultOptions, ...options }
    const { mode } = options
    this.mode = mode
  }
  getData(url) {
    if (this.mode === 'LOCAL_FIRST') {
      return this._fetchLocalData(url)
    }
  }
  removeData(url) {
    this._removeLocalData(url)
  }

  // 优先本地
  async _fetchLocalData(url) {
    try {
      const res = await this._getLocalData(url)
      if (res) {
        // console.log('获取本地数据', res)
        return Promise.resolve(res)
      } else {
        const data = await this._getNetData(url)
        // console.log('获取网络数据', data)
        this._saveLocalData(url, data)
        return Promise.resolve(data)
      }
    } catch (error) {
      // console.error(error)
      return Promise.reject(error)
    }
  }
  // 保存本地数据
  _saveLocalData(key, data, callback) {
    if (!data || !key) {
      return
    }
    AsyncStorage.setItem(key, JSON.stringify(data), callback)
  }
  // 清除本地数据
  _removeLocalData(key, callback) {
    if (!key) {
      return
    }
    AsyncStorage.removeItem(key, callback)
  }
  // 获取本地数据
  async _getLocalData(key) {
    try {
      const value = await AsyncStorage.getItem(key)
      return Promise.resolve(JSON.parse(value))
    } catch (error) {
      console.error(error)
      return Promise.reject(error)
    }
  }
  // 获取网络数据
  async _getNetData(url) {
    return request({
      url
    })
  }
}

export default NetCache
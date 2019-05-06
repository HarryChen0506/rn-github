/**
 * 网络缓存
 * 1. LOCAL_FIRST 本地优先 当本地数据在有效期内，优先使用本地数据，若过期则请求网络数据，同时将网络数据持久化到本地
 * 2. NET_FIRST 网络优先
 */
// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { request } from '@utils/http'

class NetCache {
  static defaultOptions = {
    mode: 'LOCAL_FIRST',
    maxAge: 1000 * 60 * 60, // 默认过期时间为1h
    // maxAge: 1000 * 60,
  }
  constructor(options = {}) {
    options = { ...NetCache.defaultOptions, ...options }
    const { mode, maxAge } = options
    this.mode = mode
    this.maxAge = maxAge
    this.timestamp_key = 'TIMESTAMP' // 时间戳
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
      // console.log('获取本地数据', res)
      const res = await this._getLocalData(url)
      if (res && this._checkTimestampValid(res)) {
        // console.log('本地数据有效', res)
        return Promise.resolve(res.data)
      } 
      const fetchData = await this._getNetData(url)
      // console.log('失效，获取网络数据', fetchData)
      this._saveLocalData(url, fetchData)
      return Promise.resolve(fetchData)
    } catch (error) {
      return Promise.reject(error)
    }
  }
  // 保存本地数据
  _saveLocalData(key, data, callback) {
    if (!data || !key) {
      return
    }
    AsyncStorage.setItem(key, JSON.stringify(this._timestampWrap(data)), callback)
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
      // console.error(error)
      return Promise.reject(error)
    }
  }
  // 获取网络数据
  async _getNetData(url) {
    return request({
      url
    })
  }
  // 校验本地是否过期
  _checkTimestampValid(res = {}) {
    const storageTime = res[this.timestamp_key]
    const expires = storageTime + (this.maxAge || 0)
    if (Date.now() > expires) {
      // console.log('过期',Date.now(), expires)
      return false
    }
    return true
  }
  // 数据添加时间戳
  _timestampWrap(data = {}) {
    return {
      data,
      [this.timestamp_key]: data.date || Date.now()
    }
  }
}

export default NetCache
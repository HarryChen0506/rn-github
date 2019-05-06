// api接口管理
import {api, host} from './api.config'

class ApiManage {
  constructor(env) {
    this.env = env || 'dev'
    this.api = api || {}
    this.host = host || {}
  }
  getApi({hostName = 'github', keyInfo} = {}) {
    return this.getHost(hostName) + this._calcObjectValue(this.api, keyInfo)
  }
  getHost(type = 'github') {
    return this.host[type][this.env]
  }
  setEnv(env) {
    if (!env) {
      console.error('setEnv: env can not be null!')
      return
    }
    this.env = env
    return this
  }
  /**
   * 计算对象某个层级的值， 如 {name: {foo: '123' }}
   * @param {*} object 
   * @param {*} keyInfo 如 ‘name.foo’
   */
  _calcObjectValue(object = {}, keyInfo = '') {
    const keyList = keyInfo.split('.')
    let result = object
    keyList.forEach(v => {
      result = result[v]
    })
    return result
  }
}

function createApiManage() {
  return new ApiManage()
}

export default createApiManage()

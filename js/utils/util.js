// 工具类辅助函数
import qs from 'qs'
import pathToRegexp from 'path-to-regexp'

/**
 * 格式化url 
 * @param {string} api 域名+路径,如 http://www.demo.com/foo/:id
 * @param {object} options 参数
 * @return {string} 返回拼接好的新url地址
 * options.query 查询参数对象 {page: 0, pageSize: 10}
 * options.params 用来填充url, 如pathToRegexp.compile('/user/:id')({id: 123})
 */
export const formatUrl = function (api = '', options = {}) {
  const {
    query = {},
    params = {},
  } = options
  let url = ''
  try {
    let domain = ''
    if (api.match(/[a-zA-z]+:\/\/[^/]*/)) {
      [domain] = api.match(/[a-zA-z]+:\/\/[^/]*/)
      api = api.slice(domain.length)
    }
    api = pathToRegexp.compile(api)(params)
    url = domain + api
  } catch (error) {
    console.error(error)
  }
  return paddSeparatorToUrl(url) + qs.stringify(query)
}

/**
 * @description paddStringToUrl 将对象转化为问号参数形式添加在url地址的后面，会进行URI编码处理
 * @param {string} url 原url地址
 * @return {string} 返回拼接好的新url地址
 */
export function paddSeparatorToUrl(url) {
  const hasSearch = /\?/.test(url)
  return url + (hasSearch ? '&' : '?')
}



const util = {
  formatUrl,
  paddSeparatorToUrl,
}
export default util
import qs from 'qs'
// import pathToRegexp from 'path-to-regexp'

const defaultInit = {
  cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'include', // include, same-origin, *omit
  headers: {
    'content-type': 'application/json'
  },
  method: 'GET', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, cors, *same-origin
  redirect: 'manual', // manual, *follow, error
  referrer: 'client', // *client, no-referrer
}

export const request = async (options = {}) => {
  let { url, data = {}, ...restOptions } = options
  if (!url) {
    console.error('request options.url can not be null')
    return
  }
  const init = { ...defaultInit, ...restOptions }
  // 格式化url
  if (init.method === 'GET') {
    const queryString = qs.stringify(data)
    url = formatUrl(url, queryString)
  }
  // 格式化body
  formatBody(init, data)
  console.log('request', url, init)
  return fetchResult(fetch(url, init))
}

function fetchResult(request) {
  let fetchResponse
  try {
    return request.then(response => {
      // console.log('response', response)
      fetchResponse = response
      if (response.status == 200) {
        // response.json()同样是一个Promise
        let resultJson = response.json()
        return resultJson
      } else {
        throw response
      }
    }).then(res => {
      return Promise.resolve({
        status: fetchResponse.status,
        ok: fetchResponse.ok,
        result: res,
        date: new Date(fetchResponse.headers.map['date']).getTime(),
      })
    }).catch(error => {
      if (error.json) {
        return error.json()
      } else {
        return Promise.reject('请求异常')
      }
    })
  } catch (e) {
    return Promise.reject('请求异常')
  }
}
function formatUrl(url = '', queryString = '') {
  if (!queryString) {
    return url
  }
  if (url.indexOf('?') > -1) {
    url = url + '&' + queryString
  } else {
    url = url + '?' + queryString
  }
  return url
}
function formatBody(init = {}, data = {}) {
  // method为GET或HEAD，body不携带
  if (init.method === 'GET' || init.method === 'HEAD') {
    delete init.body
    return init
  }
  const contentType = init.headers && (init.headers['content-type'] || init.headers['Content-Type'])
  if (!contentType) {
    init.body = JSON.stringify(data)
  } else if (contentType.indexOf('application/json') > -1) {
    init.body = JSON.stringify(data)
  } else if (
    ['application/x-www-form-urlencoded', 'multipart/form-data'].some((v) => {
      return contentType.indexOf(v) > -1
    })
  ) {
    const formdata = new FormData()
    for (let key in data) {
      if (typeof data[key] === 'string') {
        formData.append(key, encodeURI(data[key].toString()))
      } else {
        formData.append(key, params[key])
      }
    }
    init.body = formData
  }
}

export default {
  request
}

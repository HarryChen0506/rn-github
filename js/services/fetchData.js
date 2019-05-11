// 获取数据服务
import { request } from '@utils/http'
import apiManage from './apiManage'
import util from '@utils/util'
import { createNetCache } from './NetCache'
import GitHubTrending from 'GitHubTrending'
class FetchData {
  trending = {
    search({query}) {
      const {lang, since} = query
      let api, options={
        query: {since}
      }
      if (lang) {
        api = 'https://github.com/trending/:lang'
        options.params = {lang}
      } else {
        api = 'https://github.com/trending'
      }
      const url = util.formatUrl(api, options)
      // console.log('url', url)
      return new GitHubTrending().fetchTrending(url)
      // return request({
      //   method: 'GET',
      //   url: apiManage.getApi({hostName: 'herokuapp', keyInfo:'trending.search'}),
      //   data: query
      // })
    },
    cache({query}) {
      const api = apiManage.getApi({hostName: 'herokuapp', keyInfo:'trending.search'})
      const url = util.formatUrl(api, {query})
      return createNetCache({mode: 'LOCAL_FIRST', maxAge: 1000 * 60 * 60 * 4}).getData(url)
    },
    customCache({query}) {
      const {lang, since} = query
      let api, options={
        query: {since}
      }
      if (lang) {
        api = 'https://github.com/trending/:lang'
        options.params = {lang}
      } else {
        api = 'https://github.com/trending'
      }
      const url = util.formatUrl(api, options)
      return createNetCache({mode: 'LOCAL_FIRST'}).setRequest((options) => {
        // console.log('options', options)
        return new GitHubTrending().fetchTrending(options.url)
      }).getData(url)
    },
    removeData({query}) {
      const api = apiManage.getApi({hostName: 'herokuapp', keyInfo:'trending.search'})
      const url = util.formatUrl(api, {query})
      return createNetCache({mode: 'LOCAL_FIRST'}).removeData(url)
    }
  }
}

export default new FetchData()
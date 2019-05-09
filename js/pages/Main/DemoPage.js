import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import NavigationUtil, { BOTTOM_TAB_NAVIGATION } from '../../utils/NavigationUtil'
import { request } from '@utils/http'
import NetCache from '@services/NetCache'
import apiManage from '@services/apiManage'
import util from '@utils/util'
// import GitHubTrending from 'GitHubTrending'
import fetchData from '@services/fetchData'

export default class TrendingPgae extends React.Component {
  static navigationOptions = {
    title: 'TrendingPgae',
    header: null,
  }
  netCache = new NetCache({
    mode: 'NET_FIRST'
  })
  componentDidMount() {
    // 注册工具路由
    const { navigation } = this.props
    NavigationUtil.setNavigation(navigation, BOTTOM_TAB_NAVIGATION)
  }
  handleFetchTest = () => {
    const url = 'https://api.github.com/search/repositories?'
    request({
      url,
      data: {
        q: 'java'
      }
    }).then(res => {
      console.log('res', res)
    })
  }
  handleFormatUrlTest = () => {
    const api = 'https://www.baidu.com/demo/:id'
    const params = {
      id: 123
    }
    const query = {
      name: 123,
      foo: 'harry',
      list: ['h', 'e']
    }
    let url = util.formatUrl(api, { params, query })
    console.log(url)
  }
  handleCacheTest = () => {
    const url = 'https://api.github.com/search/repositories?q=java'
    this.netCache.getData(url).then(res => {
      console.log('res', res)
    }).catch(error => {
      console.log('handleCacheTest fail')
    })
  }
  handleRemoveCache = () => {
    console.log('handleRemoveCache')
    const url = 'https://api.github.com/search/repositories?q=java'
    this.netCache.removeData(url)
    // 清除缓存
    fetchData.trending.removeData({query: {lang:'java', since:'weekly'}})
  }
  handleRemoveAllCache = () => {
    NetCache.clear(() => {
      console.log('清除所有存储成功')
    })
  }
  handleGetTrendingData = () => {
    // const url = 'https://github.com/trending'
    // console.log('document', window.document)
    // new GitHubTrending().fetchTrending(url)
    //   .then((data) => {
    //     console.log('trending daga', data)
    //   }).catch((error) => {
    //     console.log(error)
    //   });
  }
  handleGetThirdTrendingData = () => {
    // fetchData.trending.search({query: {lang:'java', since:'weekly'}}).then(res => {
    //   console.log('res', res)
    // })
    fetchData.trending.cache({query: {lang:'java', since:'weekly'}}).then(res => {
      console.log('res', res)
    })
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>趋势页</Text>
        <Button title='fetch 测试' onPress={() => {
          this.handleFetchTest()
        }}></Button>
        <Button title='formatUrl 测试' onPress={() => {
          this.handleFormatUrlTest()
        }}></Button>
        <Button title='缓存 测试' onPress={() => {
          this.handleCacheTest()
        }}></Button>
        <Button title='缓存 清除' onPress={() => {
          this.handleRemoveCache()
        }}></Button>
        <Button title='所有缓存 清除' onPress={() => {
          this.handleRemoveAllCache()
        }}></Button>
        <Button title='获取api' onPress={() => {
          console.log(apiManage.getApi({ keyInfo: 'popular.search' }))
        }}></Button>
        <Button title='获取trending数据' onPress={this.handleGetTrendingData}></Button>
        <Button title='获取第三方trending数据' onPress={this.handleGetThirdTrendingData}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
})
import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import NavigationUtil, {BOTTOM_TAB_NAVIGATION} from '../../utils/NavigationUtil'
import {request} from '@utils/http'
import NetCache from '@services/NetCache'
import apiManage from '@services/apiManage'

export default class TrendingPgae extends React.Component {
  static navigationOptions = {
    title: 'TrendingPgae',
    header:null, 
  }
  netCache = new NetCache({
    mode: 'NET_FIRST'
  })
  componentDidMount() {
    // 注册工具路由
    const {navigation} = this.props
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
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>趋势页</Text>
        <Button title='fetch 测试' onPress={() => {
          this.handleFetchTest()
        }}></Button>
        <Button title='缓存 测试' onPress={() => {
          this.handleCacheTest()
        }}></Button>
        <Button title='缓存 清除' onPress={() => {
          this.handleRemoveCache()
        }}></Button>
        <Button title='获取api' onPress={() => {
          console.log(apiManage.getApi({keyInfo: 'popular.search'}))
        }}></Button>
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
import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import NavigationUtil, {BOTTOM_TAB_NAVIGATION} from '../../utils/NavigationUtil'
import {request} from '@utils/http'

export default class TrendingPgae extends React.Component {
  static navigationOptions = {
    title: 'TrendingPgae',
    header:null, 
  }
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
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>趋势页</Text>
        <Button title='fetch 测试' onPress={() => {
          this.handleFetchTest()
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
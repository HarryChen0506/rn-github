import React from "react"
import { StyleSheet, View, Text } from "react-native"
import NavigationUtil, {BOTTOM_TAB_NAVIGATION} from '../../utils/NavigationUtil'

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
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>趋势页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
})
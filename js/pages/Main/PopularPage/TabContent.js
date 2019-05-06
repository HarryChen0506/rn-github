import React from "react"
import { StyleSheet, View, Text } from "react-native"
import NavigationUtil, { ROOT_NAVIGATION, TOP_TAB_NAVIGATION, BOTTOM_TAB_NAVIGATION } from '@utils/NavigationUtil'

const tabNames = ['Java', 'Android', 'Ios', 'React', 'React Native', 'PHP', 'Python']
export default class TabContent extends React.Component {
  componentDidMount() {
    // 注册工具路由
    const { navigation } = this.props
    NavigationUtil.setNavigation(navigation, TOP_TAB_NAVIGATION)
  }
  render() {
    const { navigation, item } = this.props
    const { state } = navigation
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>{state.routeName}</Text> */}
        <Text style={styles.text}>{item}</Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginBottom: 30
  }
})
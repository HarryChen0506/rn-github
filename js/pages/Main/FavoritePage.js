import React from "react"
import { StyleSheet, View, Text } from "react-native"
import NavigationUtil, { ROOT_NAVIGATION, TOP_TAB_NAVIGATION, BOTTOM_TAB_NAVIGATION } from '@utils/NavigationUtil'

export default class FavoritePage extends React.Component {
  static navigationOptions = {
    title: 'FavoritePage',
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>收藏页</Text>
        <Text
          style={styles.text}
          onPress={() => {
            // NavigationUtil.goNavigationPage(ROOT_NAVIGATION, 'DetailPage')
            NavigationUtil.goPage({ navigation: navigation }, 'DetailPage')
          }}>跳转到详情页</Text>
        <Text
          style={styles.text}
          onPress={() => {
            NavigationUtil.goNavigationPage(TOP_TAB_NAVIGATION, 'tab2')
          }}>跳转到topTab2页</Text>
        <Text
          style={styles.text}
          onPress={() => {
            NavigationUtil.goPage({ navigation: navigation }, 'TrendingPage')
          }}>跳转到BottomTab trending页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    marginBottom: 30
  }
})
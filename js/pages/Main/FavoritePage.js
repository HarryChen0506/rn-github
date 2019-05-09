import React from "react"
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native"
import navigationUtil, { HOME_TOP_TAB_NAVIGATOR, BOTTOM_TAB_NAVIGATION } from '@utils/NavigationUtil'

export default class FavoritePage extends React.Component {
  static navigationOptions = {
    title: 'FavoritePage',
    header: null,
  }
  componentDidMount() {
    const { navigation } = this.props
    navigationUtil.setNavigation(navigation, BOTTOM_TAB_NAVIGATION)
  }
  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={styles.container}>
          {/* <StatusBar backgroundColor={'blue'} hidden={false} barStyle={'light-content'}/> */}
          <Text>收藏页</Text>
          <Text
            style={styles.text}
            onPress={() => {
              // navigationUtil.goNavigationPage(ROOT_NAVIGATION, 'DetailPage')
              navigationUtil.goPage({ navigation: navigation }, 'DetailPage')
            }}>跳转到详情页</Text>
          <Text
            style={styles.text}
            onPress={() => {
              navigationUtil.navigationToPage(BOTTOM_TAB_NAVIGATION, { routeName: 'PopularPage' })
              setTimeout(() => {
                navigationUtil.navigatorToPage(HOME_TOP_TAB_NAVIGATOR, { routeName: 'tab2' })
              }, 200)
            }}>跳转到topTab2页</Text>
          <Text
            style={styles.text}
            onPress={() => {
              navigationUtil.goPage({ navigation: navigation }, 'TrendingPage')
            }}>跳转到BottomTab trending页</Text>
        </View>
      </SafeAreaView>
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
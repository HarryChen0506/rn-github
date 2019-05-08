import React from "react"
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from "react-native"
import NavigationUtil, { ROOT_NAVIGATION, TOP_TAB_NAVIGATION, BOTTOM_TAB_NAVIGATION } from '@utils/NavigationUtil'

export default class FavoritePage extends React.Component {
  static navigationOptions = {
    title: 'FavoritePage',
    header: null,
  }
  componentDidMount() {
    console.log('FavoritePage componentDidMount', this.props)
    const { navigation } = this.props
    NavigationUtil.setNavigation(navigation, BOTTOM_TAB_NAVIGATION)
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
              // NavigationUtil.goNavigationPage(ROOT_NAVIGATION, 'DetailPage')
              NavigationUtil.goPage({ navigation: navigation }, 'DetailPage')
            }}>跳转到详情页</Text>
          <Text
            style={styles.text}
            onPress={() => {
              // console.log('NavigationUtil', NavigationUtil, NavigationUtil[TOP_TAB_NAVIGATION])
              console.log('global',global)
              NavigationUtil.goNavigationPage(BOTTOM_TAB_NAVIGATION, 'PopularPage')
              // global.navigatorRef.dispatch(
              //   NavigationActions.navigate({ routeName: 'tab2' })
              // );
              // NavigationUtil.goNavigationPage(TOP_TAB_NAVIGATION, 'tab6')
            }}>跳转到topTab2页</Text>
          <Text
            style={styles.text}
            onPress={() => {
              NavigationUtil.goPage({ navigation: navigation }, 'TrendingPage')
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
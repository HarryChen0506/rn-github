import React from "react"
import { StyleSheet, View, Text } from "react-native"
import {createMaterialTopTabNavigator} from "react-navigation"
import NavigationUtil, {ROOT_NAVIGATION, TOP_TAB_NAVIGATION, BOTTOM_TAB_NAVIGATION} from '@utils/NavigationUtil'

class TabContent extends React.Component {
  componentDidMount() {
    // 注册工具路由
    const {navigation} = this.props
    NavigationUtil.setNavigation(navigation, TOP_TAB_NAVIGATION)
  }
  render() {
    const {navigation} = this.props
    const {state} = navigation
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{state.routeName}</Text>
        <Text 
          style={styles.text} 
          onPress={() => {
            // NavigationUtil.goNavigationPage(ROOT_NAVIGATION, 'DetailPage')
            NavigationUtil.goPage({navigation: navigation}, 'DetailPage')
          }}>跳转到详情页</Text>
        <Text 
          style={styles.text} 
          onPress={() => {
            NavigationUtil.goNavigationPage(TOP_TAB_NAVIGATION, 'PopularTab2')
          }}>跳转到topTab2页</Text>
        <Text 
          style={styles.text} 
          onPress={() => {
            NavigationUtil.goPage({navigation: navigation}, 'TrendingPage')
          }}>跳转到BottomTab trending页</Text>
      </View>
    )
  }
}

const HomeTopTabNavigator = createMaterialTopTabNavigator(
  {
    PopularTab1: {
      screen: TabContent,
      navigationOptions: {
        title: 'tab1'
      }
    },
    PopularTab2: {
      screen: TabContent,
      navigationOptions: {
        title: 'tab2'
      }
    },
  }, {
    initialRouteName: 'PopularTab1',
    navigationOptions: {
      // header: null,
    },
    tabBarOptions: {
      style: {
        marginTop: 30
      },
    }
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  text: {
    marginBottom: 30
  }
})

export default HomeTopTabNavigator
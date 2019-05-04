import React from "react"
import { StyleSheet, View, Text } from "react-native"
import { createMaterialTopTabNavigator } from "react-navigation"
import NavigationUtil, { ROOT_NAVIGATION, TOP_TAB_NAVIGATION, BOTTOM_TAB_NAVIGATION } from '@utils/NavigationUtil'

const tabNames = ['Java', 'Android', 'Ios', 'React', 'React Native', 'PHP', 'Python']
class TabContent extends React.Component {
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
const createRouteConfigs = (tabList = []) => {
  const config = {}
  tabList.forEach((item, index) => {
    config[`tab${index}`] = {
      screen: (props) => <TabContent {...props} item={item}/>,
      navigationOptions: {
        title: item,
      }
    }
  })
  return config
}
const HomeTopTabNavigator = createMaterialTopTabNavigator(
  createRouteConfigs(tabNames),
  {
    initialRouteName: 'tab0',
    navigationOptions: {
      // header: null,
    },
    tabBarOptions: {
      upperCaseLabel: false,
      scrollEnabled: true,
      style: {
        marginTop: 30,
      },
      tabStyle: {
        minWidth: 50,
        width: 120,
        height: 50,
      },
      indicatorStyle: {
        height: 2,
        backgroundColor: '#fff',
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
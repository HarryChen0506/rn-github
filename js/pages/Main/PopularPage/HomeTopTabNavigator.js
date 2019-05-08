import React from "react"
import { createMaterialTopTabNavigator } from "react-navigation"
import TabContent from './TabContent'
const tabNames = ['Java', 'Android', 'Ios', 'React', 'React Native', 'PHP', 'Python']

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
        // marginTop: 0,
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

export default HomeTopTabNavigator
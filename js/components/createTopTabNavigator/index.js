import React from "react"
import { createMaterialTopTabNavigator } from "react-navigation"

const createRouteConfigs = (tabList = [], TabContent) => {
  const config = {}
  tabList.forEach((item, index) => {
    const title = typeof item === 'string' ? item : item.showName
    config[`tab${index}`] = {
      screen: (props) => <TabContent {...props} item={item} tabIndex={index} />,
      navigationOptions: {
        title: title,
      }
    }
  })
  return config
}

export const createTopTabNavigator = (tabList = [], TabContent, options = {}) => {
  const initialRouteName = options.initialRouteName || 'tab0'
  return createMaterialTopTabNavigator(
    createRouteConfigs(tabList, TabContent),
    {
      initialRouteName: initialRouteName,
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
}

export default createTopTabNavigator
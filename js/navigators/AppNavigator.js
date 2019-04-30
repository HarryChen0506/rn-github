import React from "react"
import { View, Text } from "react-native"
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer 
} from "react-navigation"
import WelcomePage from '../pages/WelcomePage'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'

const InitNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null,
      }
    },
  }
)

const MainNavigator = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        header: null,
      }
    },
    DetailPage: {
      screen: DetailPage,
    },
  }, {
    initialRouteName: 'HomePage',
  }
)

const RootNavigator = createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  }, {
    initialRouteName: 'Init',
    navigationOptions: {
      header: null,
    }
  }
)

export default createAppContainer(RootNavigator)
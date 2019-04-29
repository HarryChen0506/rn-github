import React from "react"
import { View, Text } from "react-native"
import { createStackNavigator, createAppContainer } from "react-navigation"
import HomePage from './HomePage'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomePage },
    Page1: { screen: Page1 },
    Page2: { screen: Page2 },
    Page3: { screen: Page3 },
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)
export default createAppContainer(AppNavigator)
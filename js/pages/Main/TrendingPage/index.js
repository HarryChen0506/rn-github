/**
 * 已废弃
 */

import React from "react"
import { StyleSheet, View, Text } from "react-native"
import createTopTabNavigator from '@components/createTopTabNavigator'
import { createAppContainer } from "react-navigation"
import navigationUtil, { HOME_TOP_TAB_NAVIGATOR } from '@utils/NavigationUtil'
import TabContent from './TabContent'

const tabList = [
  {
    showName: 'Unknown',
    type: '',
  },
  {
    showName: 'CSS',
    type: 'css',
  },
  {
    showName: 'HTML',
    type: 'html',
  },
  {
    showName: 'Java',
    type: 'java',
  },
  {
    showName: 'Javascript',
    type: 'javascript',
  },
  {
    showName: 'Typescript',
    type: 'typescript',
  },
  {
    showName: 'Vue',
    type: 'vue',
  },
]
const HomeTopTabNavigator = createTopTabNavigator(tabList, TabContent)
const HomeTopTab = createAppContainer(HomeTopTabNavigator)
export default class TrendingPage extends React.Component {
  static navigationOptions = {
    title: 'TrendingPage'
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <HomeTopTab ref={navigatorRef => {
          // console.log('navigatorRef', navigatorRef)
          navigationUtil.setNavigator(HOME_TOP_TAB_NAVIGATOR, navigatorRef)
        }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: 'red',
  },
})
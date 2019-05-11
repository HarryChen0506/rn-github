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
    showName: 'Java',
    type: 'java',
  },
  {
    showName: 'Android',
    type: 'android',
  },
  {
    showName: 'Ios',
    type: 'ios',
  },
  {
    showName: 'React',
    type: 'react',
  },
  {
    showName: 'React Native',
    type: 'react native',
  },
  {
    showName: 'PHP',
    type: 'php',
  },
  {
    showName: 'Python',
    type: 'python',
  },
]
const HomeTopTabNavigator = createTopTabNavigator(tabList, TabContent)
const HomeTopTab = createAppContainer(HomeTopTabNavigator)
export default class PopularPage extends React.Component {
  static navigationOptions = {
    title: 'PopularPage',
    header: null,
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <HomeTopTab ref={navigatorRef => {
          // console.log('navigatorRef', navigatorRef)
          navigationUtil.setNavigator(HOME_TOP_TAB_NAVIGATOR, navigatorRef)
        }}/>
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
/**
 * 已废弃
 */

import React from "react"
import { StyleSheet, View, Text } from "react-native"
import createTopTabNavigator from '@components/createTopTabNavigator'
import { createAppContainer } from "react-navigation"
import navigationUtil, { HOME_TOP_TAB_NAVIGATOR } from '@utils/NavigationUtil'
import TabContent from './TabContent'

const tabNames = ['Java', 'Android', 'Ios', 'React', 'React Native', 'PHP', 'Python']
const HomeTopTabNavigator = createTopTabNavigator(tabNames, TabContent)
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
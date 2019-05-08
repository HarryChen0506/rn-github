/**
 * 已废弃
 */

import React from "react"
import { StyleSheet, View, Text } from "react-native"
import HomeTopTabNavigator from './HomeTopTabNavigator'
import {
  createAppContainer,
} from "react-navigation"
import navigationUtil, { TOP_TAB_NAVIGATION, ROOT_NAVIGATION, BOTTOM_TAB_NAVIGATOR } from '@utils/NavigationUtil'

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
          console.log('navigatorRef', navigatorRef)
          navigationUtil.setNavigator(BOTTOM_TAB_NAVIGATOR, navigatorRef)
        }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'red',
  },
})
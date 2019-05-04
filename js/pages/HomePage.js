import React from "react"
import { StyleSheet, View} from "react-native"
import { createAppContainer } from "react-navigation"
import NavigationUtil, { BOTTOM_TAB_NAVIGATION} from '../utils/NavigationUtil'
import DynamicTabNavigator from '../navigators/DynamicTabNavigator'
const DynamicTab = createAppContainer(DynamicTabNavigator)

export default class DetailPage extends React.Component {
  static navigationOptions = {
    title: 'HomePage',
    header: null
  }
  componentDidMount() {
    const {navigation} = this.props
    NavigationUtil.setNavigation(navigation, BOTTOM_TAB_NAVIGATION)
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <DynamicTab />
      </View>
    )
  }
}
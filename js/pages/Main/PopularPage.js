import React from "react"
import { StyleSheet, View, Text } from "react-native"
import HomeTopTabNavigator from '../../navigators/HomeTopTabNavigator'
import {
  createAppContainer,
} from "react-navigation"

const HomeTopTab =  createAppContainer(HomeTopTabNavigator)
export default class PopularPage extends React.Component {
  static navigationOptions = {
    title: 'PopularPage',
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <HomeTopTab />
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
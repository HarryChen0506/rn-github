import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import DynamicTabNavigator from '../navigators/DynamicTabNavigator'

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'HomePage',
    headerBackTitle: null,
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <DynamicTabNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})
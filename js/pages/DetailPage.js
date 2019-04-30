import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"

export default class DetailPage extends React.Component {
  static navigationOptions = {
    title: 'DetailPage',
    headerBackTitle: '返回',
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{}}>
        <Text>DetailPage页</Text>
      </View>
    )
  }
}
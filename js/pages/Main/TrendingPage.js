import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class TrendingPgae extends React.Component {
  static navigationOptions = {
    title: 'TrendingPgae',
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>趋势页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
})
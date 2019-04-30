import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class FavoritePage extends React.Component {
  static navigationOptions = {
    title: 'FavoritePage',
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>收藏页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
})
import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class MyPage extends React.Component {
  static navigationOptions = {
    title: 'MyPage',
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>我的页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
})
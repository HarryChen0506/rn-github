import React from "react"
import { StyleSheet, View, Text } from "react-native"

export default class PopularPage extends React.Component {
  static navigationOptions = {
    title: 'PopularPage',
    header:null, 
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>流行页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
})
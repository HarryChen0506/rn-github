import React from "react"
import { View, Text } from "react-native"

class Page2 extends React.Component {
  static navigationOptions = {
    
  }
  componentDidMount() {
    console.log('Page2 componentDidMount')
  }
  componentWillUnmount() {
    console.log('Page2 componentWillUnmount')
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Page2页</Text>
      </View>
    )
  }
}
export default Page2
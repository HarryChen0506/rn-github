import React from "react"
import { View, Text, Button } from "react-native"

class HomePage extends React.Component {
  componentDidMount() {
    console.log('HomePage componentDidMount')
  }
  componentWillUnmount() {
    console.log('HomePage componentWillUnmount')
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home 首页</Text>
        <Button title='跳转page1' 
          onPress={() => {
            navigation.navigate('Page1')
          }}
        ></Button>
        <Button title='跳转page2' 
          onPress={() => {
            navigation.navigate('Page2')
          }}
        ></Button>
      </View>
    )
  }
}
export default HomePage
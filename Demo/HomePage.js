import React from "react"
import { View, Text, Button } from "react-native"

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'HomePage',
    headerBackTitle: null,
    header:null, 
  }
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
            navigation.navigate('Page1',{id: '001', title: 'hello world'})
          }}
        ></Button>
        <Button title='跳转page2' 
          onPress={() => {
            navigation.navigate('Page2')
          }}
        ></Button>
        <Button title='跳转TopTab' 
          onPress={() => {
            navigation.navigate('Top')
          }}
        ></Button>
      </View>
    )
  }
}
export default HomePage
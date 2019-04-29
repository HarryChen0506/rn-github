import React from "react"
import { View, Text, Button } from "react-native"
import { NavigationEvents } from 'react-navigation'

class Page1 extends React.Component {
  componentDidMount() {
    console.log('Page1 componentDidMount')
  }
  componentWillUnmount() {
    console.log('Page1 componentWillUnmount')
  }
  render() {
    const {navigation} = this.props
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Page1页</Text>
        <NavigationEvents
          onWillFocus={payload => console.log('will focus',payload)}
          onDidFocus={payload => console.log('did focus',payload)}
          onWillBlur={payload => console.log('will blur',payload)}
          onDidBlur={payload => console.log('did blur',payload)}
        />
        <Button title='跳转page2' 
          onPress={() => {
            navigation.navigate('Page2')
          }}
        ></Button>
      </View>
    )
  }
}
export default Page1
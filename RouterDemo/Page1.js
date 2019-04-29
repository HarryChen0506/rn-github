import React from "react"
import { View, Text, Button } from "react-native"
import { NavigationEvents } from 'react-navigation'

class Page1 extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.getParam('title', '默认标题')}`,
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: 'red',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'blue'
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="red"
        />
      ),
    }
  }
  componentDidMount() {
    console.log('Page1 componentDidMount')
  }
  componentWillUnmount() {
    console.log('Page1 componentWillUnmount')
  }
  render() {
    const {navigation} = this.props
    const id = navigation.getParam('id', 'NO-ID')
    const name = navigation.getParam('name', 'NO-NAME')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Page1页</Text>
        <Text>id: {id} - {name}</Text>
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
        <Button title='更新导航栏' 
          onPress={() => {
            navigation.setParams({title: 'Updated!'})
          }}
        ></Button>
      </View>
    )
  }
}
export default Page1
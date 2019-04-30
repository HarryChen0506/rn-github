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
      headerBackTitle: `返回`,
      headerRight: (
        <Button
          onPress={() => navigation.getParam('increaseCount')(2)}
          title="Add"
          color="red"
        />
      ),
    }
  }
  state = {
    count: 0
  }
  componentDidMount() {
    console.log('Page1 componentDidMount')
    this.props.navigation.setParams({
      increaseCount: this._increaseCount
    })
  }
  componentWillUnmount() {
    console.log('Page1 componentWillUnmount')
  }
  _increaseCount = (step = 1) => {
    this.setState({
      count: this.state.count + step
    })
  }
  render() {
    const {navigation} = this.props
    const id = navigation.getParam('id', 'NO-ID')
    const name = navigation.getParam('name', 'NO-NAME')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Page1页</Text>
        <Text>id: {id} - {name}</Text>
        <Text>count: {this.state.count}</Text>
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
import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import NavigationUtil, {ROOT_NAVIGATION} from '../utils/NavigationUtil'
export default class WelcomePage extends React.Component {
  static navigationOptions = {
    title: 'WelcomePage',
    headerBackTitle: null,
    header:null, 
  }

  componentDidMount() {
    const {navigation} = this.props
    NavigationUtil.setNavigation(navigation, ROOT_NAVIGATION)
    // console.log('WelcomePage', navigation)
    this.timerId = setTimeout(() => {
      NavigationUtil.resetHomePage()
    }, 1000)
  }

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>欢迎页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
})

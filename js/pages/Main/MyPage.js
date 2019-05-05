import React from "react"
import { StyleSheet, View, Text, Button } from "react-native"
import { connect } from "react-redux"
import actions from "@model/actions"

class MyPage extends React.Component {
  static navigationOptions = {
    title: 'MyPage',
    header: null,
  }
  componentDidMount() {
    console.log('myPage props', this.props)
  }
  render() {
    const { navigation, counter } = this.props
    return (
      <View style={styles.container}>
        <Text>我的页</Text>
        <Text>count: {counter.count}</Text>
        <Button
          title='add'
          onPress={() => {
            this.props.onIncrease(2)
          }}
        ></Button>
        <Button
          title='reduce'
          onPress={() => {
            this.props.onDecrease(1)
          }}
        ></Button>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  onIncrease: (step) => dispatch(actions.onCounterIncrease(step)),
  onDecrease: (step) => dispatch(actions.onCounterDecrease(step)),
})
export default connect(mapStateToProps, mapDispatchToProps)(MyPage)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
})


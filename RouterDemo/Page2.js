import React from "react"
import { StyleSheet, View, Text, FlatList, TouchableHighlight, ActivityIndicator } from "react-native"
const CITY_LIST = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '南京',
  '重庆',
  '武汉',
  '天津',
  '成都',
  '苏州',
  '郑州',
  '合肥'
]
class Page2 extends React.Component {
  static navigationOptions = {
    
  }
  state = {
    refreshing: false,
    list: []
  }
  componentDidMount() {
    // console.log('Page2 componentDidMount')
    this.setState({
      list: [...CITY_LIST]
    })
  }
  componentWillUnmount() {
    // console.log('Page2 componentWillUnmount')
  }
  _onPressButton = () => {
    console.log('_onPressButton')
  }
  _onRefresh = () => {
    this.setState({
      refreshing: true
    })
    setTimeout(() => {
      this.setState({
        refreshing: false,
        list: [...this.state.list].reverse()
      })
    }, 2000)
  }
  _onEndReached = () => {
    this._loadMore()
  }
  _loadMore = () => {
    setTimeout(() => {
      console.log('_onEndReached')
      this.setState({
        list: this.state.list.concat(CITY_LIST.slice(0, 3)),
        refreshing: false,
      })
    }, 2000)
  }
  _renderItem = ({item, separators}) => {
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
      >
        <View style={styles.itemWrap}>
          <Text>{item}</Text>
        </View>
      </TouchableHighlight>
    )
  }
  _renderItemSeparator = () => {
    return (
      <View style={styles.itemSeparator}></View>
    )
  }
  genIndicator() {
    return <View style={styles.indicatorContainer}>
        <ActivityIndicator
            style={styles.indicator}
            size='large'
            tintColor='red'
            animating={true}
        />
        <Text>正在加载更多</Text>
    </View>
  }
  render() {
    return (
      <View style={styles.pageWrap}>
        <FlatList
          style={styles.flatWrap}
          data={this.state.list}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `${item}_${index}`}
          ItemSeparatorComponent={this._renderItemSeparator}
          onRefresh={this._onRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this.genIndicator}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  pageWrap: {
    flex: 1, 
  },
  flatWrap: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemWrap: {
    backgroundColor: '#f0f0f0',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSeparator: {
    height: 1,
    backgroundColor: 'red',
    marginBottom: 20
  },
  indicatorContainer: {
    alignItems: "center"
  },
  indicator: {
    color: 'red',
    margin: 10
  }
})
export default Page2
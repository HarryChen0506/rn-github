import React from "react"
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native"
import NavigationUtil, { TOP_TAB_NAVIGATION } from '@utils/NavigationUtil'
import { connect } from "react-redux"
import actions from "@model/actions"
import popular_data from '@mock/popular'
import ListItem from './ListItem'

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
class TabContent extends React.Component {
  componentDidMount() {
    // 注册工具路由
    const { navigation } = this.props
    NavigationUtil.setNavigation(navigation, TOP_TAB_NAVIGATION)
  }
  _onPressItem = (item) => {
    console.log('_onPressButton item', item)
  }
  _renderItem = ({item}) => {
    return (
      <ListItem 
        item={item} 
        onPressItem={this._onPressItem}
      />
    )
  }
  _genIndicator() {
    return <View style={styles.indicatorContainer}>
      <ActivityIndicator
        style={styles.indicator}
        size='large'
        tintColor='red'
        color='red'
        animating={true}
      />
      <Text>正在加载更多</Text>
    </View>
  }
  _onRefresh = () => {
    console.log('_onRefresh')
  }
  _onEndReached = () => {
    console.log('_onEndReached')
  }
  render() {
    const { item, counter } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.flatWrap}
          data={popular_data.items}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          onRefresh={this._onRefresh}
          refreshing={false}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this._genIndicator}
        />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  counter: state.counter
})
const mapDispatchToProps = dispatch => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(TabContent)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  text: {
    marginBottom: 30
  },
  flatWrap: {
    flex: 1,
  },
  indicatorContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  indicator: {
    color: 'red',
    marginBottom: 10
  },
})
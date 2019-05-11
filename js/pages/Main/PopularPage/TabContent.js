import React from "react"
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import actions, {popularActions} from "@model/actions"
import popular_data from '@mock/popular'
import ListItem from './ListItem'

class TabContent extends React.Component {
  constructor(props) {
    super(props)
    this.type = props.item && props.item.type
  }
  componentDidMount() {
    this.getRefreshData()
  }
  getRefreshData = () => {
    console.log('getRefreshData', this.type)
    if (this.type === 'java') {
      this.props.onPopularRefresh({storeName: this.type})
    }
  }
  calcItems = () => {
    const { popular = {} } = this.props
    if (popular[this.type]) {
      return popular[this.type].items || []
    }
    return []
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
    const loadMore = <View style={styles.indicatorContainer}>
      <ActivityIndicator
        style={styles.indicator}
        size='large'
        tintColor='red'
        color='red'
        animating={true}
      />
      <Text>正在加载更多</Text>
    </View>

    return null
  }
  _onRefresh = () => {
    console.log('_onRefresh')
    this.getRefreshData()
  }
  _onEndReached = () => {
    console.log('_onEndReached')
  }
  _calcRefreshingStatus = () => {
    const { popular = {} } = this.props
    if (popular[this.type] && popular[this.type].refresh_status === "refreshing") {
      return true
    }
    return false
  }
  render() {
    const { item, counter } = this.props
    const items = this.calcItems()
    return (
      <View style={styles.container}>
        <Text>{typeof item === 'string' ? item : JSON.stringify(item)}</Text>
        <FlatList
          style={styles.flatWrap}
          data={items}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `${item.id}_${index}`}
          onRefresh={this._onRefresh}
          refreshing={this._calcRefreshingStatus()}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.1}
          ListFooterComponent={this._genIndicator}
        />
      </View>
    )
  }
}
const mapStateToProps = state => ({
  counter: state.counter,
  popular: state.popular
})
const mapDispatchToProps = dispatch => ({
  onPopularRefresh: ({storeName}) => dispatch(popularActions.onPopularRefresh({storeName}))
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
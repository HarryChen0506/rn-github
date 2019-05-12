import React from "react"
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native"
import { connect } from "react-redux"
import { withNavigationFocus } from 'react-navigation';
import { popularActions } from "@model/actions"
import ListItem from './ListItem'

class TabContent extends React.Component {
  constructor(props) {
    super(props)
    this.type = props.item && props.item.type
    this.query = {
      pageNum: 1,
      pageSize: 10,
      sort: 'stars',
      order: 'desc',
    }
    this.didRefresh = false
  }
  componentDidMount() {
    const {isFocused} = this.props
    if (isFocused) {
      this.getRefreshData()
      this.didRefresh = true
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.didRefresh && nextProps.isFocused) {
      this.getRefreshData()
      this.didRefresh = true
    }
  }
  getRefreshData = () => {
    // console.log('getRefreshData', this.type)
    const { pageNum, pageSize } = this.query
    this.props.onPopularRefresh({ storeName: this.type, pageNum, pageSize })
  }
  getLoadmoreData = () => {
    // console.log('getLoadmoreData', this.type)
    const store = this.getStore()
    if (store.hasMore) {
      this.props.onPopularLoadmore({ storeName: this.type, pageNum: store.pageNum + 1, pageSize: store.pageSize })
    }
  }
  calcItems = () => {
    const { popular = {} } = this.props
    if (popular[this.type]) {
      return popular[this.type].items || []
    }
    return []
  }
  getStore() {
    const { popular } = this.props
    const {pageNum, pageSize} = this.query
    let store = popular[this.type]
    if (!store) {
      store = {
        items: [],
        loadmore_status: 'loading',
        pageNum: pageNum,
        pageSize: pageSize,
        hasMore: false,
      }
    }
    return store
  }
  _onPressItem = (item) => {
    console.log('_onPressButton item', item)
  }
  _renderItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        onPressItem={this._onPressItem}
      />
    )
  }
  _genIndicator = () => {
    const store = this.getStore()
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
    return store.hasMore ? loadMore : null
  }
  _onRefresh = () => {
    // console.log('_onRefresh')
    this.getRefreshData()
  }
  _onEndReached = () => {
    // console.log('_onEndReached')
    this.getLoadmoreData()
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
        {/* <Text>{typeof item === 'string' ? item : JSON.stringify(item)}</Text> */}
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
  popular: state.popular
})
const mapDispatchToProps = dispatch => ({
  onPopularRefresh: ({ storeName, pageNum, pageSize }) => dispatch(popularActions.onPopularRefresh({ storeName, pageNum, pageSize })),
  onPopularLoadmore: ({ storeName, pageNum, pageSize }) => dispatch(popularActions.onPopularLoadmore({ storeName, pageNum, pageSize }))
})
// export default connect(mapStateToProps, mapDispatchToProps)(TabContent)
export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(TabContent))


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
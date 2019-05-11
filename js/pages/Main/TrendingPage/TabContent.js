import React from "react"
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from "react-native"
import fetchData from '@services/fetchData'
import ListItem from './ListItem'

class TabContent extends React.Component {
  state = {
    dataList: [],
    query: {
      lang: this.props.item && this.props.item.type,
      since:'weekly'
    }
  }
  componentDidMount() {
    console.log('TabContent componentDidMount', this.props)
    this.initialPage()
  }
  initialPage = () => {
    this.getData()
  }
  getData = () => {
    console.log('this.state', this.state)
    const {query} = this.state
    fetchData.trending.cache({query}).then(res => {
      console.log('res', res)
      this.setState({
        dataList: (res && res.items) || [],
      }, () =>  {
        
      })
    })
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
    return null
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
        {/* <Text>{typeof item === 'string' ? item : JSON.stringify(item)}</Text> */}
        <FlatList
          style={styles.flatWrap}
          data={this.state.dataList}
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

export default TabContent

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

import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList, ActivityIndicator} from 'react-native';

const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
class Demo extends Component {
  state = { 
    isLoading: true,
    dataSource: []
  }
  componentDidMount(){
    setTimeout(this._fetchData, 100)
  }

  _fetchData = () => {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('res', responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        })
      })
      .catch((error) =>{
        console.error(error)
      })
  }
  _renderLoading = () => {
    return (
      <View style={styles.loading}>
        <Text style={styles.loadingText}>loading</Text>
      </View>
    )
  }
  _renderMovieItem = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.left}>
          <Image source={{uri: item.posters.thumbnail}} style={styles.image}></Image>
        </View>
        <View style={styles.right}>
          <Text>{item.title}</Text>
          <Text>{item.year}</Text>
        </View>
      </View>
    )
  }
  render() {
    if (this.state.isLoading) {
      return this._renderLoading()
    }
    return (
      <View style={styles.container}>
         <FlatList
          style={styles.list}
          data={this.state.dataSource}
          keyExtractor={(item, index) => item.id}
          renderItem={this._renderMovieItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999',
  },
  loadingText: {
    color: 'red',
    fontSize: 40,
  },
  list: {
    width: '100%',
    flex: 1,
    paddingTop: 20,
  },
  item: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: 20,
  },
  left: {
    marginRight: 20,
  },
  right: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 150,
  }
})

export default Demo

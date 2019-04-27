
import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, ActivityIndicator} from 'react-native';


class Demo extends Component {
  state = { 
    isLoading: true,
    dataSource: []
  }
  componentDidMount(){
    fetch('https://facebook.github.io/react-native/movies.json')
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

  render() {
    return (
      <View style={styles.container}>
         <FlatList
          data={this.state.dataSource}
          keyExtractor={(item, index) => item.id}
          renderItem={({item}) => 
            <Text 
              style={styles.item} 
            >{item.title}-{item.id}</Text>}
        />
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
  item: {
    fontSize: 40,
  }
})

export default Demo

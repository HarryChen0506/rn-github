import React from "react"
import { StyleSheet, View, Text, Image, TouchableHighlight } from "react-native"

export default class ListItem extends React.PureComponent {
  componentDidMount() { }
  _onPressItem = () => {
    const { onPressItem, item } = this.props
    typeof onPressItem === 'function' && onPressItem(item)
  }
  render() {
    const { item, counter } = this.props
    return (
      <TouchableHighlight
        style={styles.itemWrap}
        activeOpacity={0.9}
        underlayColor='#f1f1f1'
        onPress={this._onPressItem}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            {item.full_name}
          </Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
          <View style={styles.row}>
            <View style={styles.row}>
              <Text style={styles.text}>Author:</Text>
              <Image style={{ height: 22, width: 22 }}
                source={{ uri: item.owner.avatar_url }}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Star:</Text>
              <Text>{item.stargazers_count}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  itemWrap: {
    // marginBottom: 10,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginVertical: 5,
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: '#ddd',
    shadowColor: 'gray',
    shadowOffset: { width: 1.5, height: 1.5 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2
  },
  title: {
    fontSize: 16,
    marginBottom: 2,
    color: '#212121',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    marginBottom: 2,
    color: '#757575',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
  },
  text: {
    marginRight: 5
  }
})
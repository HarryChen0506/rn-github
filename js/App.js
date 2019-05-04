import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from '@navigators/AppNavigator'
import {Provider} from 'react-redux'
import store from '@model/store'

type Props = {};

export default class App extends Component<Props> {
  handleNavigationChange = (prevState, newState, action) => {
    // console.log('handleNavigationChange', prevState, newState, action)
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}


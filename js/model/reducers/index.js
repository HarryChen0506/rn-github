import {combineReducers} from 'redux'
import {createNavigationReducer} from 'react-navigation-redux-helpers'
import AppNavigator  from '@navigators/AppNavigator'
import counter from './counter'
import popular from './popular'

const navReducer = createNavigationReducer(AppNavigator)

export default combineReducers({
  nav: navReducer,
  counter,
  popular,
})
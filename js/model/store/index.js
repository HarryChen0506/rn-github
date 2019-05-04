import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { middleware } from '@navigators/AppNavigator'

const middlewares = [
  middleware,
  thunk,
]

/**
 * 创建store
 */
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
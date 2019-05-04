import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from '../reducers'
import { middleware } from '@navigators/AppNavigator'

const middlewares = [
  middleware,
  thunk,
  logger,
]

/**
 * 创建store
 */
const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
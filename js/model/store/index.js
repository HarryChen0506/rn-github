import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
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
const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)))
// const store = createStore(reducers, applyMiddleware(...middlewares))
export default store
import {combineReducers} from 'redux'
import {rootCom, RootNavigator} from '@navigators/AppNavigator'
import counter from './counter'

//1.指定默认state
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom))
/**
 * 2.创建自己的 navigation reducer，
 */
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state)
    // 如果`nextState`为null或未定义，只需返回原始`state`
    return nextState || state
}

export default combineReducers({
  nav: navReducer,
  counter,
})
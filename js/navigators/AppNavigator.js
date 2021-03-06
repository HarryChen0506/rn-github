import React from "react"
import { View, Text } from "react-native"
import { 
  createSwitchNavigator, 
  createStackNavigator, 
  createAppContainer 
} from "react-navigation"
import {
  createReactNavigationReduxMiddleware, 
  createReduxContainer
} from 'react-navigation-redux-helpers'
import {connect} from 'react-redux'
import WelcomePage from '@pages/WelcomePage'
import DetailPage from '@pages/DetailPage'
import DynamicTabNavigator from './DynamicTabNavigator'

const InitNavigator = createStackNavigator(
  {
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null,
      }
    },
  }
)

const MainNavigator = createStackNavigator(
  {
    HomePage: DynamicTabNavigator,
    DetailPage: {
      screen: DetailPage,
    },
  }, {
    initialRouteName: 'HomePage',
  }
)

export const RootNavigator = createAppContainer(
  createSwitchNavigator(
    {
      Init: InitNavigator,
      Main: MainNavigator,
    }, {
      initialRouteName: 'Init',
      navigationOptions: {
        header: null,
      }
    }
  )
)

/**
 * 1.初始化react-navigation与redux的中间件，
 * 该方法的一个很大的作用就是为createReduxContainer的key设置actionSubscribers(行为订阅者)
 * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29
 * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97
 * @type {Middleware}
 */
export const middleware = createReactNavigationReduxMiddleware(
  state => state.nav,
  'root'
)

/**
 * 2.将根导航器组件传递给 createReduxContainer 函数,
 * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件；
 * 注意：要在createReactNavigationReduxMiddleware之后执行
 */
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root')

/**
 * State到Props的映射关系
 * @param state
 */
const mapStateToProps = state => ({
  state: state.nav,
})

/**
* 3.连接 React 组件与 Redux store
*/
export default connect(mapStateToProps)(AppWithNavigationState)

// export default RootNavigator
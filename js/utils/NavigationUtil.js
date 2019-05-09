
import {NavigationActions} from 'react-navigation'

export const ROOT_NAVIGATION = 'rootNavigation'
export const BOTTOM_TAB_NAVIGATION = 'bottomTabNavigation'
export const TOP_TAB_NAVIGATION = 'topTabNavigation'

export const ROOT_NAVIGATOR = 'rootNavigator'
export const BOTTOM_TAB_NAVIGATOR= 'bottomTabNavigator'
export const HOME_TOP_TAB_NAVIGATOR = 'HomeTopTabNavigator'

class NavigationUtil {
  constructor() {}
  navigations = {} // 具体路由, 组件的props.navigation获取
  navigators = {} // 通过createMaterialTopTabNavigator等创建的navigator
  setNavigator(navigatorName, navigator) {
    switch(navigatorName) {
      case ROOT_NAVIGATION:
        this.navigators[ROOT_NAVIGATION] = navigator
        break
      case BOTTOM_TAB_NAVIGATION:
        this.navigators[BOTTOM_TAB_NAVIGATION] = navigator
        break
      case HOME_TOP_TAB_NAVIGATOR:
        this.navigators[HOME_TOP_TAB_NAVIGATOR] = navigator
        break
      default:
        this.navigators[navigatorName] = navigator
    }
  }
  navigatorToPage(navigatorName, {routeName, params}) {
    const navigator = this.navigators[navigatorName]
    if (!navigator) {
      console.error('NavigationUtil navigator can not be null!')
      return
    }
    this.navigators[navigatorName].dispatch(
      NavigationActions.navigate({ routeName, params })
    )
  }

  
  setNavigation(navigation, type) {
    switch(type) {
      case ROOT_NAVIGATION:
        this.navigations[ROOT_NAVIGATION] = navigation
        break
      case BOTTOM_TAB_NAVIGATION:
        this.navigations[BOTTOM_TAB_NAVIGATION] = navigation
        break
      case TOP_TAB_NAVIGATION:
        this.navigations[TOP_TAB_NAVIGATION] = navigation
        break
      default:
        this.navigations[type] = navigation
    }
  }
  resetHomePage(params = {}, routeName) {
    const navigation = params.navigation || this.navigations[ROOT_NAVIGATION]
    if (navigation) {
      navigation.navigate(routeName || 'Main')
    } else {
      console.error('navigation can not be null!')
    }
  }
  /**
   * 跳转当前导航器某个路由
   * @param {*} param0 当前导航器
   * @param {*} routeName 
   */
  goPage({navigation}, routeName) {
    if (navigation) {
      navigation.navigate(routeName)
    } else {
      console.error('navigation canot be null!')
    }
  }
  /**
   * 跳转指定导航器某个路由
   * @param {*} navigationName 指定导航器
   * @param {*} {routeName} 路由名
   */
  navigationToPage(navigationName, {routeName, params}) {
    const navigation = this.navigations[navigationName]
    if (!navigation) {
      console.error('NavigationUtil navigationName can not be null!')
      return
    } 
    navigation.navigate(routeName, params)
  }
}

export default new NavigationUtil()
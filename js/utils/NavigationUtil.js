export const ROOT_NAVIGATION = 'rootNavigation'
export const BOTTOM_TAB_NAVIGATION = 'bottomTabNavigation'
export const TOP_TAB_NAVIGATION = 'topTabNavigation'
export default class NavigationUtil {
  static setNavigation(navigation, type) {
    switch(type) {
      case ROOT_NAVIGATION:
        NavigationUtil[ROOT_NAVIGATION] = navigation
        break
      case BOTTOM_TAB_NAVIGATION:
        NavigationUtil[BOTTOM_TAB_NAVIGATION] = navigation
        break
      case TOP_TAB_NAVIGATION:
        NavigationUtil[TOP_TAB_NAVIGATION] = navigation
        break
      default:
        NavigationUtil[ROOT_NAVIGATION] = navigation
    }
  }
  static resetHomePage(params = {}, routeName) {
    const navigation = params.navigation || NavigationUtil[ROOT_NAVIGATION]
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
  static goPage({navigation}, routeName) {
    if (navigation) {
      navigation.navigate(routeName)
    } else {
      console.error('navigation canot be null!')
    }
  }
  /**
   * 跳转指定导航器某个路由
   * @param {*} navigationName 指定导航器
   * @param {*} routeName 路由名
   */
  static goNavigationPage(navigationName, routeName) {
    const navigation = NavigationUtil[navigationName]
    if (!navigation) {
      console.error('NavigationUtil navigationName canot be null!')
      return
    } else {
      navigation.navigate(routeName)
    }
  }

}
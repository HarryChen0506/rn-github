export default class NavigationUtil {
  static rootNavigation = null
  static tabNavigation = null
  static setNavigation(navigation, type) {
    switch(type) {
      case 'rootNavigation':
        NavigationUtil.rootNavigation = navigation
        break
      case 'tabNavigation':
        NavigationUtil.tabNavigation = navigation
      default:
        NavigationUtil.rootNavigation = navigation
    }
  }
  static resetHomePage(params = {}, routeName) {
    const navigation = params.navigation || NavigationUtil.rootNavigation
    if (navigation) {
      navigation.navigate(routeName || 'Main')
    } else {
      console.error('navigation can not be null!')
    }
  }

  static goPage({navigation}, routeName) {
    if (navigation) {
      navigation.navigate(routeName || 'Main')
    } else {
      console.error('navigation canot be null!')
    }
  }

}
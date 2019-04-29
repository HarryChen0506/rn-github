
import { createMaterialTopTabNavigator } from "react-navigation"
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const AppTopTabNavigator = createMaterialTopTabNavigator(
  {
    Page1: { screen: Page1 },
    Page2: { screen: Page2 },
    Page3: { screen: Page3 },
  }
)
export default AppTopTabNavigator
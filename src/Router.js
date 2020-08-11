import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './pages/Home'
import About from './pages/About'

const Router = createStackNavigator({
  
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerShown: false
    }
  },

})

export default createAppContainer(Router)

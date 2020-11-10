import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './pages/Home'
import About from './pages/About'
import Maps from './pages/Maps'
import Wheater from './pages/Wheater'

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
  Maps: {
    screen: Maps,
    navigationOptions: {
      headerShown: false
    }
  },
  Wheater: {
    screen: Wheater,
    navigationOptions: {
      headerShown: false
    }
  }
})

export default createAppContainer(Router)

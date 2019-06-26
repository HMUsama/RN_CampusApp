import { createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import Login from '../screens/Login'
import Dashboard from '../screens/Dashboard'

const StackNavigator = createStackNavigator({
        Login: {
          screen: Login
        },
        Dashboard: {
          screen: Dashboard
        },
},
    {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator

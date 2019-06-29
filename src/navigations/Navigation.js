import { createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import Login from '../screens/Login'
import Register from '../screens/Register'
import Dashboard from '../screens/Dashboard'

const StackNavigator = createStackNavigator({
        Login: {
          screen: Login
        },
        Register: {
          screen: Register
        },
        Dashboard: {
          screen: Dashboard
        },
},
    {
    initialRouteName: "Dashboard",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator

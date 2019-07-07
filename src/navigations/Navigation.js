import { createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import Login from '../screens/Login'
import Register from '../screens/Register'
import Drawer from '../navigations/Drawer'

const StackNavigator = createStackNavigator({
        // Login: {
        //   screen: Login
        // },
        // Register: {
        //   screen: Register
        // },
        Drawer: {
          screen: Drawer
        },
},
    {
    // initialRouteName: "Login",
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   })

const Navigator = createAppContainer(StackNavigator)

export default Navigator

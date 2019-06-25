import { createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import Login from '../screens/Login'

const StackNavigator = createStackNavigator({
        Login: {
          screen: Login
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

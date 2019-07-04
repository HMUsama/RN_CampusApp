import React from 'react'
import { 
        createMaterialTopTabNavigator, 
        createDrawerNavigator, 
        createStackNavigator, 
        createAppContainer } from "react-navigation"
import {Platform,Dimensions} from 'react-native' 
import MenuDrawer from '../components/menuBar/MenuBar'
import JobsView from '../screens/JobsView'
import JobsDetails from '../components/jobsView/JobsDetails'
import CreateResume from '../screens/createResume'



const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.85,
    contentComponent:({navigation})=>{
        return(<MenuDrawer navigation={navigation}/>)
    }
}
const StackNavigator = createStackNavigator({
    JobsView: {
        screen: JobsView
      },
    JobsDetails: {
        screen: JobsDetails
      },
    CreateResume: {
    screen: CreateResume
    },
})
const DrawerNavigator = createDrawerNavigator(
    {   
        JobsView: {
        screen: JobsView
        },
        CreateResume: {
        screen: CreateResume
        },
        JobsDetails: {
            screen: JobsDetails
          },
    },
    DrawerConfig
)

const Drawer = createAppContainer(DrawerNavigator)

export default Drawer
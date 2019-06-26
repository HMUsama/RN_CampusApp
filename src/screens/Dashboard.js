import React from 'react';
import { StyleSheet,  View, Image,
         Dimensions,KeyboardAvoidingView,
         ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import {  Container, Content, Header,Left,Title,Button,Footer,
     ListItem,Body, InputGroup, Input, Text, Picker} from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
import pice from '../../assets/background.jpg'


const { width:WIDTH } = Dimensions.get('window')

export default class Dashboard extends React.Component {
  constructor(){
    super()
    this.state = {
      showPass : true,
      press: false,
    }
  }


render() {
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
      <ImageBackground source={pice} style={styles.bgImageContainer}>
     

      </ImageBackground>
  </Container>
    );
  }
}

const styles = StyleSheet.create({
    bgImageContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center'
    },
})


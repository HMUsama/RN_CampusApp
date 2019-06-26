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

export default class Login extends React.Component {
  constructor(){
    super()
    this.state = {
      showPass : true,
      press: false,
    }
  }

  showPass=()=>{
    if(this.state.press==false){
      this.setState({
        showPass:false,
        press:true
      })
    }else{
      this.setState({
        showPass:true,
        press:false
      })
    }
  }
  
  Login=()=>{
    this.props.navigation.navigate('Dashboard')
  }

render() {
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
      <ImageBackground source={pice} style={styles.bgImageContainer}>
        <View style={styles.logoContainer}>
          {/* <Image src={} style={styles.logo}/> */}
          <Icon name={'envira'} size={80} color={'rgba(0, 0, 0, 0.6)'}/>
          {/* <Text style={styles.logoText}>Login Here</Text> */}
        </View>

        <View style={styles.InputContainer}>
          <Icon name={'user'} size={28} color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon}/>
          <TextInput
          style={styles.input}
          placeholder={'User Name'}
          placeholderTextColor={'#ffff'}
          underlineColorAndroid='transparent'
          />
        </View>
        <View style={styles.InputContainer}>
          <Icon name={'lock'} size={28} color={'rgba(255,255,255,0.7)'}
          style={styles.inputIcon}/>
          <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={this.state.showPass}
          placeholderTextColor={'#ffff'}
          underlineColorAndroid='transparent'
          />
        <TouchableOpacity style={styles.btnEye}
          onPress={this.showPass.bind(this)}
        >
          <Icon name={this.state.press ==false ?'eye-slash':'eye'} size={26} color={'rgba(255,255,255,0.7)'}/>
        </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text} onPress={this.Login}> Login</Text>
        </TouchableOpacity>

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
    logoContainer:{
      alignItems:'center',
      marginBottom:50,
    },
    logo:{
      width:120,
      height:120,
    },
    logoText:{
      color:'#fff',
      fontSize:20,
      fontWeight:'500',
      marginTop:10,
      opacity:0.5,
    },
    InputContainer:{
     marginTop:10
    },
    input:{
      width:WIDTH - 55,
      height:45,
      borderRadius:25,
      fontSize:16,
      paddingLeft:45,
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'#fff',
      marginHorizontal:25, 
    },
    inputIcon:{
      position:'absolute',
      top:8,
      left:37,
    },
    btnEye:{
      position:'absolute',
      top:8,
      right:37,
    },
    btnLogin:{
      width:WIDTH -55,
      height:45,
      borderRadius:25,
      backgroundColor:'#39436D',
      justifyContent:'center',
      marginTop:20
    },
    text:{
      color:'#fff',
      fontSize:16,
      textAlign:'center',
    },
})


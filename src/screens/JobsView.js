import React from 'react';
import { StyleSheet,  View, Image,
         Dimensions,KeyboardAvoidingView,
         ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import {  Container, Content, Header,Left,Title,Button,Footer,
     ListItem,Body, InputGroup, Input, Text, Picker} from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
import pice from '../../assets/background.jpg'
import {connect} from 'react-redux'
import {signInUR} from '../store/actions/authActionUR'


const { width:WIDTH } = Dimensions.get('window')

class JobsView extends React.Component {
  constructor(){
    super()
    this.state = {
      email:'',
      password:'',
      status:false,
      auth:false,
      showPass : true,
      press: false,
    }
  }
showPassword=()=>{
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

hundleChange=(e)=>{
  console.log("====================================",e.target.value)
  this.setState({
      [e.target.id]:e.target.value
  })
}
  LoginSub=()=>{
    if(!this.state.email){
      // alert(" Insert Email ");
      console.log(" Insert Email ");
  }else if(!this.state.password) {
    // alert(" Insert Password ");
    console.log(" Insert Password ");
  }
  else if(this.state.email || this.state.password){
    this.props.signInUR(this.state);
  }
  // console.log("User Login",e)
  // this.props.signInUR(this.state);
    // this.props.navigation.navigate('Register')
  }

  btnRegister=()=>{
    this.props.navigation.navigate('Register')
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
const mapStateToProps = (state) => {
  // console.log("User Login______________________>>>>>",state)
  return{
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      signInUR: (creds) =>dispatch(signInUR(creds)),
      adminLognin: (creds) =>dispatch(adminLognin(creds))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(JobsView);

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
    btnRegister:{
      width:WIDTH -55,
      height:45,
      borderRadius:25,
      backgroundColor:'#193B4D',
      justifyContent:'center',
      marginTop:20
    },
})


import React from 'react';
import { StyleSheet,  View, Image,ScrollView,Platform,SafeAreaView,
         Dimensions,KeyboardAvoidingView,
         ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import {  Container, Content, Header,Left,Title,Button,Footer,
     ListItem,Body, InputGroup, Input, Text, Picker} from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
import pice from '../../assets/background.jpg'
import pice1 from '../../assets/campus_app1.png'
import {connect} from 'react-redux'
import {userSignUp} from '../store/actions/authActionUR'


const { width:WIDTH } = Dimensions.get('window')

class Register extends React.Component {
  constructor(){
    super()
    this.state = {
      fullName:'',
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
Register=()=>{
  const {fullName,email,password}= this.state;
  if(!fullName){
      console.log("Insert full Name ")
  }
  else if(!email){
    console.log("Insert Email")  
  }
  else if(!password){
    console.log("Insert Password")  
  }
  else if(fullName){
          if(email){
              if(password){
                  this.props.userSignUp(this.state)
                  console.log(" Wait...") 
              }
             }else{
          }
      }
  }

render() {
  return (
   
    <Container style={{marginTop: Constants.statusBarHeight}}>
       {/* <KeyboardAvoidingView enabled   behavior={Platform.OS === "ios" ? "padding" : null}
       style={{ flex: 1, }}> */}
    <ImageBackground source={pice} style={styles.bgImageContainer}>
     
      <View style={styles.logoContainer}>
        <Image source={pice1}  style={styles.logo}/>
        {/* <Icon name={'envira'} size={80} color={'rgba(0, 0, 0, 0.6)'}/> */}
        {/* <Text style={styles.logoText}>Login Here</Text> */}
      </View>
      
    {/* <ScrollView>
      <View> */}
     
        <View style={styles.InputContainer}>
          <Icon name={'user'} size={28} color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon}/>
          <TextInput
          style={styles.input}
          placeholder={'Full Name'}
          placeholderTextColor={'#ffff'}
          underlineColorAndroid='transparent'
          // id="email" onChange={this.hundleChange}
          onChangeText={(fullName) => this.setState({ fullName })}
          />
        </View>
        <View style={styles.InputContainer}>
          <Icon name={'envelope-o'} size={28} color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon}/>
          <TextInput
          style={styles.input}
          placeholder={'Email'}
          placeholderTextColor={'#ffff'}
          underlineColorAndroid='transparent'
          // id="email" onChange={this.hundleChange}
          onChangeText={(email) => this.setState({ email })}
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
        // id="password" onChange={this.hundleChange} 
        onChangeText={(password) => this.setState({ password })}
        />
      <TouchableOpacity style={styles.btnEye}
        onPress={this.showPassword.bind(this)}
      >
        <Icon name={this.state.press ==false ?'eye-slash':'eye'} size={26} color={'rgba(255,255,255,0.7)'}/>
      </TouchableOpacity>
      </View>
     

      <TouchableOpacity style={styles.btnRegister}>
        <Text style={styles.text} onPress={this.Register}> Register</Text>
      </TouchableOpacity>

      {/* </View>
      </ScrollView> */}
    </ImageBackground>
 {/* </KeyboardAvoidingView> */}
 </Container>
    );
  }
}
const mapStateToProps =(state)=> {
  const status2 =state.authUR.status;
  return{
      authStd: state.firebase.auth,
      authError:state.authUR.authErrorStd_login,
      // student  : state.authStd.student
      
  }
}
const mapDispatchToProps =(dispatch)=> {
  return {
      userSignUp: (newStudent) => dispatch(userSignUp(newStudent))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);

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
    marginTop:50
  },
  logo:{
    width:165,
    height:150,
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
    marginTop:20,
    marginLeft:30,
  },
})


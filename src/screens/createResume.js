import React from 'react';
import { StyleSheet, 
         View,
         Image,
         Dimensions,
         KeyboardAvoidingView,
         ImageBackground,
         Text,
         TextInput,
         TouchableOpacity,
        } from 'react-native';
import { Container,
         Content,
         Header,
         Left,
         Title,
         Button,
         Footer,
         ListItem,
         Body,
         InputGroup,
         Input,
         Picker,
        } from 'native-base'
import { 
        Constants,
        LinearGradient
        } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
import pice from '../../assets/background.jpg'
import {connect} from 'react-redux'


const { width:WIDTH } = Dimensions.get('window')

class CreateResume extends React.Component {
  constructor(){
    super()
    this.state = {
    }
  }


render() {
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
        <Header style={{backgroundColor:'#223338'}}></Header>

        <ImageBackground source={pice} style={styles.bgImageContainer}>
            <Content style={styles.meain_Container}>
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:30,color:'#fff',}}>Student Details</Text>
                </View>
            <View style={styles.InputContainer}>
                <TextInput
                     style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder={'Enter a Name'}
                    placeholderTextColor={'#ffff'}
                />
                </View>
                  <View style={styles.InputContainer}>
                <TextInput
                     style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder={'Enter a Email'}
                    placeholderTextColor={'#ffff'}
                />
                </View>
                  <View style={styles.InputContainer}>
                <TextInput
                     style={styles.input}
                    underlineColorAndroid='transparent'
                    placeholder={'Enter a Number'}
                    placeholderTextColor={'#ffff'}
                />
                </View>
                  <View style={styles.InputContainer}>
                <TextInput
                     style={styles.input}
                    // underlineColorAndroid='transparent'
                    placeholder={'Enter a Discription'}
                    placeholderTextColor={'#ffff'}
                />
                </View>
            <TouchableOpacity style={styles.btnSubmit}>
                <Text style={styles.text} onPress={this.submit}> Upload</Text>
            </TouchableOpacity>
            </Content>
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
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateResume);

const styles = StyleSheet.create({
    bgImageContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center'
    },
    meain_Container:{
        marginTop:50,
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
        // backgroundColor:'rgba(0,0,0,0.35)',
        borderColor:'#fff',
        borderWidth:1,
        color:'#fff',
        marginHorizontal:25, 
      },
      btnSubmit:{
        width:WIDTH -55,
        height:45,
        borderRadius:25,
        backgroundColor:'#193B4D',
        justifyContent:'center',
        marginTop:20,
        marginLeft:30,
      },
      text:{
        color:'#fff',
        fontSize:16,
        textAlign:'center',
      },
})


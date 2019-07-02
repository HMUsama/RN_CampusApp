import React from 'react';
import { StyleSheet,  View, Image,
         Dimensions,KeyboardAvoidingView,ScrollView,
         ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import {  Container, Content, Header,Left,Title,Button,Footer,
     ListItem,Body, InputGroup, Input, Text, Picker, Card, CardItem,} from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
// import pice from '../../assets/background.jpg'
import {connect} from 'react-redux'
import {signInUR} from '../store/actions/authActionUR'


const { width:WIDTH } = Dimensions.get('window')

class JobsView extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

render() {
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
       <Content>
          <Card style={{flex:1,height:'100%',backgroundColor:'#000'}}>
              <CardItem>                        
                  <Text>
                      Your text here
                  </Text>
              </CardItem>
          </Card>
        </Content>
      {/* <ScrollView style={{flex:1,}}>
      <View >
          <View style={{flex:50,backgroundColor:'#000'}}>
          </View>
          <View style={{flex:25,backgroundColor:'#f1f'}}>
          </View>
          <View style={{flex:50,backgroundColor:'#fa1'}}>
          </View>
      </View>
      </ScrollView> */}
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

export default connect(mapStateToProps,mapDispatchToProps)(JobsView);

const styles = StyleSheet.create({
    bgImageContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center'
    },
})


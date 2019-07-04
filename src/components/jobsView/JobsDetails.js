import React from 'react';
import { StyleSheet, 
         View,
         Image,
         Dimensions,
         KeyboardAvoidingView,
         ScrollView,
         ImageBackground,
         TextInput ,
         TouchableOpacity
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
         Text,
         Picker,
         Card,
         CardItem,
        } from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux'
// import {signInUR} from '../store/actions/authActionUR'

import * as firebase from 'firebase';
import 'firebase/firestore';


const { width:WIDTH } = Dimensions.get('window')

class JobsDetails extends React.Component {
  constructor(){
    super()
    this.state = {
      result:[],
    }
  }
  async componentWillMount(){
    try {
      const datas = await firebase.firestore().collection('companyJobs').get()  
      const data = datas.docs.map( a => a.data());
      console.log("----------------------------------------Dashboard--->",data);
      this.setState({ result: data });
    } catch (err) {
      console.error(err);
    }
  }

render() {
  const {result} = this.state
  console.log("============",result)
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
       <Content>
       {  
         this.state.result.map((item)=>{
        return  <Card style={{backgroundColor:'#000',}}>
                  <CardItem style={{backgroundColor:'#000',}}>
                  <Text style={{color:'#fff'}}>{item.companyName}</Text>
                  </CardItem>
                  <CardItem>
                  <Text>{item.email}</Text>
                  </CardItem>
                  <CardItem>
                  <Text>{item.jobTitle}</Text>
                  </CardItem>
                  <CardItem>
                  <Text>{item.location}</Text>
                  </CardItem>
                  <CardItem>
                  <Text>{item.message}</Text>
                  </CardItem>
                  <CardItem>
                  <Text>{item.number}</Text>
                  </CardItem>
                
          </Card>
          })
        }
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

export default connect(mapStateToProps,mapDispatchToProps)(JobsDetails);

const styles = StyleSheet.create({
    bgImageContainer:{
        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems:'center'
    },
})


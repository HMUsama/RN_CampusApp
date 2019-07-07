import React from 'react';
import { StyleSheet,  View, Image,
         Dimensions,KeyboardAvoidingView,ScrollView,Button,
         ImageBackground,TextInput ,TouchableOpacity} from 'react-native';
import {  Container, Content, Header,Left,Title,Footer,
     ListItem,Body, InputGroup, Input, Text, Picker, Card, CardItem,} from 'native-base'
import { Constants,LinearGradient  } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome'
// import pice from '../../assets/background.jpg'
import {connect} from 'react-redux'
import {signInUR} from '../store/actions/authActionUR'

import * as firebase from 'firebase';
import 'firebase/firestore';


const { width:WIDTH } = Dimensions.get('window')

class JobsView extends React.Component {
  constructor(){
    super()
    this.state = {
      result:[],
    }
  }
  // async componentWillMount(){
  //   try {
  //     const datas = await firebase.firestore().collection('companyJobs').get()  
  //     const data = datas.docs.map( a => a.data());
  //     console.log("----------------------------------------Dashboard--->",data);
  //     this.setState({ result: data });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  View=(id)=>{

    console.log("*******************",id)
    // this.props.navigation.navigate('JobsDetails')
  }

render() {
  const {result} = this.state;
  const {navigate} = this.props.navigation;
  console.log("============>>>>>>>>>>>>>>",result)
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
{/*         
       {  
         result.map((item)=>{
        return  <Content style={styles.Container}>
                 <Card style={styles.mein_card} key={item.key}>
                  <CardItem style={styles.content}><Text style={{color:'#fff'}}>{item.companyName}</Text></CardItem>
                  <CardItem><Text>{item.email}</Text></CardItem>
                  <CardItem style={{color:'#fff', height: 50,}}>
                  <Button 
                    title="View"
                    style={styles.button}
                    onPress={()=>navigate('JobsDetails',{ID:item.key})}
                  />
                  <Text  onPress={this.View}>View One</Text>
                  </CardItem>
                 </Card>
              </Content>  
          })
        } */}
              <Content style={styles.Container}>

                 <View style={styles.main_View}>
                   <View style={{flex:1,flexDirection:'row'}}>
                    <View><Text style={styles.jobs}>Job Title</Text></View>
                    <View><Text style={styles.company}>Company Name</Text></View>
                  </View>
                  <View style={styles.button_view}>
                  <Text style={styles.button_text}>View Details</Text>
                  </View>
                 </View>


                 <View style={styles.main_View}>
                  <View><Text style={styles.jobs}>Job Title</Text></View>
                  <View><Text style={{color:'#000',textAlign:'center'}}>Company Name</Text></View>
                  <View style={styles.button_view}>
                  <Text  onPress={this.button} style={styles.button_text}>View Details</Text>
                  </View>
                 </View>
              </Content> 
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
      Container:{
        flex:1,
        backgroundColor: 'powderblue',
      },
      main_View:{
        flex:0,
        borderWidth:5,
        borderColor:'#eb0514',
        backgroundColor:'#124f64',
        height:200,
        width:WIDTH - 20,
        marginLeft: 10,
        marginTop:5,
        marginBottom:3,
      },
      jobs:{
        borderWidth:1,
        borderColor:'#eb0514',
        color:'#000',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:20,
        width:WIDTH-255 ,
      },
      company:{
        borderWidth:1,
        borderColor:'#fff',
        color:'#000',
        textAlign:'center',
        fontWeight: 'bold',
        fontSize:20,
        width:WIDTH-254 ,
      },
      button_view:{
        marginTop:95,
        borderWidth:0.5,
        borderColor:'#000',
        backgroundColor:'#124f54',
        color:'#fff',
        width:WIDTH-50,
        marginLeft: 10,
        textAlign:'center',
        borderBottomColor:'#fff',
      },
      button_text:{
        textAlign:'center',
        color:'#fff',
      },
})


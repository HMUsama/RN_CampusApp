import React from 'react';
import { StyleSheet, 
         View,
         Image,
         Dimensions,
         KeyboardAvoidingView,
         ScrollView,
         ImageBackground,
         TextInput ,
         TouchableOpacity,
         BackHandler ,
         RefreshControl,
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
  componentDidMount() {
  BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    if(this.props.navigation && this.props.navigation.goBack){
      this.props.navigation.goBack(null);
      return true;
    }
    return false;
  };

  componentWillReceiveProps(next,prev){
    console.log("NEXT---------->",next)
    console.log("PREV---------->",prev)
  }
  async componentWillMount(){
    const {params} = this.props.navigation.state;
    console.log("componentWillMount---------->",params)
        try {
      const datas = await firebase.firestore().collection('companyJobs').where('key','==',params.ID).get()  
      const data = datas.docs.map( a => a.data());
      // console.log("----------------------------------------Dashboard",data);
      this.setState({ result: data });
    } catch (err) {
      console.error(err);
    }
  }
  _onRefresh = () => {
    // const { Users } = this.state;
    // if (Users) {
    //     setTimeout(() => {
    //         this.id();
    //     }, 10)
    // }
    this.setState({ refreshing: false });
  }

render() {
  const {result} = this.state
  const {params} = this.props.navigation.state;
  // console.log("============???????????????????",result)
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
        <Content
           refreshControl={
            <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
            />}
        >
        {  
         result.map((item)=>{
           console.log("key``````````````````````",item.key)
        return  <Card style={{backgroundColor:'#000',}} key={item.key}>
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


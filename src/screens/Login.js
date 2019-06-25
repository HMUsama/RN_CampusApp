import React from 'react';
import { StyleSheet,  View, Image, Dimensions,KeyboardAvoidingView } from 'react-native';
import {  Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button} from 'native-base'
import { Constants,LinearGradient  } from 'expo';


const Item = Picker.Item;
export default class Login extends React.Component {
  
  
render() {
  return (
    <Container style={{marginTop: Constants.statusBarHeight}}>
    <Header style={{backgroundColor:'#3a7564'}}>
        <Left>
          <Button transparent>
            {/* <Icon name='arrow-back' /> */}
          </Button>
        </Left>
        <Body style={{marginLeft:10}}>
          <Title>Login</Title>
        </Body>
    </Header>
  <Content>
  </Content>
  <Footer style={{backgroundColor:'#3a7564'}}/>
  </Container>
    );
  }
}


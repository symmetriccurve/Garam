import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Switch,
  TouchableHighlight,
  Image,
  View,
  Alert
} from 'react-native'

import * as firebase from 'firebase';

import EStyleSheet from 'react-native-extended-stylesheet';

class Register extends Component {
  constructor(){
    super();
    this.state={
      username:'@g.com',
      password:'123456',
    }
  }

  _userLogedIn(){
    Alert.alert("user Registered. Please login to Contiue")
    this.props.navigator.push({id: "Login",title:'Home'})
  }

  _registerUser(){
  firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password).then((user)=>{this._userLogedIn(user)}).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     Alert.alert(errorMessage)
     // ...
    });
  }
 render() {
    return (
          <View style={style.container}>
          <View style={style.innerContainer}>
              <View style={style.usertextContainer}>
                  <TextInput
                        value ={this.state.username}
                        onChangeText={(text) => this.setState({username: text})}
                        style={style.userInputText}
                        placeholder='Username'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor='white'
                        />
                  <View style={style.line}/>
              </View>
              <View style={style.passTextContainer}>
                  <TextInput
                        value ={this.state.password}
                        secureTextEntry ={true}
                        onChangeText={(text) => this.setState({password: text})}
                        style={style.passInputText}
                        placeholder='Password'
                        autoCapitalize='none'
                        autoCorrect={false}
                        placeholderTextColor='white'
                        />
                  <View style={style.line}/>
              </View>
              <View style={style.registerButtonContainer}>
              <TouchableHighlight onPress={()=>{this._registerUser()}} underlayColor='#990000'>
                    <View style={style.signInTextContainer}>
                        <Text style={style.registerButtonText}>REGISTER</Text>
                    </View>
              </TouchableHighlight>

              </View>
          </View>
          </View>
    );
  }
}

const style = EStyleSheet.create({
  image:{
    height: '10%',
    width: '80%'
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'$appBackgroundColor',
    alignItems:'center',
    justifyContent:'center'
  },
  innerContainer:{
      height:'70%',
      width:'80%',
      //backgroundColor:'peachpuff'
  },
  imageContainer:{
    paddingTop:'10%'
  },
  usertextContainer:{
    //backgroundColor:'tan',
    marginTop:'10%'
  },
  passTextContainer:{
    //backgroundColor:'lightblue',
    marginTop:'5%'
  },
  line:{
    '@media ios': { // media query
      height: 1,
    },
    '@media android': { // media query- Android has a underbar which highlights when text input is focused
      height: 0,
    },
    backgroundColor:'white',
  },
  registerContainer:{
    marginTop:'2%',
    //backgroundColor:'coral'
  },
  switchContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    height:'10%',
  },
  remTextContainer:{
    fontSize:'$inputTextFontSize',
    color:'$appTextColor',
    paddingLeft:'5%'
  },
  signInButtonContainer:{
    marginTop:'2%',
  },
  signInTextContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'5%',
    borderColor:'$appTextColor',
    borderWidth:'0.02 * $deviceHeight',
    borderRadius:5
  },
  signInText:{
    fontSize:'$inputTextFontSize',
    color:'$appTextColor',
    fontWeight:'bold'
  },
  registerButtonContainer:{
    height:'5%',
    marginTop:'2%',
    alignItems:'center',
    justifyContent:'center'
  },
  registerButtonText:{
    fontSize:'$inputTextFontSize',
    color:'$appTextColor',
    fontWeight:'bold'
  },
  userInputText:{
    height:'$textBoxHeight',
    fontSize:'$inputTextFontSize'
  },
  passInputText:{
    height:'$textBoxHeight',
    fontSize:'$inputTextFontSize'
  },
  SwitchControl:{
    height:'$textBoxHeight',
  }

  });
module.exports = Register

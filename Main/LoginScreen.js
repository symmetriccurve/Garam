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

import EStyleSheet from 'react-native-extended-stylesheet';

class Login extends Component {
  constructor(){
    super();
    this.state={
      username:'@g.com',
      password:'123456',
      switchIsOn:false,
    }
  }

_userLogedIn(user){
  console.log("successful Login",user.displayName);
  console.log("This", this);
  if (user != null) {
    user.providerData.forEach(function (profile) {
      console.log("Sign-in provider: "+profile.providerId);
      console.log("  Provider-specific UID: "+profile.uid);
      console.log("  Name: "+profile.displayName);
      console.log("  Email: "+profile.email);
      console.log("  Photo URL: "+profile.photoURL);
    });
        if(user.displayName){
          this.props.navigator.push({id: "Home",title:'Home',passProps:({someProps:'SomeProps'})})
        }else{
          this.props.navigator.push({id: "UpdateProfile",title:'Profile',passProps:({someProps:'SomeProps'})})
        }
  }
}

_userLogin(){
  firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password).then((user)=>{this._userLogedIn(user)}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  Alert.alert("THis is Error message from Signin",errorMessage)
  // ...
});
}

_signOut(){
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}, function(error) {
  // An error happened.
});
var user = firebase.auth().currentUser;
  console.log("userInfo",user);
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
}
}

 render() {
    return (
          <View style={style.container}>
              <View style={style.innerContainer}>
                  <View style={style.imageContainer}>
                            <Image    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} style={style.image} />
                  </View>
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
                            onChangeText={(text) => this.setState({password: text})}
                            style={style.passInputText}
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor='white'
                            />
                      <View style={style.line}/>
                  </View>
                  <View style={style.registerContainer}>
                      <View style={style.switchContainer}>
                            <Switch
                              onValueChange={(value) => this.setState({switchIsOn: value})}
                              value={this.state.switchIsOn} />
                              <Text style={style.remTextContainer}>
                                Remember Me
                              </Text>
                      </View>
                  </View>
                  <View style={style.signInButtonContainer}>
                      <TouchableHighlight onPress={()=>{this._userLogin()}} underlayColor='#990000'>
                            <View style={style.signInTextContainer}>
                                <Text style={style.signInText}>SIGN IN</Text>
                            </View>
                      </TouchableHighlight>
                  </View>
                  <View style={style.signInButtonContainer}>
                      <TouchableHighlight onPress={()=>{this._signOut()}} underlayColor='#990000'>
                            <View style={style.signInTextContainer}>
                                <Text style={style.signInText}>SIGN OUT</Text>
                            </View>
                      </TouchableHighlight>
                  </View>
                  <View style={style.registerButtonContainer}>
                  <TouchableHighlight onPress={()=>{
                      this.props.navigator.push({id: "Register",title:'User Register'})}} underlayColor='#990000'>
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
    height: '$logoImageHeight',
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
    borderWidth:'0.02 * $logoImageHeight',
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
module.exports = Login

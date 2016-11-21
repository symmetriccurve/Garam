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
  Alert,
  BackAndroid,
  ToastAndroid,
  AsyncStorage
} from 'react-native'
import * as firebase from 'firebase';
import EStyleSheet from 'react-native-extended-stylesheet';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Kaede } from 'react-native-textinput-effects';


class Login extends Component {
  constructor(){
    super();
    this._popNavigation = this._popNavigation.bind(this);
    this.state={
      username:'vkrm@g.com',
      password:'vikram',
      rememberME:false,
    }
  }

  componentDidMount() {
    AsyncStorage.getItem('userEmailID').then( (value) => {console.log("hey Listen",value)})
    AsyncStorage.getItem('password').then((value) =>{console.log("hey Listen",value)})

       BackAndroid.addEventListener('hardwareBackPress', this._popNavigation);
   }

  componentWillUnmount() {
       BackAndroid.removeEventListener('hardwareBackPress', this._popNavigation);
  }

  _popNavigation() {
      if (this.props.navigator.getCurrentRoutes().length > 1) {
          this.props.navigator.pop();
          ToastAndroid.show('Click Again to exit', ToastAndroid.SHORT);
          return true;
      }
      //     var time = (new Date()).getTime();
      // if (time - Globals.timer > 3000) {
      //     Globals.timer = time;
      //     ToastAndroid.show('Click Again to exit', ToastAndroid.SHORT);
      //     return true;
      // }
      //     return false;
            //To-do: back button on Login Screen should close the application
           return true
}

_userLogedIn(user){
  // console.log("successful Login",user.displayName);
  // console.log("This", this);
  if (user != null) {
    user.providerData.forEach(function (profile) {
      // console.log("Sign-in provider: "+profile.providerId);
      // console.log("  Provider-specific UID: "+profile.uid);
      // console.log("  Name: "+profile.displayName);
      // console.log("  Email: "+profile.email);
      // console.log("  Photo URL: "+profile.photoURL);
    });
        if(user.displayName){
          this.props.navigator.push({id: "DaysList",title:'Task List',passProps:({userInfo:this.state})})
        }else{
          this.props.navigator.push({id: "UpdateProfile",title:'Profile'})
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
  //console.log("userInfo",user);
if (user != null) {
  user.providerData.forEach(function (profile) {
    // console.log("Sign-in provider: "+profile.providerId);
    // console.log("  Provider-specific UID: "+profile.uid);
    // console.log("  Name: "+profile.displayName);
    // console.log("  Email: "+profile.email);
    // console.log("  Photo URL: "+profile.photoURL);
  });
}
}

 render() {
   console.log("This.sta",this.state);
    return (
      <View style={style.loginContainer}>
          <Kaede
            style={style.input}
            label={'Email'}
            value={this.state.username}
            onSubmitEditing= {()=>this._userLogin()}
            onChangeText = {(userName)=>this.setState({username:userName})}
            labelStyle={{
              fontFamily:'HelveticaNeue-UltraLight',
              fontSize:35,
              fontWeight:'200',
              color: 'white',
              backgroundColor: '#fcb794',
            }}
            inputStyle={{
              fontFamily:'HelveticaNeue-UltraLight',
              fontWeight:'200',
              fontSize:20,
              color: 'white',
              backgroundColor: '#db8d67',
            }}
            keyboardType="email-address"
          />
          <Kaede
            secureTextEntry ={true}
            style={style.input}
            label={'Password'}
            onChangeText = {(Password)=>this.setState({password:Password})}
            value={this.state.password}
            onSubmitEditing= {()=>this._userLogin()}
            labelStyle={{
              fontFamily:'HelveticaNeue-UltraLight',
              fontSize:30,
              fontWeight:'200',
              color: 'white',
              backgroundColor: '#fcb794',
            }}
            inputStyle={{
              fontFamily:'HelveticaNeue-UltraLight',
              color: 'white',
              backgroundColor: '#db8d67',
            }}
            keyboardType="default"
          />

          <View style={style.registerContainer}>
              <View style={style.switchContainer}>
                    <Switch
                      onValueChange={(value) => this.setState({rememberME: value})}
                      value={this.state.rememberME} />
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
          <TouchableHighlight onPress={()=>{
              this.props.navigator.push({id: "Register",title:'User Register'})}} underlayColor='#db8d67'>
                    <View style={style.signInTextContainer}>
                        <Text style={style.signInText}>SIGN UP</Text>
                    </View>
              </TouchableHighlight>
          </View>
          <View style={style.registerButtonContainer}>
          {/*<TouchableHighlight onPress={()=>{
              this.props.navigator.push({id: "Register",title:'User Register'})}} underlayColor='#990000'>
                <View style={style.signInTextContainer}>
                    <Text style={style.registerButtonText}>REGISTER</Text>
                </View>
          </TouchableHighlight>*/}

          </View>
      </View>

    );
  }
}

const style = EStyleSheet.create({
  image:{
    height: '$deviceHeight'/10,
    width: '80%'
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'#3d8af7',
    alignItems:'center',
    justifyContent:'center'
  },
  loginContainer:{
      marginTop:'10%'
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
    width:'100%',
    marginTop:'10%'
  },
  passTextContainer:{
    height:50,
    width:150,
    marginLeft:50,
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
    justifyContent:'center',
    alignItems:'center',
    height:'10%',
    backgroundColor:'#db8d67',
    marginBottom:'5%'
  },
  remTextContainer:{
    fontSize:'$inputTextFontSize',
    color:'$appTextColor',
    paddingLeft:'5%'
  },
  signInButtonContainer:{
    //marginTop:'2%',
  },
  signInTextContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'10%',
    //borderColor:'$appTextColor',
    //borderWidth:'$deviceHeight'/10,
    //borderRadius:5,
    backgroundColor:'#db8d67'
  },
  signInText:{
    fontFamily:'HelveticaNeue-UltraLight',
    fontSize:35,
    fontWeight:'200',
    color:'white'
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
    //fontSize:'$inputTextFontSize'
  },
  passInputText:{
    height:'$textBoxHeight',
    //fontSize:'$inputTextFontSize'
  },
  SwitchControl:{
    height:'$textBoxHeight',
  },
  input: {
    marginTop: '1%',
    //backgroundColor:'red',
    // shadowColor: "#000000",
    // shadowOpacity: 0.2,
    // shadowRadius: 1,
    // shadowOffset: {
    //   height: 2,
    //   width: 0
    // }
  },

  });

module.exports = Login

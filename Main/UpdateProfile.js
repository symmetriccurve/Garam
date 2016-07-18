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
var Home = require('./Home')
class UpdateProfile extends Component {
  constructor(){
    super();
    this.state={
      displayName:'',
      password:'',
    }
  }
  _updateProfile(){
    var self = this
    var user = firebase.auth().currentUser;
      user.updateProfile({
      displayName: this.state.displayName,
      photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(function() {
        if (user != null) {
              var uid = user.uid
              var displayName = user.displayName
              var ObjectToSet = { [displayName] : {displayName: displayName }}
            firebase.database().ref('users/' + uid).set(ObjectToSet);
      }
      self.props.navigator.push({id: "Home",title:'Home',passProps:({displayName: self.state.displayName})})
      Alert.alert("update successful")
      console.log("user Profile Display Name After update:", user.displayName);
      }, function(error) {
        Alert.alert("update unsuccessful",error)
      });
  }
  render() {
    return (
      <View style={style.container}>
      <View style={style.innerContainer}>
          <View style={style.usertextContainer}>
              <TextInput
                    value = {this.state.displayName}
                    onChangeText={(text) => this.setState({displayName: text})}
                    style={style.userInputText}
                    placeholder='Username'
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='white'
                    />
              <View style={style.line}/>
          </View>
          <View style={style.registerButtonContainer}>
          <TouchableHighlight onPress={()=>{this._updateProfile()}} underlayColor='#990000'>
                <View style={style.signInTextContainer}>
                    <Text style={style.registerButtonText}>Update</Text>
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
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
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
module.exports = UpdateProfile

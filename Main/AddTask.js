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

var TaskList = require('./TaskList')
class AddTask extends Component {
  constructor(){
    super();
    this.state={
    }
  }

 _addNewDay(){
   var user = firebase.auth().currentUser;
   if (user != null) {
         var uid = user.uid
         var displayName = user.displayName
         var ObjectToSet = {Task6: "10hrs"}
       firebase.database().ref('users/' + uid + '/' +displayName + '/' + this.props.date + '/Tasks' ).update(ObjectToSet);
   }
 }

 render() {
   var user = firebase.auth().currentUser;
    return (
          <View style={style.container}>
              <TouchableHighlight onPress={()=>{this._addNewDay()}} underlayColor='#990000'>
                    <View style={style.signInTextContainer}>
                        <Text style={style.registerButtonText}>Add new task</Text>
                    </View>
              </TouchableHighlight>
              <TaskList/>
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
module.exports = AddTask

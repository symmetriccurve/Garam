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

class AddDay extends Component {
  constructor(){
    super();
    this.state={
    }
  }

 _addNewTask(){
   var user = firebase.auth().currentUser;
   if (user != null) {
         var uid = user.uid
         var displayName = user.displayName
         var day = this.props.day
         var ObjectToSet = {TaskNumber1:{Notes:'SomeNotes',TaskHours:'TaskHours',TaskNumber:3},
                            TaskNumber2:{Notes:'SomeNotes',TaskHours:'TaskHours',TaskNumber:4},
                            TaskNumbe3:{Notes:'SomeNotes',TaskHours:'TaskHours',TaskNumber:6}}
       firebase.database().ref('users/' + uid + '/' + displayName + '/' + day + '/Tasks' ).update(ObjectToSet);
   }
 }

 render() {
    return (
          <View style={style.container}>
              <TouchableHighlight onPress={()=>{this._addNewDay()}} underlayColor='#990000'>
                    <View style={style.signInTextContainer}>
                        <Text style={style.registerButtonText}>Add new Day</Text>
                    </View>
              </TouchableHighlight>
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
      alignItems:'center',
      justifyContent:'center',
      height:'100%',
      width:'100%',
      backgroundColor:'$appBackgroundColor',
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
module.exports = AddDay

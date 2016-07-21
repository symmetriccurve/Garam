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

var AddTask = require('./AddTask')
import EStyleSheet from 'react-native-extended-stylesheet';
var DaysList = require('./DaysList')
class Home extends Component {
  constructor(){
    super();
    //this._pasEditUnmountFunction = this._pasEditUnmountFunction.bind(this);
    this.state={
    }
  }

 _addNewDay(){
   var today = new Date()
   var today = "june20"//today.toString().slice(4, -29)
   var user = firebase.auth().currentUser;
   var self = this
   if (user != null) {
         var uid = user.uid
         var day = 'june5'
         var displayName = user.displayName
         var ObjectToSet = {[day]:{Day:day}}
       firebase.database().ref('users/' + uid + '/' + displayName).update(ObjectToSet);
       this.props.navigator.push({id: "AddTask",title:'AddTask',passProps:({day: day})})
 }
 }

 componentDidMount() {
      //BackAndroid.addEventListener('hardwareBackPress', this._pasEditUnmountFunction);
  }

 componentWillUnmount() {
      //BackAndroid.removeEventListener('hardwareBackPress', this._pasEditUnmountFunction);
 }

 _popNavigation() {
    this.props.navigator.pop();
    return true
 }

 render() {
   var user = firebase.auth().currentUser;
    return (
          // <View style={style.container}>
          //     <DaysList navigator ={this.props.navigator}/>
          //     <TouchableHighlight onPress={()=>{this._addNewDay()}} underlayColor='#990000'>
          //           <View style={style.signInTextContainer}>
          //               <Text style={style.registerButtonText}>Add new Day</Text>
          //           </View>
          //     </TouchableHighlight>
          // </View>
        <View>
          {/*<DayCard/>
          <DayCard/>
          <DayCard/>*/}
        </View>
    );
  }
}

const style = EStyleSheet.create({
  image:{
    height: '$deviceHeight'/10,
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    height:'50%',
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
    borderWidth:'0.02 * $deviceHeight'/10,
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
module.exports = Home

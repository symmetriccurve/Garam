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
  ListView,
  ScrollView,
  AsyncStorage
} from 'react-native'
import * as firebase from 'firebase';
var Carousel = require('react-native-carousel');
import EStyleSheet from 'react-native-extended-stylesheet';
var Home = require('./Home')
var DayCard = require('./DayCard')
var TaskCard = require('./TaskCard')
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class DaysList extends Component {
  constructor(){
    super();
    this.state={
      loaded: false,
      dataSource: ['day 1','day 2']
    }
  }

  componentDidMount(){
      if(this.props.userInfo.rememberME){
        AsyncStorage.multiSet([['userEmailID', this.props.userInfo.username], ['password', this.props.userInfo.password]], console.log("Async setted the Values"))
      }
      var self = this
      var user = firebase.auth().currentUser;
      var uid = user.uid
      firebase.database().ref('/users/' + uid +'/' + user.displayName ).on('value',function(snapshot){
         var daysList   = Object.keys(snapshot.val()).map(function(k) { return snapshot.val()[k] })
         //console.log("snapshot.val()",snapshot.val());
         //console.log("daysList",daysList);
         self.setState({
           loaded: true,
           dataSource: daysList
         })
       });
  }

_renderDayCards(){
  var me = this
  if(this.state.dataSource.length != 0)
       {
         return(
          this.state.dataSource.map(function(eachDay) {
            if(eachDay ){
              var something = eachDay.Tasks.Date
              return(
                <View style={style.card} key ={Math.random()}>
                    <View style={style.innerCard}>
                            <DayCard someDate = {something} color = '#ff8a84' fontColor = '#ffffff' tasks={eachDay.Tasks} totalHours={me._totalTaskHours(eachDay.Tasks)}/>
                    </View>
                </View>
            );}
          })
       );
     }else{
       return <View style={{flex:1, alignItems:'center',justifyContent:'center',width:200,height:200,backgroundColor:'coral'}}><Text>Wlcome Card </Text></View>
     }

}

_hello(){
  console.log("Hello");
}

_totalTaskHours(Tasks){
    var dateObjectRemoved = Tasks
    var taskHours = 0
    delete dateObjectRemoved['Date']
    console.log("Here are Tasks",dateObjectRemoved);
    for(var key in dateObjectRemoved ) {
      //console.log("Calculate Tasks",Tasks.TaskHours);
      taskHours = taskHours + dateObjectRemoved[key].TaskHours
    }
    return taskHours
}

renderRow(rowData: string, sectionID: number, rowID: number){
      //console.log("rowID",rowID);
      if(rowID == 0) return null
      //console.log("Day",rowData);
      var totalTaskHours = this._totalTaskHours(rowData.Tasks)
         return (
               this._renderDayCards()
           );
 }

 render(){
   if(!this.state.loaded){
     return <View style={{flex:1,backgroundColor:'grey'}}/>
   }
   return(
            <Carousel style={{backgroundColor:'blue'}} animate={false} hideIndicators={true}>
              {  this._renderDayCards() }
           </Carousel>
    );
 }

}

const style = EStyleSheet.create({
  listItem: {
    flex:1,
    flexDirection: 'row',
    height: '10%',
    width: '100%',
    justifyContent:'center',
    backgroundColor:'#f4f4f4',
    alignItems:'center',
  },
  image:{
    height: '$deviceHeight'/10,
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    height:'10%',
    width:'100%',
    backgroundColor:'black',
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
  },
  card: {
    alignItems:'center',
    justifyContent:'center',
    //marginTop: 30,
    width:'100%',
    height:'100%',
    //backgroundColor:'#f4f4f4',

  },
  innerCard: {
    width:'90%',
    height:'85%',
    //backgroundColor:'yellow',
    // shadowColor: "grey",
    // shadowOpacity: 0.5,
    // shadowRadius: 10,
    // shadowOffset: {
    //   height: 2,
    //   width: 0
    // },
  }

  });

module.exports = DaysList

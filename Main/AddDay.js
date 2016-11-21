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
  DatePickerIOS,
  BackAndroid,
  ScrollView,
  Alert
} from 'react-native'
import * as firebase from 'firebase';
import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
var someObject = []
import {
  Kaede,
  Hoshi,
  Jiro,
  Isao,
  Madoka,
  Akira,
  Hideo,
  Kohana,
  Makiko,
  Sae,
  Fumi,
} from 'react-native-textinput-effects';

class AddDay extends Component {
  constructor(){
    super();
    this.state={
      taskID: '',
      taskHours:'',
      taskNotes:'',
      UIdate: '',
      firebaseNodeDate: 'June 5 2016',
    };
  }

  componentDidMount(){
        this._setDate(Date())

  }

 _addNewTask(){
   var user = firebase.auth().currentUser;
   if (user != null && this.state.taskID != '' && this.state.taskHours != '') {
         var uid = user.uid
         var displayName = user.displayName
         var day = this.props.day
         var ObjectToSet = {
           Date: this.state.firebaseNodeDate,
           [Number(this.state.taskID)]:{
             Notes      : this.state.taskNotes,
             TaskHours  : Number(this.state.taskHours),
             TaskNumber : Number(this.state.taskID)
           }
          }
       firebase.database().ref('users/' + uid + '/' + displayName + '/' + this.state.firebaseNodeDate + '/Tasks' ).update(ObjectToSet);
   }else{
     Alert.alert('One or more fields are Empty')
   }
 }

 _tasks(){

   return(
      this.state.tasksArray.map(function(eachTask) {
          //console.log("eachTask",eachTask);
        return(
            null
        );
      })
   );

 }

 render() {
   var self = this
   //console.log("This", this);
   BackAndroid.addEventListener('hardwareBackPress', function() {
     return false
    // console.log("self.props.navigator.getCurrentRoutes()",self.props.navigator.getCurrentRoutes());
    //  if (self.props.navigator.getCurrentRoutes()[1].id == 'DaysList') {
    //    self.props.navigator.pop()
    //    return true;
    //  }else{
    //     console.log("self.props.navigator.getCurrentRoutes()[0]",self.props.navigator.getCurrentRoutes()[0].id == "DaysList");
    //  }
    //  return false;
   });
    return (
      <ScrollView>
          <View style={styles.container}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',height:50,backgroundColor:'peachpuff'}}>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center',height:50,backgroundColor:'coral'}}>
                      <Text style={{color:'white',fontSize:20,fontFamily:'HelveticaNeue-UltraLight',fontWeight:'300'}}> DAY</Text>
                  </View>
                  <View style={{flex:0,alignItems:'center',justifyContent:'center',backgroundColor:'blue'}}>
                  <DatePicker
                  ref="datepicker"
                  style={{width: 0}}
                  //date={this.state.date}
                  mode="date"
                  format="MM-DD-YYYY"
                  //minDate="2016-05-01"
                  //maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={(date) => {this._setDate(date)}}
                  showIcon={false}
                  customStyles={{
                  dateInput: {
                    borderColor:'transparent'
                  }
                }}
                  />
                  </View>
                  <TouchableHighlight style={{flex:3,justifyContent:'center',alignItems:'center',height:50}} underlayColor='peachpuff' onPress={()=>{this.refs.datepicker.onPressDate()}} >
                            <Text style={{color:'black',fontSize:30,fontFamily:'HelveticaNeue-UltraLight',fontWeight:'100'}}>{this.state.UIdate}</Text>
                  </TouchableHighlight>
              </View>
              <View style={{alignItems:'center',height:50,backgroundColor:'tan',marginTop:10,flexDirection:'row'}}>
                  <View style={{flex:1,alignItems:'center',justifyContent:'center',height:50,backgroundColor:'tan'}}>
                      <Text style={{fontSize:20,color:'white',fontFamily:'HelveticaNeue-UltraLight',fontWeight:'300'}}>TASK</Text>
                  </View>
                  <View style={{flex:1.5,backgroundColor:'peachpuff'}}>
                      {/*<Text style={{flex:4,color:'white',fontSize:20,fontFamily:'HelveticaNeue-UltraLight',fontWeight:'300',marginLeft:10}}>TASK</Text>*/}
                      <TextInput
                            value = {this.state.taskID}
                            onChangeText={(text) => this.setState({taskID: text})}
                            style={styles.input}
                            //placeholder='Username'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor='white'
                            keyboardType = 'numeric'
                            />
                  </View>
                  <View style={{flex:0.3,alignItems:'center',justifyContent:'center',height:50,backgroundColor:'tan'}}>
                      <Text style={{fontSize:20,color:'white',fontFamily:'HelveticaNeue-UltraLight',fontWeight:'300'}}>H</Text>
                  </View>
                  <View style={{flex:1,backgroundColor:'peachpuff'}}>
                      {/*<Text style={{flex:4,color:'white',fontSize:20,fontFamily:'HelveticaNeue-UltraLight',fontWeight:'300',marginLeft:10}}>TASK</Text>*/}
                      <TextInput
                            value = {this.state.taskHours}
                            onChangeText={(text) => this.setState({taskHours: text})}
                            style={styles.input}
                            //placeholder='Username'
                            autoCapitalize='none'
                            autoCorrect={false}
                            placeholderTextColor='white'
                            keyboardType = 'numeric'
                            />
                  </View>
              </View>
              <TouchableHighlight underlayColor='#990000' onPress={()=>{this._addNewTask()}}>
                          <View style={{marginRight:10,alignItems:'center',justifyContent:'center',height:40}}>
                             <Text style={{fontSize:20,fontFamily:'HelveticaNeue-UltraLight'}}> Save </Text>
                          </View>
              </TouchableHighlight>
          </View>
        </ScrollView>

    );
  }

  _setDate(date){
    var dateforUI = new Date(date);
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];

    var finalDateStringForUI = dateforUI.getDate() + ' '+ monthNames[dateforUI.getMonth()]
    var firebaseDayNodeName =  monthNames[dateforUI.getMonth()]+ ' ' +dateforUI.getDate() + ' '  + dateforUI.getFullYear()

    this.setState({
      UIdate            : finalDateStringForUI,
      firebaseNodeDate  : firebaseDayNodeName
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: 'white',
  },
  content: {
    // not cool but good enough to make all inputs visible when keyboard is active
    paddingBottom: 300,
  },
  card1: {
    paddingVertical: 16,
  },
  card2: {
    padding: 16,
  },
  input: {
    marginTop: 10,
  },
  title: {
    paddingBottom: 16,
    textAlign: 'center',
    color: '#404d5b',
    fontSize: 20,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  input:{height:50,color:'black',fontSize:40,fontFamily:'HelveticaNeue-UltraLight',textAlign: "center"}
});

module.exports = AddDay


{/*<Text style={styles.welcome}>
Welcome to react-native-datepicker example!
</Text>
<DatePicker
style={{width: 300}}
date={this.state.date}
mode="date"
format="YYYY-MM-DD"
minDate="2016-05-01"
maxDate="2016-06-01"
confirmBtnText="Confirm"
cancelBtnText="Cancel"
//iconSource={require('./google_calendar.png')}
onDateChange={(date) => {this.setState({date: date});}}
>

</DatePicker>*/}

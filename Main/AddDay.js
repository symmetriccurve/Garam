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
  DatePickerIOS,
  BackAndroid
} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';
import DatePicker from 'react-native-datepicker';

class AddDay extends Component {
  constructor(){
    super();
    this.state={
      date: '2016-05-11',
      time: '20:00',
      datetime: '2016-05-05 20:00',
      datetime1: '2016-05-05 20:00'
    };
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
          <View style={styles.container}>
          <Text style={styles.welcome}>
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

          <Text style={{height:20,width:20,backgroundColor:'black'}}> Hello </Text>
        </DatePicker>
          </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF'
},
welcome: {
  fontSize: 20,
  textAlign: 'center',
  margin: 10
},
instructions: {
  textAlign: 'center',
  color: '#333333',
  marginBottom: 5
}
});

module.exports = AddDay

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
  ListView
} from 'react-native'

import EStyleSheet from 'react-native-extended-stylesheet';

class DayCard extends Component {
  constructor(){
    super();
    this.state={
      loaded: false,
      dataSource: ['day 1','day 2']
    }
  }

  _takeToTasksOfDay(day){

    console.log("Day Clicked");
  }

  render(){
    var cardColor = 'tan'
      return(
       <View style= {style.Maincontainer}>
          <View style={[style.container,,{backgroundColor:cardColor}]}>
              <View style={style.leftContainer}>
                  <Text style={style.dayText}>June 15</Text>
              </View>
              <View style={style.middleContainer}>
                  <View style={style.innerMiddleContainer}>
                      <View>
                        <Text style={[style.hourText,{color:cardColor}]}>4Hrs</Text>
                      </View>
                  </View>
              </View>
              <View style={style.rightContainer}>
                    <TouchableHighlight onPress={()=>{this._takeToTasksOfDay()}}>
                        <View>
                          
                        </View>
                    </TouchableHighlight>
              </View>
          </View>
      </View>);
  }

}

const style = EStyleSheet.create({
  container: {
    height : '10%',
    width  : '90%',
    marginLeft:'5%',
    marginRight: '5%',
    borderRadius: 8,
    flexDirection:'row'
  },
  dayText:{
    color:'white',
    fontWeight:'800',
    fontSize:35,
    fontFamily:'Verdana'
  },

  hourText:{
    color:'white',
    fontWeight:'800',
    fontSize:23,
    fontFamily:'Verdana'
  },

  innerMiddleContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'8%',
    width: '20%',
    backgroundColor:'white',
    opacity: 0.8,
    borderRadius: 20,
  },

  leftContainer:{
    alignItems:'center',
    justifyContent:'center',
    height : '10%',
  //  backgroundColor:'tan',
    width:'50%'
  },

  middleContainer:{
    alignItems:'center',
    justifyContent:'center',
    height : '10%',
  //  backgroundColor:'coral',
    width:'30%'
  },

  rightContainer:{
    height : '10%',
    backgroundColor:'lightblue',
    width:'10%'
  },

  Maincontainer:{
    marginTop:'20%'
  },

  image:{
    height: '$logoImageHeight',
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  }

  });
module.exports = DayCard

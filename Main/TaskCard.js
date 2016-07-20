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
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

class DayCard extends Component {
  constructor(){
    super();
    this.state={
      loaded: false,
      dataSource: ['day 1','day 2']
    }
  }

  _takeToTasksOfTheDay(day){
    //console.log("Day Clicked");
  }

  render(){
    var cardColor = this.props.color
    var fontColor = this.props.fontColor
      return(
          <View style={[style.container,,{backgroundColor:cardColor}]}>
              <View style={style.leftContainer}>
                  <Text style={[style.dayText,{color: fontColor}]}>NPDIDS 2016</Text>
              </View>
              <View style={style.middleContainer}>
                  <View style={style.innerMiddleContainer}>
                      <View>
                        <Text style={[style.hourText,{color:fontColor}]}>4Hr</Text>
                      </View>
                  </View>
              </View>
              <View style={style.rightContainer}>
                    {/*<TouchableHighlight onPress={()=>{this._takeToTasksOfTheDay()}}>
                        <View>
                            <Icon name="arrow-right" color={'white'} size={30} />
                        </View>
                    </TouchableHighlight>*/}
              </View>
          </View>);
  }

}

const style = EStyleSheet.create({
  container: {
    height : '5%',
    width  : '60%',
    //marginLeft:'5%',
    marginRight: '5%',
    //borderRadius: 8,
    marginTop:'1%',
    marginBottom: '1%',
    flexDirection:'row',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 2
    },
  },
  dayText:{
    color:'white',
    fontWeight:'800',
    //fontSize:23,
    //fontFamily:'Verdana'
  },

  hourText:{
    color:'white',
    fontWeight:'800',
    //fontSize:23,
    //fontFamily:'Verdana'
  },

  innerMiddleContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'8%',
    borderRadius: 20,
  },

  leftContainer:{
    //alignItems:'center',
    justifyContent:'center',
    marginLeft:'2%'
    //height : '10%',
  //  backgroundColor:'tan',
    //width:'50%'
  },

  middleContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginLeft:'2%'
    //height : '10%',
    //backgroundColor:'coral',
    //width:'30%'
  },

  rightContainer:{
    alignItems:'center',
    justifyContent:'center',
    height : '10%',
    //backgroundColor:'lightblue',
    width:'10%'
  },

  Maincontainer:{
    marginTop:'20%'
  },

  image:{
    height: '$deviceHeight'/10,
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  }

  });
module.exports = DayCard

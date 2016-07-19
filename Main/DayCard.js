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

    }
  }

  _takeToTasksOfTheDay(day){
      this.props.navigator.push({id: "TaskList",title:'Tasks ',passProps:({displayName: day})})
  }

  render(){
    var cardColor = this.props.color
      return(
          <View style={[style.container,,{backgroundColor:cardColor}]}>
              <View style={style.leftContainer}>
                  <Text style={style.dayText}>{this.props.date}</Text>
              </View>
              <View style={style.middleContainer}>
                      <View>
                        <Text style={[style.hourText,{color:'white'}]}>{this.props.hours}Hr</Text>
                      </View>
              </View>
              {/*<View style={style.rightContainer}>
                    <TouchableHighlight onPress={()=>{this._takeToTasksOfTheDay(this.props.date)}}>
                        <View>
                            <Icon name="arrow-right" color={'white'} size={30} />
                        </View>
                    </TouchableHighlight>
              </View>*/}
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
    marginTop:'1%',
    marginBottom: '1%',
    flexDirection:'row'
  },
  dayText:{
    color:'white',
    fontWeight:'800',
    fontSize:35
  },

  hourText:{
    color:'white',
    fontWeight:'800',
    fontSize:30,
    fontFamily:'Verdana'
  },

  innerMiddleContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'8%',
    width: '20%',
    //backgroundColor:'white',
    //opacity: 0.8,
    borderRadius: 20,
  },

  leftContainer:{
    //alignItems:'center',
    justifyContent:'center',
    height : '10%',
    marginLeft:'5%',
  //  backgroundColor:'tan',
    width:'50%'
  },

  middleContainer:{
    alignItems:'center',
    justifyContent:'center',
    height : '10%',
    //backgroundColor:'coral',
    width:'30%'
  },

  rightContainer:{
    alignItems:'center',
    justifyContent:'center',
    height : '10%',
    //backgroundColor:'lightblue',
    //width:'10%'
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

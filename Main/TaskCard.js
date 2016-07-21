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
                <Text style={[style.dayText,{color:fontColor}]}>1025</Text>
                <Text style={[style.dayText,{color:fontColor}]}>4hr</Text>
            </View>
            {/*<View style={style.middleContainer}>
                    <View>
                      <Text style={[style.hourText,{color:fontColor}]}>{this.props.hours}Hr</Text>
                    </View>
            </View>*/}
            {/*<View style={style.rightContainer}>
                  <TouchableHighlight onPress={()=>{this._takeToTasksOfTheDay(this.props.date)}}>
                      <View>
                          <Icon name="arrow-right" color={'white'} size={30} />
                      </View>
                  </TouchableHighlight>
            </View>*/}
        </View>

          /*<View style={[style.container,,{backgroundColor:cardColor}]}>
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
                    <TouchableHighlight onPress={()=>{this._takeToTasksOfTheDay()}}>
                        <View>
                            <Icon name="arrow-right" color={'white'} size={30} />
                        </View>
                    </TouchableHighlight>
              </View>
          </View>*/
        );
  }

}

const style = EStyleSheet.create({
  container: {
    height : '$logoImageHeight',
    width  : '$logoImageHeight',
    marginLeft:'1%',
    marginRight: '1%',
    borderRadius: 50,
    marginTop:'1%',
    marginBottom: '1%',
    flexDirection:'row',
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    alignItems:'center',
    justifyContent:'center'
  },
  dayText:{
    fontWeight:'800',
    //fontSize:20
  },

  hourText:{
    color:'white',
    fontWeight:'800',
    fontSize:30,
    fontFamily:'Avenir'
  },

  innerMiddleContainer:{
    alignItems:'center',
    justifyContent:'center',
    height:'8%',
    width: '20%',
    //backgroundColor:'white',
    //opacity: 0.8,
    //borderRadius: 20,
  },

  leftContainer:{
    alignItems:'center',
    justifyContent:'center',
    height : '10%',
    //marginLeft:'5%',
    //backgroundColor:'tan',
    //width:'50%'
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
    height: '$deviceHeight'/10,
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  }

  });
module.exports = DayCard

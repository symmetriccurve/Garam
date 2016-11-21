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
var fontSize = 40
class DayCard extends Component {
  constructor(){
    super();
    this.state={

    }
  }

  _renderTaskList(){
    // <DayCard date = {eachDay.Tasks.Date} color = '#ff8a84' fontColor = '#ffffff' tasks={eachDay.Tasks} totalHours={me._totalTaskHours(eachDay.Tasks)}/>
    var Tasks = this.props.tasks
    var taskArray = Object.keys(Tasks).map(function(k) { return Tasks[k] })
      console.log("taskArray",taskArray);
    if(taskArray.length != 0)
         {
           return(
            taskArray.map(function(eachTask) {
              if(eachTask){
                console.log("here you go", eachTask);
                return(
                  <View style={style.taskContainer} key = {Math.random()+eachTask.TaskNumber}>
                                                <Text style={[style.ProjectSpaceText,{color:'white'}]} key = {Math.random()+eachTask.TaskNumber}>NPDIDS</Text>
                                                <Text style={[style.taskNumberText,{color:'white'}]} key = {Math.random()+eachTask.TaskNumber}>{eachTask.TaskNumber}</Text>
                                                <Text style={[style.hoursText,{color:'white'}]} key = {Math.random()+eachTask.TaskNumber}>{eachTask.TaskHours}H</Text>
                  </View>
              );}
            })
         );
       }else{
         return <View style={{flex:1, alignItems:'center',justifyContent:'center',width:200,height:200,backgroundColor:'coral'}}><Text>Wlcome Card </Text></View>
       }

  }

  componentDidMount(){

      this.setState({
        cardColor  :  this.props.color,
        fontColor  :  this.props.fontColor,
        passedDate :  this.props.someDate,
      })

  }
  componentWillReceiveProps(){

    this.setState({
      cardColor  :  this.props.color,
      fontColor  :  this.props.fontColor,
      passedDate :  this.props.someDate,
    })

  }



  render(){
    console.log("This Props", this.props);
    // var cardColor = this.props.color
    // var fontColor = this.props.fontColor
    // var passedDate = this.props.someDate
      return(
          <View style={style.container} key = {Math.random()}>
            <View style={[style.topContainer,{backgroundColor:this.state.cardColor}]}>
              <View style={style.topInnerContainer}>
                {this._renderTaskList()}
              </View>
            </View>
            <View style={style.bottomContainer}>
                                              <Text style={[style.dayText]}>{this.state.passedDate}</Text>
            </View>
            <View style={style.middleContainer}>
                  <View style={style.innerMiddleContainer}>
                    <Text style={[style.totalHoursText,{color:this.state.cardColor}]}>{this.props.totalHours}</Text>
                    <Text style={[style.totalHoursText,{color:this.state.cardColor}]}>H</Text>
                  </View>
            </View>

          </View>
        );
  }

}

const style = EStyleSheet.create({
  container: {
    height : '80%',
    width  : '100%',
    justifyContent:'center',
    marginTop:'5%'
  },
  topContainer:{
    height:'80%',
    width:'90%',
    backgroundColor:'red',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  bottomContainer:{
    height:'10%',
    width:'90%',
    backgroundColor:'white',
    justifyContent:'center',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
  },
  topInnerContainer:{
    width:'80%',
    //backgroundColor:'yellow',
    marginTop:'5%'
  },
  dayText:{
    fontSize:fontSize,
    fontFamily:'HelveticaNeue-UltraLight',
    color:'grey',
    marginLeft:'5%'
  },
  ProjectSpaceText:{
    fontSize:fontSize,
    fontFamily:'HelveticaNeue-UltraLight',
    color:'grey',
  },
  taskNumberText:{
    fontWeight:'500',
    fontSize:fontSize,
    fontFamily:'HelveticaNeue-UltraLight',
    color:'grey',
    marginLeft:'5%'
  },
  hoursText:{
    fontSize:fontSize,
    fontWeight:'800',
    fontFamily:'HelveticaNeue-UltraLight',
    color:'grey',
    marginLeft:'5%'
  },
  totalHoursText:{
    fontSize:fontSize/1.1,
    fontWeight:'800',
    fontFamily:'HelveticaNeue-UltraLight',
    color:'grey',
  },
  taskContainer:{
    flexDirection:'row',
    marginLeft:20,
    marginRight:20,
    marginBottom:5,
    marginTop:5,
    //backgroundColor:'tan'
  },
  innerMiddleContainer:{
    height:'10%',
    width:'18%',
    borderRadius:'$deviceHeight',
    backgroundColor:'#fff',
    marginRight:'5%',
    shadowColor: "#000000",
    shadowOpacity: 0.05,
    shadowRadius: 7,
    shadowOffset: {
      height: -15,
      width: 0
    },
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },

  leftContainer:{
    //alignItems:'center',
    justifyContent:'center',
    height : '10%',
    //marginLeft:'5%',
    //backgroundColor:'tan',
    //width:'50%'
  },

  middleContainer:{
    position:'absolute',
    width:'90%', borderRadius:5, backgroundColor:'transparent',
    alignItems:'flex-end',
    marginTop:'-15%',
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
  },
   card: {
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%',
      backgroundColor:'#f4f4f4',
      shadowColor: "#000000",
      shadowOpacity: 0.3,
      shadowRadius: 1,
      shadowOffset: {
        height: 1,
        width: -2
      },
    },
    innerCard: {
      // marginTop:60,
      // marginLeft:20,
      // marginRight:20,
      // marginBottom:20,
      width:'90%',
      height:'85%',
      backgroundColor:'coral',
      shadowColor: "grey",
      shadowOpacity: 0.8,
      shadowRadius: 3,
      shadowOffset: {
        height: 1,
        width: 0
      },
    }

  });
module.exports = DayCard

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
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
class DaysList extends Component {
  constructor(){
    super();
    this.state={
      dataSource: ['day 1','day 2']
    }
  }

  componentDidMount(){
    var self = this
      var user = firebase.auth().currentUser;
      var uid = user.uid
      firebase.database().ref('/users/' + uid +'/' + user.displayName ).on('value',function(snapshot){
         var daysList   = Object.keys(snapshot.val()).map(function(k) { return snapshot.val()[k] })
         console.log("snapshot.val()",snapshot.val());
         console.log("daysList",daysList);
         self.setState({
           dataSource: daysList
         })
       });
  }

renderRow(rowData: string, sectionID: number, rowID: number){
      console.log("rowData",rowData);
         return (
               <View style={style.listItem}>

                <Text> {rowData.Day}</Text>
               </View>
           );
 }

 render(){
   return(
      <View style={style.container}>
          <ListView style={style.list}
                    enableEmptySections ={true}
                    dataSource={ds.cloneWithRows(this.state.dataSource)}
                    renderRow={this.renderRow.bind(this)}
          />
      </View>
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
    backgroundColor:'white',
    alignItems:'center',
  },
  image:{
    height: '$logoImageHeight',
    width: '80%',
    alignItems:'center',
    justifyContent:'center',
  },
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'$appBackgroundColor',
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
module.exports = DaysList
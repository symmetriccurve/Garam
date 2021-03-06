import React, { Component } from 'react';

import {
  PropTypes,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  InteractionManager
} from 'react-native'

//node_modules
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBfgi_jQXbTyxtsC37UeVZFbWSV18LyVtU",
   authDomain: "garampro-588bd.firebaseapp.com",
   databaseURL: "https://garampro-588bd.firebaseio.com",
   storageBucket: "garampro-588bd.appspot.com",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


var Login = require('./LoginScreen')
var Register = require('./Register')
var Home = require('./Home')
var UpdateProfile = require('./UpdateProfile')
var AddTask = require('./AddTask')
var TaskList = require('./TaskList')
var DaysList = require('./DaysList')
var DayCard = require('./DayCard')
var AddDay = require('./AddDay')

class Navigation extends Component {
 constructor(props){
    super(props);
    this.state={
      RightDrawerStatus: false,
      LeftDrawerStatus: false,
      navBar: false,
      renderPlaceholderOnly: true,

    }
  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({renderPlaceholderOnly: false});
    });
  }

 static NavigationBarRouteMapper = self => ({
     LeftButton(route, navigator, index, navState) {
       if(1){
        return <TouchableHighlight underlayColor='#990000' onPress={()=>{self.refs.navigator.pop()}}>
        {/*self.refs.navigator.getCurrentRoutes()[1], before popToRoute check to see*/}
                      <View style={{marginLeft:10}}>
                        <Icon name="arrow-back" color={'peachpuff'} size={30} />
                      </View>
               </TouchableHighlight>
      }

     },
     RightButton(route, navigator, index, navState) {
       console.log("route",route);
       if(route.id == 'AddDay'){
         return <TouchableHighlight underlayColor='#990000' onPress={()=>{self.refs.navigator.push({id: "AddDay",title:'Add day'})}}>
                     <View style={{marginRight:10,alignItems:'center',justifyContent:'center',height:40}}>
                        <Text style={{fontSize:20,fontFamily:'HelveticaNeue-UltraLight'}}> Save </Text>
                     </View>
                </TouchableHighlight>
      }else{
        return <TouchableHighlight underlayColor='#990000' onPress={()=>{self.refs.navigator.push({id: "AddDay",title:'Add Task'})}}>
                <View style={{marginRight:10}}>
                  <Icon name="add" color={'grey'} size={30} />
                </View>
               </TouchableHighlight>
      }
     },
     Title(route, navigator, index, navState) {
       return <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={styles.title}> {route.title} </Text>
              </TouchableOpacity>
     }
   });

      renderScene(route, navigator) {
        var routeId = route.id;
        switch (routeId) {
          case 'Login':
                  return (<Login {...route.passProps} navigator={navigator} />);
            break;
          case 'Register':
                return (<Register {...route.passProps} navigator={navigator}/>);
            break;
          case 'Home':
                return (<Home {...route.passProps} navigator={navigator}/>);
            break;
          case 'UpdateProfile':
                return (<UpdateProfile {...route.passProps} navigator={navigator}/>);
            break;
          case 'AddTask':
                return (<AddTask {...route.passProps} navigator={navigator}/>);
            break;
          case 'TaskList':
                return (<TaskList {...route.passProps} navigator={navigator}/>);
            break;
          case 'DaysList':
                return (<DaysList {...route.passProps} navigator={navigator}/>);
            break;
          case 'DayCard':
                return (<DayCard {...route.passProps} navigator={navigator}/>);
            break;
          case 'AddDay':
                return (<AddDay {...route.passProps} navigator={navigator}/>);
            break;
          case 'MyCity':
                return (<MyCity {...route.passProps} navigator={navigator}/>);
            break;
          case 'AlertsDetail':
                return (<AlertsDetail {...route.passProps} navigator={navigator}/>);
            break;
          case 'VideoDetail':
                  return (<VideoDetail {...route.passProps} navigator={navigator}/>);
              break;
          case 'VideoView':
                    return (<VideoView {...route.passProps} navigator={navigator}/>);
                break;
          case 'DeviceDetailMap':
                    return (<DeviceDetailMap {...route.passProps} navigator={navigator}/>);
                break;
          default:
        }
     }

 _navigationBar() {
    if(1){
       return(
         //TODO: Android Naviagtion title is going out of place some times.
         <Navigator.NavigationBar style={{backgroundColor: 'transparent', alignItems: 'center'}}
             routeMapper={Navigation.NavigationBarRouteMapper(this)}/>
       );
    } else{
      return(
        <View/>
      );
    }
 }


 render() {
   return(
            <Navigator
              configureScene={() => ({
              ...Navigator.SceneConfigs.FloatFromRight, // more SceneConfigs: https://facebook.github.io/react-native/docs/navigator.html
              gestures: {}, // drawer gestures and Navigation gestures are conflicting, this will make sure the navigation gesture are disabled
              })}
                 navigationBar={this._navigationBar()}
                   style={{flex:1}}
                   initialRoute={{id: 'Login', component:Login}}
                   renderScene={(route, nav) =>
                 {return this.renderScene(route, nav)}} ref="navigator"
               />
             );

  }
}

EStyleSheet.build(
  {
    deviceHeight: '100%',
    deviceWidth: '100%',
    logoImageHeight:'10%',
    textBoxHeight:'0.8 * $logoImageHeight',
    inputTextFontSize: '0.3 * $logoImageHeight',
    appBackgroundColor: 'coral',
    appTextColor: '#E3E3E3',
    minHeight: '1%',
    lineHeight:'0.8 * $minHeight',
    textInputHeight: '7%',
  }
);

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  LeftMenuIcon: {
    height:40,
    width:40,
    marginLeft:'2%',
    '@media android': {
      marginTop: '1%'
    }
  },
  title: {
    color: 'grey',
    fontWeight:'300',
    '@media android': {
      marginLeft: '22%',
    },
    fontSize: 16,
    fontFamily:'HelveticaNeue-UltraLight'
  },
  rightMenuIcon: {
    height:40,
    width:40,
    marginRight: '2%',
    '@media android': {
      marginTop: '1%'
    }
  }
})

module.exports= Navigation

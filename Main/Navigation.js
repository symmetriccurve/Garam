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
       if(route.id == 'Login'|| route.id =='MainView'){ //Login MainView does not require a backButton as they are part of Home Screen
           return <TouchableHighlight underlayColor='#990000' onPress={()=>{self.openDrawer('left')}}>
                     <Image
                         style={styles.LeftMenuIcon}
                           source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                       />
                  </TouchableHighlight>
      }else if(route.id =='AlertsDetail'){
        return <TouchableHighlight underlayColor='#990000' onPress={()=>{self.refs.navigator.pop()}}>
                        <Image
                            style={styles.LeftMenuIcon}
                              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                          />
               </TouchableHighlight>
      }else{
        return <TouchableHighlight underlayColor='#990000' onPress={()=>{self.refs.navigator.pop()}}>
        {/*self.refs.navigator.getCurrentRoutes()[1], before popToRoute check to see
          */}
                        <Image
                            style={styles.LeftMenuIcon}
                              source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                          />
               </TouchableHighlight>
      }

     },
     RightButton(route, navigator, index, navState) {
       return <TouchableHighlight underlayColor='#990000' onPress={()=>{Actions.fetch_events(),self.openDrawer('right')}}>
                 <Image
                    style={styles.rightMenuIcon}
                    source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
                   />
              </TouchableHighlight>
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
          case 'Account':
                return (<Account {...route.passProps} navigator={navigator}/>);
            break;
          case 'FavLocation':
                return (<FavLocation {...route.passProps} navigator={navigator}/>);
            break;
          case 'Home':
                return (<Home {...route.passProps} navigator={navigator}/>);
            break;
          case 'Work':
                return (<Work {...route.passProps} navigator={navigator}/>);
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
         <Navigator.NavigationBar style={{backgroundColor: 'tan', alignItems: 'center'}}
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
    logoImageHeight: '10%',
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
    color: 'white',
    '@media android': {
      marginLeft: '22%',
    },
    fontSize: 16
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

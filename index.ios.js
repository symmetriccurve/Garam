/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDcJw4w_vBKn9iW0R7eO1QkQWQRkHpDn-A",
    authDomain: "garam-d452e.firebaseapp.com",
    databaseURL: "https://garam-d452e.firebaseio.com",
    storageBucket: "garam-d452e.appspot.com",
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

class Garam extends Component {
  render() {
    firebase.auth().createUserWithEmailAndPassword("vikramb@gmail.com", "somePassword").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

var user = firebase.auth().currentUser;

if (user) {
  console.log("user",user);
} else {
  console.log("no user Signed in");
}

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Garam', () => Garam);

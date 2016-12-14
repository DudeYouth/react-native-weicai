/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";
import React, { Component } from "react";
import {
  Navigation,
  Scene,
  Router
} from 'react-native-router-flux';
import Index from './component/index';
import Me from './component/me';
import Icon from 'react-native-vector-icons/FontAwesome';
class App extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const iconSize=30;
      return (
        <Router name="root">
          <Scene key="index" component={Index} title="index"></Scene>
          <Scene key="me" component={Me} title="me"></Scene>
        </Router>
      )
    }
}
let styles=StyleSheet.create({
  navbarColor:{
      backgroundColor:"#666",
  }
})
AppRegistry.registerComponent('reactnative', () => App);
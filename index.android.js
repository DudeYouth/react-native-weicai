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
import NaviogationBar from "react-native-navbar";
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
  createRouter,
} from '@exponent/ex-navigation';
import Index from './component/index';
import Me from './component/me';
import Icon from 'react-native-vector-icons/FontAwesome';
const Router= createRouter(() => ({
  index: () => Index,
  me: () => Me,
}));
class App extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const iconSize=30;
      return (
        <View style={{flex:1}}>
          123
        </View>
      )
    }
}
let styles=StyleSheet.create({
  navbarColor:{
      backgroundColor:"#666",
  }
})
AppRegistry.registerComponent('reactnative', () => App);
'use strict';
import React, { Component } from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react/native";
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';
import NaviogationBar from "react-native-navbar";
import Page from "./page";
export default class List extends Component {
  constructor(props){
    super(props);
  }
  render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = Page;
        return (
            <NaviogationBar style={styles.navbarColor} title={{title:"首页",tintColor:"#fff"}} rightButton={{title:"下一页"}} leftButton={{title:"返回"}} />
        );
  }
}

const styles = StyleSheet.create({
    navbarColor:{
        backgroundColor:"#00CCFF",
    }
});


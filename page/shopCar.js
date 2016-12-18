'use strict';
import React, { Component } from 'react';
import {observable,action} from "mobx";
import {observer} from "mobx-react/native";
import SQLite from 'react-native-sqlite-storage';
import commonCss from "../styles/commonStyle";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  TouchableOpacity,
  RecyclerViewBackedScrollView,
} from 'react-native';
import {
  Navigation,
  Scene,
  Router,
  Actions
} from 'react-native-router-flux';

import Themelist from "../component/themelist";

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let data=observable({
    dataSource:ds.cloneWithRows( [
        {title:"title1",label:"A simple applicatiion",content:"We designed a simple application to focus on demonstrating how these technologies can be used together"},
    ])
})
@observer export default class List extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {navigator}=this.props;
    return (
      <ScrollView style={commonCss.container}>
        <ListView dataSource={data.dataSource} renderRow={
            rowData => 
            <TouchableOpacity onPress={Actions.info}>
                <Themelist {...rowData}/>
            </TouchableOpacity>
            }

        />
      </ScrollView>
    );
  }
}



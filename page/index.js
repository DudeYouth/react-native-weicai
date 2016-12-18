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

// let db=SQLite.openDatabase({name: 'testDB', location: 'default'}, ()=>{console.log(1)}, ()=>{console.log(2)});
//   db.transaction(function(tx) {
//     tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
//     tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
//     tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
//   }, function(error) {
//     console.log('Transaction ERROR: ' + error.message);
//   }, function() {
//     console.log('Populated database OK');
//   })
//   db.transaction(function(tx) {
//     tx.executeSql('SELECT * FROM DemoTable', [], function(tx, rs) {
//       console.log('Record count (expected to be 2s): ' + JSON.stringify(rs.rows.item(3)));
//     }, function(tx, error) {
//       console.log('SELECT error: ' + error.message);
//     });
//   });
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
  // componentDidMount(){
  //     this.request();
  // }
  // @action request(){
  //     fetch("http://192.168.1.102:3000", {
  //       method : 'get',
  //       headers : {
  //           'Content-Type': 'application/json',
  //       }
  //   }).then(response => {response.json().then(res=>{data.dataSource=ds.cloneWithRows(res)})}).catch(res=>{
  //         console.log(res,123456);
  //     })
  // }
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



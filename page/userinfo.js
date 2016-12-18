'use strict';
import React, { Component } from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react/native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
} from 'react-native';
import commonStyle from "../styles/commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';


@observer export default class Userinfo extends Component {
  constructor(props){
    super(props);
  }
  render() {
      const iconSize=30;
    return (
      <ScrollView style={commonStyle.container}>
        <View style={styles.list}>
          <Text style={styles.title}>微采头像</Text>
          <View style={styles.content}><Image style={{width:60,height:60,alignItems:"flex-end"}} source={require("../images/avatar.png")} /><Icon name="angle-right" size={30}  style={styles.icon}/></View>
        </View>
        <View style={styles.list}>
          <Text style={styles.title}>用户名</Text>
          <View style={styles.content}><Text style={{fontSize:18}}>黄奇颖</Text><Icon name="angle-right" style={styles.icon} size={30}  /></View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   list:{
       borderBottomWidth:1,
       borderColor:"#ddd",
       paddingTop:15,
       paddingBottom:15,
       flexDirection:"row",
       padding:10,
       alignItems:"center",
   },
   title:{
       flex:1,
       justifyContent:"flex-start",
       alignItems:"center",
       fontSize:18,
   },
   content:{
       flex:1,
       justifyContent:"flex-end",
       flexDirection:"row",
       alignItems:"center",
   },
   icon:{
      marginRight:10,
      marginLeft:10,
   }
});


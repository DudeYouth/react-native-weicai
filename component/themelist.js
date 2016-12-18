'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class List extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return <View style={styles.listContainer} >
        <Image style={styles.imgSize} source={require("../images/avatar.png")} />
        <View style={styles.listContent}>
        <Text style={{fontWeight:"bold",fontSize:18}}>{this.props.title}</Text>
        <Text>{this.props.label}</Text>
        <Text>{this.props.content}</Text>
        </View>
    </View>
  }
}

const styles = StyleSheet.create({
    listContainer:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#eee",
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        alignItems:"center"
    },
    listContent:{
        flex:1,
    },
    imgSize:{
        width:90,
        height:80,
        borderWidth:1,
        marginRight:5,
    }
});


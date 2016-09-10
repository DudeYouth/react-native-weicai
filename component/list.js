'use strict';
import React, { Component } from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react/native";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  RecyclerViewBackedScrollView,
} from 'react-native';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let data=observable({
    dataSource: ds.cloneWithRows(['row 1', 'row 2',"row3","row3","row3","row3","row3","row3"])
})
@observer export default class List extends Component {
  constructor(props){
    super(props);
  }
  render() {
      console.log(data.list);
    return (
      <ScrollView style={styles.container}>
        <ListView dataSource={data.dataSource} renderRow={
            rowData => 
                <View style={styles.listContainer}>
                    <Image style={styles.imgSize} source={{uri:'http://p4.gexing.com/kongjianpifu/20120807/1714/5020dc751ebfc.jpeg'}} />
                    <Text style={styles.listContent}>{rowData}1</Text>
                </View>
            }

        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        height:200,
        borderWidth:1,
        borderColor:"red",
    },
    listContainer:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#eee",
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
    },
    listContent:{
        flex:1,
    },
    imgSize:{
        width:120,
        height:100,
    }
});


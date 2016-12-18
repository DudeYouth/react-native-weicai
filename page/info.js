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
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import Swiper from "react-native-swiper";
import Propup from '../component/popup';
import commonStyle from "../styles/commonStyle";

export default class ractnativeTest extends Component {
  constructor(props){
    super(props);
    this.state={
      isShow:false,
    }
  }
  render() {
    let shareOptions={
      title:"react-native",
      messgae:"holle word!",
      url:"http://facebook.github.io/react-native/",
      subject:"Share Link"
    };
    return (
      <View style={{position:"relative",height:Dimensions.get('window').height,backgroundColor:"#ccc"}}>
        <Swiper height={250}>
          <View>
            <Image source={require("../images/tu01.jpg")} />
          </View>
          <View>
            <Image source={require("../images/tu02.jpg")} />
          </View>
          <View>
            <Image source={require("../images/tu03.png")} />
          </View>
        </Swiper>
        <View style={{padding:10,backgroundColor:"#fff"}}>
          <Text style={{fontSize:16,fontWeight:"bold",color:"#333"}}>&nbsp;&nbsp;&nbsp;研究还发现，大多数Tor隐藏服务器的在线状态都只保持几天或数周。从研究开始到结束的六个月期间，不到六分之一的服务器是一直保持在线的。</Text>
          <View style={{flexDirection:"row",paddingTop:10}}>
            <Text style={styles.msgItem}>快递：0.00</Text>
            <Text style={styles.msgItem}>月销250笔</Text>
            <Text style={styles.msgItem}>快递：0.00北京</Text>
          </View>
        </View>
        <View style={{backgroundColor:"#fff",marginTop:20,padding:10}}>
            <Text style={{fontSize:16,fontWeight:"bold",color:"#333"}}>用户评价</Text>
            <View style={{paddingTop:10}}>
              <Text style={{fontSize:15,fontWeight:"bold",color:"#555"}}>黄先生</Text>
              <Text style={{fontSize:14,paddingTop:10,paddingBottom:10}}>藏服务器的在线状态都</Text>
            </View>
        </View>
        <View style={styles.navMenu}>
          <TouchableOpacity onPress={Actions.register} style={[styles.navItem,{flex:1,}]}>
            <Text>店铺</Text>
          </TouchableOpacity> 
          <View style={[styles.navItem,{flex:1}]}>
            <Text>收藏</Text>
          </View>
          <TouchableOpacity style={[styles.navItem,{flex:2,backgroundColor:"#FF9900",borderRightWidth:0}]} onPress={()=>{Propup.open();}}>
            <Text style={{color:"#fff",fontSize:16}}>加入购物车</Text>
          </TouchableOpacity>
          <View style={[styles.navItem,{flex:2,backgroundColor:"#FF6633",borderRightWidth:0}]}>
            <Text style={{color:"#fff",fontSize:16}}>立即购买</Text>
          </View>
        </View>
        <Propup isShow={this.state.isShow}>
          <View style={{flexDirection:"row"}}>
            <Image style={{width:80,overflow:"hidden",height:80,padding:10}} source={require("../images/tu02.jpg")}/>
            <View style={{flex:1,paddingLeft:10}}>
              <Text style={[styles.propsText,{color:"#FF6633",fontWeight:"bold"}]}>￥59</Text>
              <Text style={styles.propsText}>库存6329件</Text>
              <Text style={styles.propsText}>请选择&nbsp;颜色分类</Text>
            </View>
          </View>
          <Text style={commonStyle.title}>颜色分类</Text>
          <View></View>
          <Text style={commonStyle.title}>规格</Text>
        </Propup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navMenu:{
    position:"absolute",
    left:0,
    height:60,
    bottom:20,
    width:Dimensions.get('window').width,
    flexDirection:"row",
    backgroundColor:"#fff",
  },
  navItem:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    borderRightWidth:0.6,
    borderTopWidth:0.6,
    borderColor:"#ddd"
  },
  msgItem:{
    flex:1,
    alignItems:"center",
    textAlign:"center",
    justifyContent:"center",
  },
  propsText:{
    padding:2
  }
});


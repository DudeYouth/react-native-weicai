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
  TouchableOpacity,
} from 'react-native';
import {Actions} from "react-native-router-flux";
import commonStyle from "../styles/commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

@observer export default class Me extends Component {
  constructor(props){
    super(props);
  }
  render() {
      const iconSize=30;
    return (
      <ScrollView style={commonStyle.containerBackgroundColor}>
        <View>
            <View style={[styles.item,styles.headerItem]}>
                <Image source={require('../images/avatar.png')} style={styles.avatar}/>
                <TouchableOpacity style={styles.headerContainer} onPress={Actions.userinfo}>
                    <Text style={styles.strong}>我的姓名</Text>
                    <Text style={{color:"#e5e5e5"}}>高级会员</Text>
                </TouchableOpacity>
                <Text style={styles.color}>账户管理&nbsp;&nbsp;<Icon name="angle-right" size={20}/></Text>
            </View>
            <View style={styles.item}>
                <View style={styles.childItem}>
                    <Icon name="credit-card" size={20}/>
                    <Text style={styles.paddings}>待付款</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="truck" size={20} />
                    <Text style={styles.paddings}>待收货</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="clone" size={20} />
                    <Text style={styles.paddings}>待评价</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="credit-card" size={20} />
                    <Text style={styles.paddings}>物流跟踪</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.childItem}>
                    <Icon name="archive" size={20} />
                    <Text style={styles.paddings}>我的店铺</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="shopping-bag" size={20}/>
                    <Text style={styles.paddings}>上架商品</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="file-text-o" size={20}/>
                    <Text style={styles.paddings}>我的订单</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="comment" size={20}/>
                    <Text style={styles.paddings}>消息中心</Text>
                </View>
            </View>
            <View style={[styles.item,{marginBottom:0,borderBottomWidth:1,borderColor:"#ededed"}]}>
                <View style={styles.childItem}>
                    <Icon name="paper-plane" size={iconSize} style={{color:"#0099FF"}}/>
                    <Text style={styles.paddings}>关注的商品</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="heart" size={iconSize} style={{color:"#CC0066"}}/>
                    <Text style={styles.paddings}>关注的店铺</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="list-alt" size={iconSize} style={{color:"#CC9966"}}/>
                    <Text style={styles.paddings}>浏览记录</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="envelope" size={iconSize} style={{color:"#9966CC"}}/>
                    <Text style={styles.paddings}>服务/反馈</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.childItem}>
                    <Icon name="star" size={iconSize} style={{color:"#CC6633"}}/>
                    <Text style={styles.paddings}>今日推荐</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="shopping-cart" size={iconSize} style={{color:"#CC3399"}}/>
                    <Text style={styles.paddings}>校友热购</Text>
                </View>
                <View style={styles.childItem}>
                    <Icon name="shopping-basket" size={iconSize} style={{color:"#339999"}}/>
                    <Text style={styles.paddings}>同校淘</Text>
                </View>
                <View style={styles.childItem}>
                    
                    <Text style={styles.paddings}></Text>
                </View>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    item:{
        padding:15,
        backgroundColor:"#fff",
        flex:1,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
    },
    headerItem:{
        paddingTop:50,
        paddingBottom:50,
        marginBottom:0,
        backgroundColor:"#0099FF",
    },
    childItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    color:{
        color:"#fff",
    },
    paddings:{
        paddingTop:10,
        paddingBottom:5,
    },
    strong:{
        fontWeight:"bold",
        fontSize:18,
        color:"#fff",
    },
    headerContainer:{
        flex:1,
        alignItems:"flex-start",
        paddingLeft:10,
    },
    avatar:{
        width:60,
        height:60,
        borderRadius:30,
    }
});


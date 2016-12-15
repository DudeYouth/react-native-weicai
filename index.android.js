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
import Info from './component/info';
import Type from './component/type';
import Car from './component/shopCar';
import Icon from 'react-native-vector-icons/FontAwesome';
class TabBar extends Component{
  constructor(props){
    super(props);
    this.data={
      index:{
        title:"首页",
        icon:"home",
      },
      type:{
        title:"分类",
        icon:"th-large",
      },
      car:{
        title:"购物车",
        icon:"shopping-cart",
      },
      me:{
        title:"我的",
        icon:"user",
      }
    }
  }
  render(){
    let param=this.data[this.props.sceneKey];
    let activeStyle=this.props.selected?{color:"#3399FF"}:{};
    return <View>
      <Icon name={param.icon} color={activeStyle.color} size={25}/>
      <Text style={[activeStyle,styles.tabbarItem]}>{param.title}</Text>
    </View>
  }
}
class App extends Component {
    constructor(props){
      super(props);
    }
    render() {
      const iconSize=30;
      return (
        <Router>
          <Scene key="tabbar" name="tabbar" duration={0} tabs={true} style={styles.tabbarContainer} initial={true}>
            <Scene key="index" duration={0} component={Index} title="首页" icon={TabBar} />
            <Scene key="type" duration={0} component={Type} title="分类" icon={TabBar} />
            <Scene key="car" duration={0} component={Car} title="购物车" icon={TabBar} />
            <Scene key="me"  duration={0} component={Me} hideNavBar={true} title="我的" icon={TabBar} />
          </Scene>
          <Scene key="info" duration={0}  component={Info} title="详情"></Scene>
        </Router>
      )
    }
}
var styles=StyleSheet.create({
    tabbarContainer:{
      flex:1,
      backgroundColor:"#f6f6f6",
    },
    tabbarItem:{
      alignItems:"center",
      justifyContent:"center",
      textAlign:"center",
      marginLeft:-3
    }
})
AppRegistry.registerComponent('reactnative', () => App);
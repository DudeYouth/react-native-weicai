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
import Swiper from 'react-native-swiper';

export default class Info extends Component {
  constructor(props){
    super(props);
  }
  render() {
      
    return (
      <View style={{height:200}}>
        <Swiper >
            <View>
                <Image source={require('../images/tu01.jpg')} />
            </View>
            <View>
                <Image source={require('../images/tu02.jpg')} />
            </View>
            <View>
                <Image source={require('../images/tu03.png')}/>
            </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


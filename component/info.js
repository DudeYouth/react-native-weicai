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

@observer export default class Info extends Component {
  constructor(props){
    super(props);
  }
  render() {
      
    return (
      <View>
        <Swiper>
            <View>
                <Image source='../images/tu01.jpg' />
            </View>
            <View>
                <Image source='../images/tu02.jpg' />
            </View>
            <View>
                <Image source='../images/avatar.png' />
            </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


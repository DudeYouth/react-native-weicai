import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import List from './component/list';
class reactnative extends Component {
  render() {
    return (
      <ScrollView>
        <List />
        <List />
        <List />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('reactnative', () => reactnative);

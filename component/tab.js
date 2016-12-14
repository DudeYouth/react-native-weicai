'use strict';
import React, { Component } from 'react';
import {observable} from "mobx";
import {observer} from "mobx-react/native";
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View,
  TabBarIOS,
} from 'react-native';
import Page from "./page";
export default class List extends Component {
  constructor(props){
    super(props);
  }
  _renderContent(color:string, pageText: string, num?: number) {
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    )
  }
  render() {
        return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Blue Tab"
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
          {this._renderContent('#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="history"
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab', this.state.notifCount)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./flux.png')}
          selectedIcon={require('./relay.png')}
          renderAsOriginal
          title="More"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1
            });
          }}>
          {this._renderContent('#21551C', 'Green Tab', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
        );
  }
}

const styles = StyleSheet.create({
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    title:{
        flex:1,
        borderWidth:1,
        borderColor:"red",
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText:{
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    navStyle:{
        backgroundColor: '#55ACEE',
        paddingTop: 12,
        paddingBottom: 10,
        borderWidth:1,
        borderColor:"red",
    },
    button:{

    },
    buttonText:{

    }
});


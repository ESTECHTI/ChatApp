import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Constants } from 'expo';
import { redColor, strongYellow, lightGray, whiteColor } from '../Colors';
import Conversas from './Conversas';
import Contatos from './Contatos';

import TabBarMenu from './TabBarMenu';
 
export default class Principal extends Component {
    state = {
        index: 0,
        routes: [
          { key: 'first', title: 'Conversas' },
          { key: 'second', title: 'Contatos' }
        ],
      };
    
      _handleIndexChange = index => this.setState({ index });
    
      _renderTabBar = props => <TabBarMenu {...props}/>;
    
      _renderScene = SceneMap({
        first: Conversas,
        second: Contatos
      });
    
      render() {
        return (
          <TabView
            navigationState={this.state}
            renderScene={this._renderScene}
            renderTabBar={this._renderTabBar}
            onIndexChange={this._handleIndexChange}
            initialLayout={{
              width: Dimensions.get('window').width,
            }}
          />
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
          flex: 1
      },
      scene: {
        flex: 1,
      },
      header: {
        paddingTop: Constants.statusBarHeight,
      },
    });
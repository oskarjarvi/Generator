import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import MainTabNavigator from './navigation/MainTabNavigator';
import * as firebase from 'firebase';
import Config from './constants/Config';

export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      loading: true,
      authenticated:false,
    };
    if(!firebase.apps.length) {firebase.initializeApp(Config.FireBaseConfig);}
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loading: false, authenticated: true });
      } else {
        this.setState({ loading: false, authenticated: false });
      }
    });
  }

  render() {
    if (!this.state.authenticated) {
      return <AppNavigator />;
    }

    return <MainTabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

// ? require('../assets/images/robot-dev.png')
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    Title: null,
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.container}>
            <Image git s/>
            <Image />
            <Image />
            <Image />
            <Image />

          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

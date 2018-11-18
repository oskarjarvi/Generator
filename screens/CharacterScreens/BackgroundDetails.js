import React from 'react';
import {getValues, getValuesFromUri} from '../../utility/api';
import data from '../../components/data/';
import Utility from '../../utility/functions';
import CustomButton from '../../components/custombutton'
import Info from '../../components/character/info';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableHighlight,
  Button
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const utility = new Utility()

export default class BackgroundScreen extends React.Component {
  static navigationOptions = {
    title: 'Character Generator',
  };
  componentDidMount() {

  };

  render() {

    return (
      <View style={styles.container}>

            <Text>BackgroundStory: </Text>

          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container:
      {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
      },
      section:
      {
        height:100,
        margin:10,
        flexDirection:'column'
      },
      information:
      {
        flexDirection:'row'
      },
      descriptions:
      {
        fontSize:24,
      },
      generateButton:
      {
        justifyContent:'flex-end'
      }
    });

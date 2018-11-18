import React from 'react';
import {getValues, getValuesFromUri} from '../utility/api';
import data from '../components/data/';
import Utility from '../utility/functions';
import CustomButton from '../components/custombutton'
import * as firebase from 'firebase'
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
import Info from '../components/character/info';
const utility = new Utility()

export default class LinksScreen extends React.Component {
  state = {
character:false
  }

  componentDidMount()
  {
    // userRef = firebase.auth().currentUser.uid
    //
    // firebase.database().ref(`Users/${userRef}`).once('value', snapshot => {
    //     console.log(snapshot.val())
    })
}


  render() {

    return (
      <View>

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

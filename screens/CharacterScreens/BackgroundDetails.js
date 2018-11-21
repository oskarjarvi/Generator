import React from 'react';
import {getValues, getValuesFromUri} from '../../utility/api';
import data from '../../components/data/';
import Utility from '../../utility/functions';
import CustomButton from '../../components/custombutton'
import Info from '../../components/character/info';
import { Icon } from 'expo';
import { Ionicons} from '@expo/vector-icons';

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
  Button,
  AsyncStorage,
  ImageBackground

} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const utility = new Utility()

export default class BackgroundScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  state = {
      Race:false,
      Story:false,
  }
  async getCharacterName()
  {
    utility.retrieveItem('RaceName').then((item) =>
    {
        this.setState({Race:item.name})
        console.log(this.state.Race)
    })
    .then(this.getStory())
  }
  getStory()
  {
    utility.getStory(data.RaceInfo[this.state.Race]).then((item) => {
      console.log(item)
      this.setState({Story: item})
    })

  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/paper.png')} style={styles.background}>
          <Icon.Ionicons
            name="ios-arrow-round-back"
            size={40}
            onPress={() => this.props.navigation.navigate('Characters')}
            style={styles.icon}
            />
        <CustomButton style={styles.generateButton}onPress={()=> this.getCharacterName()} text="Generate the backgroundstory"/>
        <Text style={styles.sectionTitle}>Background Story:</Text>
        <Text style={styles.story}>{this.state.Story}</Text>
      </ImageBackground>
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
  sectionTitle:
  {
    marginTop:10,
    fontSize: 20,
    marginLeft: 10,
  },
  story:{
    padding:20,
    fontSize:20,
    fontStyle:'italic'
  },
  icon: {
    margin:15
  },
  background:
  {
    width:'100%',
    height:800,
    paddingTop:20
  },
});

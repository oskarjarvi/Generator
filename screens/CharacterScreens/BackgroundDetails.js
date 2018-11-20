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
  Button,
  AsyncStorage,
  ImageBackground

} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
const utility = new Utility()

export default class BackgroundScreen extends React.Component {
  static navigationOptions = {
    title: 'Character Generator',
  };
  state = {
      Race:false
  }
  componentDidMount()
  {
    this.getCharacterName()
  }
  async getCharacterName()
  {
    utility.retrieveItem('RaceName').then((item) =>
    {
      if(item.name !== this.state.Race.name)
      {
        this.setState({Race:item})
      }

    })

  }
  getStory()
  {
    return <View>
      <Text>{this.state.Race && data.RaceInfo[this.state.Race.name].BackgroundStory} </Text>
    </View>
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/paper.png')} style={styles.background}>

        <CustomButton style={styles.generateButton}onPress={()=> this.getCharacterName()} text="Generate the backgroundstory"/>
        {this.getStory()}
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
  },
  background:
  {
    width:'100%',
    height:800,
    paddingTop:20
  }
});

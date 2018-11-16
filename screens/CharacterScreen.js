import React from 'react';
import {getValues, getValuesFromUri} from '../utility/api';
import data from '../components/data/';
import Utility from '../utility/functions';
import CustomButton from '../components/custombutton'
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
  static navigationOptions = {
    title: 'Character Generator',
  };
  componentDidMount() {
    getValues('classes').then(res => this.setState({classes:res}))
    getValues('races').then(res => this.setState({races:res}))
  };

  state = {
    initialCharacter: false,
    randomizedClass : false,
    randomizedRace : false,
    subInfo:false,
    subClass:false,
    subRace:false,
    classes :false,
    races: false,
    stories: false,
  }

  generateCharacter()
  {
    utility.Class(this)
    utility.Race(this)
    this.setState({initialCharacter:true})
  }
  character = {
      Race: this.state.randomizedRace.name,
      Class: this.state.randomizedClass.name,
    }
  render() {

    return (
      <View style={styles.container}>
        <CustomButton onPress={()=> this.generateCharacter()} text="Randomize your character"/>

        <Info title="Race" {...this.state.randomizedRace} subData={this.state.subRace}>
          {this.state.initialCharacter ?
            <CustomButton style={styles.generateButton}onPress={()=> {utility.Race(this)}} text="Randomize your Race"/>
            : <Text></Text>}
          </Info>

          <Info title="Class" {...this.state.randomizedClass} subData={this.state.subClass}>
            {(this.state.initialCharacter) ?
              <CustomButton onPress={()=> {utility.Class(this)}} text="Randomize your Class"/>
              : <Text></Text>}
            </Info>

            <Text>BackgroundStory: {this.state.randomizedRace.name && data.RaceInfo[this.state.randomizedRace.name].Names.namer}</Text>

            <CustomButton onPress={()=> {}} text="Save your Character"/>

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

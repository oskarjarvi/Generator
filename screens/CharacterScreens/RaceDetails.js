import React from 'react';
import {getValues, getValuesFromUri} from '../../utility/api';
import data from '../../components/data/';
import Utility from '../../utility/functions';
import CustomButton from '../../components/custombutton';
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

export default class RaceScreen extends React.Component {

  componentDidMount() {
    getValues('classes').then(res => this.setState({classes:res}))
    getValues('races').then(res => this.setState({races:res}))
  };

  state = {
    initialCharacter: false,
    randomizedRace : false,
    subRace:false,
    classes :false,
    races: false,
    stories: false,
    CharacterName: false,
  }

  renderDetails()
  {
    if(this.state.subRace)
    {
      return <View styles={styles.descriptions}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.subRace.traits}
          renderItem={({item}) =>
          <Text>{item.name}</Text>}
           />
      </View>
    }
  }

  saveCharacter()
  {
    if(this.state.randomizedRace)
    {
      utility.CharacterName(data.RaceInfo[this.state.randomizedRace.name], this)
      console.log(this.state.CharacterName)
    }
    // character =
    //   {
    //     Name: this.state.CharacterName,
    //     Race: this.state.randomizedRace.name,
    //     Class: this.state.randomizedClass.name,
    //   }
      // utility.Save(character)
  }

  render() {

    return (
      <View style={styles.container}>
        <CustomButton style={styles.generateButton}onPress={()=> {utility.Race(this)}} text="Randomize your Race"/>

        <Info title="Race" {...this.state.randomizedRace} subData={this.state.subRace}>
          </Info>
          <Text> Description:</Text>
          <Text>{this.state.subRace.alignment} </Text>
          <Text>Age: {this.state.subRace.age}</Text>
          <Text>Languages: {this.state.subRace.language_desc} </Text>
          <Text>Size: {this.state.subRace.size_description}</Text>
          <Text>Traits:</Text>
            {this.renderDetails()}
          <CustomButton onPress={()=>{this.saveCharacter()} } text="Save your Character"/>

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

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

export default class ClassScreen extends React.Component {

  componentDidMount() {
    getValues('classes').then(res => this.setState({classes:res}))
    getValues('races').then(res => this.setState({races:res}))
  };

  state = {
    randomizedClass : false,
    subClass:false,
    classes :false,
  }


  saveCharacter()
  {
    character =
      {
        Name: this.state.CharacterName,
        Race: this.state.randomizedRace.name,
        Class: this.state.randomizedClass.name,
      }
      utility.Save(character)
  }
  renderProficiencies()
  {
    if(this.state.subClass)
    {
      return <View styles={styles.descriptions}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.subClass.proficiencies}
          renderItem={({item}) =>
          <Text>{item.name}</Text>}
           />
      </View>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomButton onPress={()=> {utility.Class(this)}} text="Randomize your Class"/>
          <Info title="Class" {...this.state.randomizedClass} subData={this.state.subClass}>
            </Info>
            <Text> Proficiencient in</Text>{this.renderProficiencies()}
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

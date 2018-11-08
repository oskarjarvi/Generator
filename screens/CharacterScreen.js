import React from 'react';
import {getValues, getValuesFromUri} from '../api/api';
import Backstories from '../components/data/';
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

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Character Generator',
  };
  componentDidMount() {
    getValues('classes').then(res => this.setState({classes:res}))
    getValues('races').then(res => this.setState({races:res}))

  };
  componentDidUpdate()
  {

  }
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

  GenerateItem(array)
  {
    return new Promise((resolve,reject) =>
    {
      let item =array.results[Math.floor(Math.random()*array.count)];
      if(!item)
      {
        reject('couldnt generate a random value')
      }
      resolve(item)
    });
  }

  generateCharacter()
  {
    this.generateClass()
    this.generateRace()
    this.setState({initialCharacter:true})
  }

  async generateClass()
  {
    const classes = await this.GenerateItem(this.state.classes)
    this.setState({randomizedClass: classes})

    const item3 = await this.generateSubinfo('classes/', this.state.randomizedClass)
    this.setState({subClass: item3})
  }
  async generateRace()
  {
    const races = await this.GenerateItem(this.state.races)
    this.setState({randomizedRace: races})

    const item4= await getValuesFromUri(this.state.randomizedRace.url)
    this.setState({subRace: item4})
  }
  generateSubinfo(url, endpoint)
  {
    return new Promise((resolve, reject)=>
    {
      if(endpoint)
      {
        let name = endpoint.name.toLowerCase()
        getValues(`${url}${name}`).then(res=>
          {
            resolve(res)
          })
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.GenerateButton}
          onPress={() => this.generateCharacter()}>
          <Text> Randomize your character </Text>
        </TouchableOpacity>
        <View style={styles.section}>
        <View style={styles.information}>
          <Text style={styles.descriptions}>Race: {this.state.randomizedRace.name}</Text>
          {this.state.initialCharacter ?
            <TouchableOpacity
              style={styles.GenerateButton}
              onPress={() => this.generateRace()}>
                <Text> Randomize your Race </Text>
              </TouchableOpacity>
              : <Text></Text>}
            </View>
              <View style={styles.subinfo}>
                <Text>SubRaces: </Text>
                  {this.state.subRace.subraces && this.state.subRace.subraces[0] ?
                  <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.subRace.subraces}
                    renderItem={({item}) =>
                    <Text>{item.name}</Text>}
                     />
                   : <Text>This race doesnt have a subrace</Text>}
                  </View>
            </View>
            <View style={styles.section}>
            <View style={styles.information}>
              <Text style={styles.descriptions}>Class: {this.state.randomizedClass.name}</Text>
              {(this.state.initialCharacter) ?
                <TouchableOpacity
                  style={styles.GenerateButton}
                  onPress={() => this.generateClass()}>
                    <Text> Randomize your Class </Text>
                  </TouchableOpacity>
                  : <Text></Text>}
                </View>
                  <Text style={styles.subinfo}> SubClass: {this.state.subClass.subclasses && this.state.subClass.subclasses[0].name}</Text>
                </View>
                <Text>BackgroundStory: {this.state.randomizedRace.name && Backstories[this.state.randomizedRace.name].name}</Text>
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
          GenerateButton:
          {
            height:40,
            alignItems:'center',
            justifyContent:'center',
            width:200,
            backgroundColor:'gray',
            borderRadius:10,
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:10,
          },
          descriptions:
          {
            fontSize:24,

          },
          subinfo:
          {

          }
        });

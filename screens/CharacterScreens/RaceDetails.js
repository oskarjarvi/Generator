import React from 'react';
import {getValues, getValuesFromUri} from '../../utility/api';
import data from '../../components/data/';
import Utility from '../../utility/functions';
import CustomButton from '../../components/custombutton';
import Info from '../../components/character/info';
import {Constants} from 'expo'
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

export default class RaceScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
  componentDidMount() {
    getValues('races').then(res => this.setState({races:res}))
    this.getParams()
  };

  state = {
    subRace:false,
    races: false,
    CharacterName: false,
    initialCharacter: false,
    className: false
  }

  renderDetails()
  {
    if(this.state.subRace)
    {
      return <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.subRace.traits}
          renderItem={({item}) =>
          <Text style={styles.descriptions}>{item.name}</Text>}
            />
        </View>
      }
    }

    async saveCharacter()
    {
      if(this.state.randomizedRace)
      {
        utility.storeItem('CharacterName', this.state.CharacterName)
        currentDate= new Date().toDateString()
        character =
        {
          Name: this.state.CharacterName,
          Race: this.state.subRace,
          Class: this.state.className,
          Created: currentDate
        }
        utility.Save(character)
      }
    }
    async getParams()
    {
      const Name = this.props.navigation.getParam('Name', this.state.CharacterName)
      this.setState({CharacterName: Name})
      const Race = this.props.navigation.getParam('Race', this.state.randomizedRace)
      if(Race)
      {
        this.setState({subRace: Race})
      }
      const Class = this.props.navigation.getParam('Class', this.state.className)
      if(Class)
      {
        utility.storeItem('Class', Class)
      }
      else if(!Class)
      {
        console.log('nah mate')
        utility.removeItem('Class')
      }

    }

    render() {
      return (
        <ScrollView style={styles.container}>
          <ImageBackground source={require('../../assets/images/paper.png')} style={styles.background}>
            <Icon.Ionicons
              name="ios-arrow-round-back"
              size={40}
              onPress={() => this.props.navigation.navigate('Characters')}
              style={styles.icon}
              />
            <CustomButton style={styles.generateButton}onPress={()=> {utility.getRace(this)}} text="Randomize your Race"/>
            <Text style={styles.sectionTitle}>Character Name: {this.state.CharacterName}</Text>
            <Info title="Race" {...this.state.randomizedRace} subData={this.state.subRace}/>

            <Text style={styles.sectionTitle}> Description:</Text>
            <Text style={styles.descriptions}>{this.state.subRace.alignment} </Text>
            <Text style={styles.sectionTitle}>Age:</Text>
            <Text style={styles.descriptions}>{this.state.subRace.age}</Text>
            <Text style={styles.sectionTitle} >Languages:</Text>
            <Text style={styles.descriptions}>{this.state.subRace.language_desc}</Text>
            <Text style={styles.sectionTitle} >Size: </Text>
            <Text style={styles.descriptions}> {this.state.subRace.size_description}</Text>
            <Text style={styles.sectionTitle}>Traits:</Text>
            {this.renderDetails()}
            {this.state.initialCharacter ?
              <CustomButton onPress={()=>{this.saveCharacter()} } text="Save your Character"/>
              : <Text></Text> }
            </ImageBackground>
          </ScrollView>
        );
      }
    }

    const styles = StyleSheet.create({
      container:
      {
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
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
      information:
      {
        flexDirection:'row'
      },
      descriptions:
      {
        marginLeft:10,
      },
      generateButton:
      {
        height:40,
        alignItems:'center',
        justifyContent:'center',
        width:200,
        backgroundColor:'gray',
        borderRadius:10,
        marginLeft:'auto',
        marginRight:'auto',
      },
      background:
      {
        width:'100%',
        height:1000,
        paddingTop:20
      },
      icon: {
        margin:15
      }
    });

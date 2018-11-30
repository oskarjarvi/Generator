import React from 'react';
import {getValues, getValuesFromUri} from '../utility/api';
import data from '../components/data/';
import Utility from '../utility/functions';
import CustomButton from '../components/custombutton'
import * as firebase from 'firebase'
import {ListItem} from 'react-native-elements'
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
  ImageBackground
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Info from '../components/character/info';

const utility = new Utility()

export default class CharacterScreen extends React.Component {
  navigationOptions= {
    header:null
  }
  state = {
    characters:false
  }

  componentDidMount()
  {
  this.getCharacters()
  }
  getCharacters()
  {
     userRef = firebase.auth().currentUser.uid
    firebase.database().ref(`user/characters/${userRef}`).once('value', (data) => {
      if(data.exists()){
      let values = Object.values(data.val())
      if(values)
      {
        console.log(values)
        this.setState({characters: values})
      }
    }
    })
  }

  renderItem = ({item}) => (
    <ListItem
      title={item.Name}
      subtitle={item.Created}
      containerStyle={{ borderBottomWidth: 1, borderBottomColor:"black"}}
      chevronColor="black"
      onPress={() => this.props.navigation.navigate('race', {Race: item.Race, Name: item.Name, Class: item.Class})}/>
  )
  renderCharacterList()
  {
    if(this.state.characters)
    {
      return <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.characters}
          renderItem={this.renderItem}
           />
      </View>
    }
  }

  componentWillUnmount() {
      firebase.database().ref(`user/${userRef}`).off('value');

  }
  render() {

    return (
      <View>
      <ImageBackground source={require('../assets/images/paper.png')} style={styles.background}>
        <Icon.Ionicons
          name="ios-arrow-round-back"
          size={40}
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.icon}
          />

        <Text style={styles.sectionTitle}>Existing Characters:</Text>
        {this.renderCharacterList()}
        <TouchableOpacity style={styles.generateButton}onPress={()=> this.props.navigation.navigate('race')}><Text>Create a new character</Text></TouchableOpacity>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  sectionTitle:
  {
    marginTop:10,
    fontSize: 20,
    marginLeft: 10,
  },
  generateButton:
  {
    margin:20,
    flex:1,
    height:20
  },
  background:{
    width:'100%',
    height:900,
    paddingTop:20
  },
  icon: {
    margin:15
  }
});

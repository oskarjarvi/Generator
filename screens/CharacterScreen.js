import React from 'react';
import {getValues} from '../api/api';
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
  state = {
    initialCharacter: false,
    randomizedClass : false,
    randomizedRace : false,
    classes :false,
    races: false,
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
GenerateCharacter()
{
  this.GenerateItem(this.state.classes)
  .then(res => this.setState({randomizedClass: res}))
  .then(this.GenerateItem(this.state.races).then(res=>this.setState({randomizedRace:res})))
  this.setState({initialCharacter:true})
}

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
         style={styles.GenerateButton}
         onPress={() => this.GenerateCharacter()}
       >
         <Text> Randomize your character </Text>
       </TouchableOpacity>

          <Text>Race: {this.state.randomizedRace.name}</Text>
          <Text>Class: {this.state.randomizedClass.name}</Text>
        <Button onPress={() =>
          this.GenerateItem(this.state.classes).then(res => this.setState({randomizedClass: res}))}
           title="Generate a class" />


         <Button onPress={() =>
           this.GenerateItem(this.state.races).then(res => this.setState({randomizedRace: res}))}
            title="Generate a Race" />
          {this.state.randomizedRace ? <Text>Class: {this.state.randomizedRace.name} </Text> : <Text>Press button to generate a class </Text>}
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
  GenerateButton:
  {
    height:30,
    alignItems:'center',
    justifyContent:'center',
    width:200,
    backgroundColor:'gray',
    color:'white',
    borderRadius:10,
    marginLeft:'auto',
    marginRight:'auto',
  }
});

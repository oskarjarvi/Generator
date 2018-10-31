import React from 'react';
import {getValues, getSub} from '../api/api';

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
    subClass:false,
    subRace:false,
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
generateSubinfo()
{
  getValues(this.state.randomizedClass.name).then(res=>this.setState({subClass:res}))
}

  render() {
    console.log(this.state.randomizedClass._id)
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.GenerateButton}
         onPress={() => this.GenerateCharacter()}>
         <Text> Randomize your character </Text>
       </TouchableOpacity>

          <View style={styles.information}>
            <Text style={styles.descriptions}>Race: {this.state.randomizedRace.name}</Text>
            {(this.state.initialCharacter) ?
            <TouchableOpacity
               style={styles.GenerateButton}
               onPress={() => this.GenerateItem(this.state.races)
               .then(res => this.setState({randomizedRace: res}))}>
               <Text> Randomize your Race </Text>
             </TouchableOpacity>
             : <Text></Text>}
          </View>
          <Text>{this.state.subRace}</Text>

          <View style={styles.information}>
            <Text style={styles.descriptions}>Class: {this.state.randomizedClass.name}</Text>
            {(this.state.initialCharacter) ?
            <TouchableOpacity
               style={styles.GenerateButton}
               onPress={() => this.GenerateItem(this.state.classes)
               .then(res => this.setState({randomizedClass: res}))}>
               <Text> Randomize your Class </Text>
             </TouchableOpacity>
             : <Text></Text>}
          </View>
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
  information:
  {
    flex:1,
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
    margin:10
  }
});

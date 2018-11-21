import {getValues, getValuesFromUri} from '../utility/api';
import * as firebase from 'firebase';
import { AsyncStorage} from 'react-native';
import data from '../components/data/';

class Utility
{
  async getClass(parent)
  {
    const classes = await this.getItem(parent.state.classes)
    parent.setState({randomizedClass: classes})

    const item3 = await this.getSubinfo('classes/', parent.state.randomizedClass)
    parent.setState({subClass: item3})

    this.storeItem('Class', parent.state.subClass)


  }
  async getRace(parent)
  {
    const races = await this.getItem(parent.state.races)
    parent.setState({randomizedRace: races})

    const item4= await getValuesFromUri(parent.state.randomizedRace.url)
    parent.setState({subRace: item4})

    this.storeItem('RaceName', parent.state.subRace)

    const Name = await this.getName(data.RaceInfo[parent.state.randomizedRace.name])
    parent.setState({CharacterName: Name})

    parent.setState({initialCharacter: true})
  }



  getSubinfo(url, endpoint)
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
  getItem(array)
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
getName(array)
  {
    return new Promise((resolve,reject) =>
    {
      let item =array.Names[Math.floor(Math.random()*array.Names.length)];
      if(!item)
      {
        reject('couldnt generate a random value')
      }
      resolve(item)
    });
  }
  getStory(array)
  {
    return new Promise((resolve,reject) =>
    {
      let item =array.BackgroundStory[Math.floor(Math.random()*array.BackgroundStory.length)];
      if(!item)
      {
        reject('couldnt generate a random value')
      }
      resolve(item)
    });
  }

  Save(character)
  {
    user = firebase.auth().currentUser.uid
    firebase.database().ref(`user/characters/${user}`).push(character)
  }

  async storeItem(key, item) {
    try {
        var jsonItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonItem;
        } catch (error) {
      console.log(error.message);
    }
  }
  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }
}
export default Utility

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import * as firebase from 'firebase';
import { MonoText } from '../components/StyledText';

// ? require('../assets/images/robot-dev.png')
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    Title: HomeScreen,
  };
logout()
{
  firebase.auth().signOut()
  .then(function()
  {
    console.log('yes')
  })
  .catch(function(error){
    console.log('nope')
  })
}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={()=> this.logout() }>
            <Image source={{uri:"https://via.placeholder.com/150"}} style={styles.images} />
            <Text> Log out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('generator')}>
            <Image source={{uri:"https://via.placeholder.com/150"}} style={styles.images} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('generator')}>
            <Image source={{uri:"https://via.placeholder.com/150"}} style={styles.images} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  images:
  {
    margin:10,
    width:100,
    height:100,
  }
});

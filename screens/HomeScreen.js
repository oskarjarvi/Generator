import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { Icon } from 'expo';
import { Ionicons} from '@expo/vector-icons';
import { WebBrowser } from 'expo';
import * as firebase from 'firebase';
import { MonoText } from '../components/StyledText';

// ? require('../assets/images/robot-dev.png')
export default class HomeScreen extends React.Component {
  navigationOptions= {
    header:null
  }
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

          <View style={styles.iconContainer}>
          <Icon.MaterialCommunityIcons
              name="logout"
              size={40}
              onPress={() => this.logout()}
              style={styles.icon}
              />

            <Text>Log out</Text>
           </View>

            <View style={styles.iconContainer}>
              <Icon.Entypo
                  name="qq"
                  size={40}
                  onPress={() => this.props.navigation.navigate('Characters')}
                  style={styles.icon}/>

                <Text>Generator</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon.Entypo
                    name="user"
                    size={40}
                    onPress={() => this.props.navigation.navigate('Profile')}
                    style={styles.icon}/>

                  <Text>Profile</Text>
                </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e0e0e2'
  },
  iconContainer:
  {
    alignItems:'center',
    justifyContent:'center',
    margin:25,
    borderWidth:0.5,
    backgroundColor:'#d9d9db',
    borderColor:'#d0d4db',
    padding:10
  },

});

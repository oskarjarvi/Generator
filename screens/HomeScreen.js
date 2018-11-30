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

const backgroundImage=  require('../assets/images/book.png')
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
      <ImageBackground
        source={backgroundImage}
        imageStyle={{resizeMode:"cover"}}
        style={styles.background}>
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
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  iconContainer:
  {
    alignItems:'center',
    justifyContent:'center',
    margin:25,
    borderWidth:0.5,
    backgroundColor:'#8b4513',
    opacity:0.6,
    borderColor:'#8b4513',
    padding:10
  },
  background:
  {
    width:"100%",
    height:"100%",
    flex:1
  }

});

import React from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import * as firebase from 'firebase';
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
  TextInput
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LoginScreen extends React.Component
{
  navigationOptions= {
    header:null
  }
  state =
  {
    username: "",
    city:"",
    error:false,
  }
  onUpdate= () =>
  {
    user = firebase.auth().currentUser.uid
    userProfile=
    {
      username:this.state.username,
      city:this.state.city
    }
    firebase.database().ref(`user/userProfiles/${user}`).push(userProfile)
    .then(()=> {this.props.navigation.navigate('Home')})

  }
  onSkip = () =>
  {
    this.props.navigation.navigate('Home')
  }
  renderButton()
  {
    if(this.state.loading)
    {
      return <Text>Loading</Text>
    }
    return <View>
      <TouchableOpacity
        onPress={() => this.onUpdate()}
        style={styles.button}>
        <Text>Update Profile</Text>
      </TouchableOpacity>

    </View>
  }
  errorsubmit()
  {
    if(this.state.error)
    {
      return <Text> {this.state.error} </Text>
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Icon.Ionicons
          name="ios-arrow-round-back"
          size={40}
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.icon}
          />
        <FormLabel>Username</FormLabel>
        <FormInput
          value={this.state.username}
          onChangeText={username =>this.setState({username})}
          />
        <FormLabel>Current City</FormLabel>
        <FormInput
          value={this.state.city}
          onChangeText={city =>this.setState({city})}
          />
          {this.errorsubmit()}
        {this.renderButton()}
      </View>

    )
  }
}
const styles = StyleSheet.create({
  container:
  {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:
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
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
});

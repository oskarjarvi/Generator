import React from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import * as firebase from 'firebase';
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

export default class SignupScreen extends React.Component
{
  state =
  {
    email: "",
    password:"",
    error:false,
  }
  onSignUp = () =>
  {
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
    .then(()=> {this.props.navigation.navigate('Main')})
    .catch((error) => {
      console.log(error)
      this.setState({error: error, loading:false})})
  }
  renderButton()
  {
    if(this.state.loading)
    {
      return <Text>Loading</Text>
    }
    return <View>

      <TouchableOpacity
        onPress={() => this.onSignUp()}
        style={styles.button}>
        <Text>Sign Up</Text>
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
        <FormLabel>Email</FormLabel>
        <FormInput
          value={this.state.email}
          onChangeText={email =>this.setState({email})}
          />
        <FormLabel>Password</FormLabel>
        <FormInput
          value={this.state.password}
          onChangeText={password =>this.setState({password})}
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

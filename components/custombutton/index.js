import React from 'react';
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

export default class CustomButton extends React.Component
{
render(){
  return(
    <View>
      <TouchableOpacity
      onPress={this.props.onPress}
      style={styles.CustomButton}>
    <Text>{this.props.text} </Text>
    </TouchableOpacity>
  </View>
  )
}
}
const styles = StyleSheet.create({
  CustomButton:
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
})

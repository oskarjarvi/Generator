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
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Character Generator',
  };
  state = {
    randomizedItem : [],
     arr : [
    {
        index: 1,
        img: 'https://i2.wp.com/magasinetfilter.se/wp-content/uploads/2018/09/filter64-18-omslag-1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1'
    },
    {
        index: 2,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',
    },
    {
        index: 3,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',
    },
    {
        index: 4,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',
    },
    {
        index: 5,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',
    },
    {
        index: 6,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',
    },
    {
        index: 7,
        img: 'https://i1.wp.com/magasinetfilter.se/wp-content/uploads/2018/07/filter63-omslag_1000px.jpg?zoom=1.5&fit=450%2C640&ssl=1',
    }
]
  }
GenerateSheet()
{
   let item = this.state.arr[Math.floor(Math.random()*this.state.arr.length)];
   this.setState({randomizedItem : item});
   console.log(this.state.randomizedItem);
}
  render() {
    return (
<View>
  <Button onPress={this.GenerateSheet.bind(this)} title="Press Me"/>
<FlatList
  data={this.state.randomizedItem}
  renderItem= {({item}) =>
    <Text>{item.img}</Text>
  }
   />
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

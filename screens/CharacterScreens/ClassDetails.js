import React from 'react';
import {getValues, getValuesFromUri} from '../../utility/api';
import data from '../../components/data/';
import Utility from '../../utility/functions';
import CustomButton from '../../components/custombutton'
import Info from '../../components/character/info';
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
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const utility = new Utility()

export default class ClassScreen extends React.Component {

  componentDidMount() {
    getValues('classes').then(res => this.setState({classes:res}))
    this.getClassName()
  };

  state = {
    randomizedClass : false,
    subClass:false,
    classes :false,
  }

  renderLists(data)
  {
    if(this.state.subClass)
    {
      return <View styles={styles.descriptions}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item}) =>
          <Text>{item.name}</Text>}
           />
      </View>
    }
  }

  async getClassName()
  {
    utility.retrieveItem('ClassName')
    .then((item) =>
  {
    this.setState({subClass: item})
  })

  }


  render() {
    console.log(this.state.startingGear)
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/paper.png')} style={styles.background}>
        <CustomButton onPress={()=> {utility.getClass(this)}} text="Randomize your Class"/>
          <Info title="Class" {...this.state.randomizedClass} subData={this.state.subClass} />

            <Text> Proficiencient in</Text>{this.renderLists(this.state.subClass.proficiencies)}

              <Text>Starting Equipment:</Text>
            </ImageBackground>
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
      section:
      {
        height:100,
        margin:10,
        flexDirection:'column'
      },
      information:
      {
        flexDirection:'row'
      },
      descriptions:
      {
        fontSize:24,
      },
      generateButton:
      {
        justifyContent:'flex-end'
      },
      background:
      {
        width:'100%',
        height:800,
        paddingTop:20
      },
    });

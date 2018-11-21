import React from 'react';
import {getValues, getValuesFromUri} from '../../utility/api';
import data from '../../components/data/';
import Utility from '../../utility/functions';
import CustomButton from '../../components/custombutton'
import Info from '../../components/character/info';
import {Constants} from 'expo'
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
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

const utility = new Utility()

export default class ClassScreen extends React.Component {
  static navigationOptions = {
    header:null
  };
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
          <Text style={styles.descriptions}>{item.name}</Text>}
            />
        </View>
      }
    }

    async getClassName()
    {
      utility.retrieveItem('Class')
      .then((item) =>
      {
        this.setState({subClass: item})
      })

    }


    render() {
      return (
        <View style={styles.container}>
          <ImageBackground source={require('../../assets/images/paper.png')} style={styles.background}>
            <Icon.Ionicons
              name="ios-arrow-round-back"
              size={40}
              onPress={() => this.props.navigation.navigate('Characters')}
              style={styles.icon}
              />
            <CustomButton onPress={()=> {utility.getClass(this)}} text="Randomize your Class"/>
            <Info title="Class" {...this.state.randomizedClass} subData={this.state.subClass} />
            <Text style={styles.sectionTitle}> Proficiencient in</Text>{this.state.subClass && this.renderLists(this.state.subClass.proficiencies)}
            </ImageBackground>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container:
      {
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight
      },
      section:
      {
        height:100,
        margin:10,
        flexDirection:'column'
      },
      sectionTitle:
      {
        marginTop:10,
        fontSize: 20,
        marginLeft: 10,
      },
      descriptions:
      {
        margin:15,
      },

      background:
      {
        width:'100%',
        height:800,
        paddingTop:20
      },
      icon: {
        margin:15
      }
    });

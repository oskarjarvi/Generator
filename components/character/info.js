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

export default class Info extends React.Component {
  state= {
initialCharacter: false,
  }


render()
{
  return(
    <View style={styles.section}>
      <View style={styles.information}>
        <Text style={styles.descriptions}>{this.props.title}: {this.props.name}</Text>
          {this.props.children}
          {this.props.title=="Race" &&
            <View style={styles.subinfo}>
               <Text>SubRaces: </Text>
                 {this.state.subRace.subraces && this.state.subRace.subraces[0] ?
                 <FlatList
                   keyExtractor={(item, index) => index.toString()}
                   data={this.state.subRace.subraces}
                   renderItem={({item}) =>
                   <Text>{item.name}</Text>}
                    />
                  : <Text>This race doesnt have a subrace</Text> }
               </View>
             }
                </View>
            </View>
  )
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
  subinfo:
  {

  }
});

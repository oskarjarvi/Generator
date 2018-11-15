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

renderSubInfo()
{
   if(this.props.title=="Race")
   {
     return <View style={styles.subinfo}>
        <Text>SubRaces: </Text>
          {this.props.subData.subraces && this.props.subData.subraces[0] ?
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={this.props.subData.subraces}
            renderItem={({item}) =>
            <Text>{item.name}</Text>}
             />
           : <Text>This race doesnt have a subrace</Text> }
        </View>
   }
   else if(this.props.title=="Class")
   {
     return <View style={styles.subinfo}>
       <Text>SubClass: {this.props.subData.subclasses && this.props.subData.subclasses[0].name} </Text>
     </View>
   }
}
render()
{
  return(
    <View style={styles.section}>
      <View style={styles.information}>
        <Text style={styles.descriptions}>{this.props.title}: {this.props.name}</Text>
          {this.props.children}
                </View>
                {this.renderSubInfo()}
            </View>
  )
}
}
const styles = StyleSheet.create({

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
    marginRight:10,
    fontSize:24,

  },

});

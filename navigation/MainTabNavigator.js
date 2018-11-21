import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'expo';
import { Ionicons} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';
import BackgroundDetails from '../screens/CharacterScreens/BackgroundDetails';
import RaceDetails from '../screens/CharacterScreens/RaceDetails';
import ClassDetails from '../screens/CharacterScreens/ClassDetails';


const CharactersStack = createStackNavigator({
  characters: CharacterScreen,
});

const RaceStack = createStackNavigator({
  race: RaceDetails
});

RaceStack.navigationOptions= {
  tabBarLabel: 'Race',
  passProps: {myProp: 'fooooo'},
  tabBarIcon: ({focused}) => (
    <Icon.MaterialIcons
      focused={focused}
      name={'person'}
      size={26}
    />
  )
}
const ClassStack = createStackNavigator({
  class: ClassDetails
});

ClassStack.navigationOptions= {
  tabBarLabel: 'Class',
  tabBarIcon: ({focused}) => (
    <Icon.MaterialCommunityIcons
      focused={focused}
      name={'sword-cross'}
      size={26}
    />
  )
}
const BackgroundStack = createStackNavigator({
  background: BackgroundDetails
});
BackgroundStack.navigationOptions= {
  tabBarLabel: 'Background Story',
  tabBarIcon: ({focused}) => (
    <Icon.Feather
      focused={focused}
      name={'book'}
      size={26}
    />
  )
}


export default createBottomTabNavigator({
  RaceStack,
  ClassStack,
  BackgroundStack,
});

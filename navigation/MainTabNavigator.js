import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import { Icon } from 'expo';
import { Ionicons} from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';
import BackgroundDetails from '../screens/CharacterScreens/BackgroundDetails';
import RaceDetails from '../screens/CharacterScreens/RaceDetails';
import ClassDetails from '../screens/CharacterScreens/ClassDetails';

const DrawerStack = createDrawerNavigator({
  screen1: HomeScreen,
  screen2: CharacterScreen
})

const DrawerNavigation = createStackNavigator({
  DrawerStack:{ screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
  })
})



const RaceStack = createStackNavigator({
  race: RaceDetails
});
const ClassStack = createStackNavigator({
  class: ClassDetails
});
const BackgroundStack = createStackNavigator({
  background: BackgroundDetails
});
const GeneratorStack = createStackNavigator({
  generator: CharacterScreen,
});


GeneratorStack.navigationOptions= {
  tabBarLabel: 'Generator',
  tabBarIcon: ({focused}) => (
    <Icon.Entypo
      focused={focused}
      name={'retweet'}
      size={26}
    />
  )
}
RaceStack.navigationOptions= {
  tabBarLabel: 'Race',
  tabBarIcon: ({focused}) => (
    <Icon.MaterialIcons
      focused={focused}
      name={'person'}
      size={26}
    />
  )
}
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
  GeneratorStack,
  ClassStack,
  RaceStack,
  BackgroundStack,
});

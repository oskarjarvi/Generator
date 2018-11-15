import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CharacterScreen from '../screens/CharacterScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

const GeneratorStack = createStackNavigator({
  generator: CharacterScreen,
});

GeneratorStack.navigationOptions = {
  tabBarLabel: 'Generator',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};


export default createBottomTabNavigator({
  GeneratorStack,
});

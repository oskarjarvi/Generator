import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import HomeScreen from'../screens/HomeScreen';
import LoginTabNavigator from './LoginTabNavigator';
import CharacterScreen from '../screens/CharacterScreen'

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Home: HomeScreen,
  Main: MainTabNavigator,
  Characters: CharacterScreen,
}
);

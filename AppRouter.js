import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Splash from './app/src/screens/Splash';
import Home from './app/src/screens/Home';

const AppNavigator = createStackNavigator({

  Splash: {
    screen: Splash,
  },
  Home: {
    screen: Home, navigationOptions: {gestureEnabled: false},
  }
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

export default createAppContainer(AppNavigator);

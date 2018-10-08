import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ScheduleScreen from './src/screens/scheduleScreen';

const AppStackNavigatorConfig = {
  initialRouteName: 'Schedule',
  shifting: false,
  backBehavior: 'initialRoute',
  barStyle: { backgroundColor: 'orange' },
  swipeEnabled: true,
};


const Navigator = createStackNavigator(({
  Schedule: {
    screen: ScheduleScreen,
  },
}));

export default Navigator;

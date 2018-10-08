import React from 'react';
import { View } from 'react-native';
import Schedule from '../components/Schedule';

const schedulescreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Schedule navigation={navigation} />
    </View>);
};

export default schedulescreen;

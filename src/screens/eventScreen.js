import React from 'react';
import { View } from 'react-native';
import Graph from '../components/graph/index';

const EventScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Graph drinks={navigation.getParam('drinks')} />
    </View>
  );
};


export default EventScreen;

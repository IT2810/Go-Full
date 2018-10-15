import React from 'react';
import { Text, View } from 'react-native';
import Graph from '../components/graph/index';

const EventScreen = (props) => {
  const { navigation, appstate } = props;
  return (
    <View>
      <Graph drinks={navigation.getParam('drinks')} />
    </View>
  );
};


export default EventScreen;

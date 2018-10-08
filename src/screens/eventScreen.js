import React from 'react';
import { Text, View } from 'react-native';


const EventScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>
        {navigation.getParam('title')}
      </Text>
    </View>
  );
};


export default EventScreen;

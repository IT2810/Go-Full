import React from 'react';
import { View } from 'react-native';
import Schedule from '../components/Schedule';
import { AppContext } from '../components/AppProvider';

const schedulescreen = (props) => {
  const { navigation } = props;
  return (
    <View>
      <AppContext.Consumer>
        {appState => (
          <Schedule navigation={navigation} appState={appState} />
        )}
      </AppContext.Consumer>
    </View>);
};

export default schedulescreen;

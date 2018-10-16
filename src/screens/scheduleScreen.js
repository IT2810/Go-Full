import React from 'react';
import { View } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
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
      <View style={{
        position: 'fixed', right: 0, top: 430,
      }}
      >
        <ActionButton
          buttonColor="rbga(156,77,204,1)"
          onPress={() => navigation.navigate('createEvent')}
        />
      </View>
    </View>);
};

export default schedulescreen;

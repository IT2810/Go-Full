import React from 'react';
import { View, Text } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import Schedule from '../components/Schedule';
import { AppContext } from '../components/AppProvider';

const styles = ({
  title: {
    fontSize: 36,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '100',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    marginBottom: 10,
    paddingBottom: 12,
    paddingTop: 14,
  },
});

const schedulescreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ backgroundColor: '#6D6D6D', flex: 1 }}>
      <View style={{ backgroundColor: '#424242' }}>
        <Text style={styles.title}>
            Your Events
        </Text>
      </View>
      <AppContext.Consumer>
        {appState => (
          <Schedule navigation={navigation} appState={appState} />
        )}
      </AppContext.Consumer>

      <View style={{
        position: 'absolute', right: 0, top: 600,
      }}
      >
        <ActionButton
          style={{ container: { backgroundColor: '#9C4DCC' } }}
          onPress={() => navigation.navigate('createEvent')}
        />
      </View>
    </View>);
};

export default schedulescreen;

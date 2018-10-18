import React from 'react';
import { View, Text } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
import Schedule from '../components/Schedule';
import { AppContext } from '../components/AppProvider';

const styles = ({
  eventTitle: {
    fontSize: 36,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 12,
  },
  title: {
    fontSize: 36,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 12,
  },
})

const schedulescreen = (props) => {
  const { navigation } = props;
  return (
    <View style={[{ flex: 1 }, styles.elementsContainer]}>
      <View style={[{ flex: 1, backgroundColor: '#424242' }]}>
        <Text style={styles.title}>
            Events
        </Text>
      </View>
      <View style={{ flex: 6, flexDirection: 'column', marginHorizontal: 0 }}>
        <View style={{backgroundColor: '#6D6D6D'}}>
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
          buttonColor="rbga(156,77,204,1)"
          onPress={() => navigation.navigate('createEvent')}
          />
          </View>
        </View>);
      </View>
    </View>
  )};

export default schedulescreen;

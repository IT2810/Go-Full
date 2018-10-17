import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage, Platform } from 'react-native';
import { Notifications } from 'expo';
import cloneDeep from 'lodash/cloneDeep';

export const AppContext = React.createContext();

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('@go-full:state', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

// This is a different implementation of the stuff that is
// currently in the constructor, we might need it for later.

// const retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@go-full:state');
//     if (value !== null) {
//       // We have data in the store
//       return value;
//     }
//     // There is no data in the store
//     return false;
//   } catch (error) {
//     // Error retrieving data
//     return error;
//   }
// };

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This is where we set initial state
      events: [],
      setStorageAndState: (key, value) => this.setStorageAndState(key, value),
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('@go-full:state')
      .then(result => JSON.parse(result))
      .then(result => this.setState(result))
      .catch(error => console.log(error));

    this.setupNotificationChannels();
  }

  setupNotificationChannels() {
    if (Platform.OS === 'android') {
      // Channel for test notifications
      Notifications.createChannelAndroidAsync('test', {
        name: 'Test notifications',
        sound: true,
        priority: 'max',
        vibrate: true,
      });

      // Channel for mission critical notifications
      Notifications.createChannelAndroidAsync('mission-critical', {
        name: 'Test notifications',
        sound: true,
        priority: 'high',
        vibrate: true,
      });

      // Channel for less important notifications
      Notifications.createChannelAndroidAsync('nudge', {
        name: 'Test notifications',
        sound: true,
        priority: 'low',
        vibrate: true,
      });
    }
  }

  async setStorageAndState(key, value) {
    // Using cloneDeep to ensure immutability.
    const tempState = cloneDeep(this.state);
    tempState[key] = value;
    this.setState(tempState);
    await storeData(tempState);
    return tempState;
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider value={this.state}>
        {children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

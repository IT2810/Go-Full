import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import cloneDeep from 'lodash/cloneDeep';
import uniqueId from 'lodash/uniqueId';
import moment from 'moment';
import Notifications from '../../utils/notifications';
import Serializer from '../../utils/serialization';

export const AppContext = React.createContext();

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('@go-full:state', JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // This is where we set initial state
      events: [],

      setStorageAndState: (key, value) => this.setStorageAndState(key, value),
      addDrinkAsync: (drinkObject, key) => this.addDrinkAsync(drinkObject, key),
      addEventAsync: eventObject => this.addEventAsync(eventObject),
    };
  }

  async componentDidMount() {
    await AsyncStorage.getItem('@go-full:state')
      .then(result => JSON.parse(result))
      .then((result) => {
        if (result && result.events) {
          return Serializer.deserializeState(result);
        }
        return result;
      })
      .then(result => this.setState(result))
      .catch(error => console.error(error));

    Notifications.setupNotificationChannels();
    await this.temporaryFunctionPleaseRemoveItsOnlyForTestingPurposesSoYeahGoodbyeAsync();
  }


  async setStorageAndState(key, value) {
    // Using cloneDeep to ensure immutability.
    const tempState = cloneDeep(this.state);
    tempState[key] = value;
    this.setState(tempState);
    const serializedState = Serializer.serializeState(tempState);
    await storeData(serializedState);
    return tempState;
  }

  async addDrinkAsync(drinkObject, eventKey) {
    const { events } = this.state;
    const tempState = cloneDeep(events);
    const currentEvent = tempState.findIndex(event => event.key === eventKey);
    tempState[currentEvent].drinks.push(drinkObject);
    this.setStorageAndState('events', tempState);
  }

  async createEventAsync(eventObject) {
    const tempState = cloneDeep(this.state);
    const newEvent = cloneDeep(eventObject);
    // trying to make unique keys. This won't work if we should be able to delete events
    newEvent.key = parseInt(uniqueId(), 10);
    tempState.events.push(newEvent);
    await this.setStorageAndState('events', tempState.events);
  }

  async temporaryFunctionPleaseRemoveItsOnlyForTestingPurposesSoYeahGoodbyeAsync() {
    const events = [
      {
        title: 'Steve jobs memorial',
        time: moment(),
        drinks: [
          {
            type: 'beer 0.5',
            gramsOfAlcohol: 19.39,
            timeStamp: moment(),
          },
          {
            type: 'beer 0.5',
            gramsOfAlcohol: 19.39,
            timeStamp: moment().add(1, 'hours'),
          },
          {
            type: 'beer 0.5',
            gramsOfAlcohol: 19.39,
            timeStamp: moment().add(6, 'hours'),
          },
        ],
      },
      {
        title: 'a',
        time: moment(),
        drinks: [],
      },
      {
        title: 'cool party i guess',
        time: moment(),
        drinks: [],
      },
    ];

    await events.forEach(async event => this.createEventAsync(event));
    await this.addDrinkAsync({
      type: 'beer 0.5',
      gramsOfAlcohol: 19.39,
      timeStamp: moment().add(6, 'hours'),
    }, 2);
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

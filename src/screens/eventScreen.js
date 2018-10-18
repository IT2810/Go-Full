import React from 'react';
import {
  View, TouchableOpacity, Text, Vibration,
} from 'react-native';
import Image from 'react-native-remote-svg';
import moment from 'moment';
import { Card } from 'react-native-material-ui';
import Graph from '../components/graph/index';
import { AppContext } from '../components/AppProvider';

const wineGlass = require('../../assets/wine-glass-solid.svg');
const drinkGlass = require('../../assets/glass-martini-solid.svg');
const beerGlass = require('../../assets/beer-solid.svg');

const styles = ({ // Styling for different components
  eventTitle: {
    fontSize: 24,
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '100',
    marginTop: 12,
  },
  scoreNumber: {

  },
  topView: {
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    marginBottom: 10,
  },

  container: { // container - buttons
    flex: 1,
  },
  elementsContainer: {
    backgroundColor: '#6D6D6D',
  },
});

const EventScreen = (props) => {
  const { navigation } = props;
  const drinkTypes = {
    beer: {
      type: 'beer',
      alcoholInGrams: 18.03,
      timeStamp: moment(),
    },
    drink: {
      type: 'drink',
      alcoholInGrams: 12.8,
      timeStamp: moment(),
    },
    wine: {
      type: 'wine',
      alcoholInGrams: 14.4,
      timeStamp: moment(),
    },
  };

  const handlePress = (drinkType, key, appState) => {
    appState.addDrinkAsync(drinkType, key);
    Vibration.vibrate(10);
    appState.notify(drinkType.type);
  };

  const IconButton = (drinkType, key, appState, image) => (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <TouchableOpacity onPress={() => handlePress(drinkType, key, appState)}>
        <Image source={image} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
    </View>
  );

  const description = (description, text) => (
    <Card style={{
      container: {
        flex: 10,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#38006B',
      },
    }}
    >
      <Text style={{ color: '#FFFFFF', marginBottom: 10, fontSize: 20 }}>{text}</Text>
      <Text style={{ color: '#FFFFFF', fontSize: 15 }}>{description}</Text>
    </Card>);

  const descriptionOrButtons = (event, key, appState) => {
    const now = moment().add(5, 'hours');
    const startTime = event.time.clone();
    if (now.isBefore(startTime)) {
      return description(event.description, 'Event has not started yet');
    }
    startTime.add(8, 'hours');
    if (now.isAfter(startTime)) {
      return description('', 'Event has ended');
    }

    return (
      <View style={{ flex: 3, flexDirection: 'row', marginHorizontal: 30 }}>
        {IconButton(drinkTypes.beer, key, appState, beerGlass)}
        {IconButton(drinkTypes.drink, key, appState, drinkGlass)}
        {IconButton(drinkTypes.wine, key, appState, wineGlass)}
      </View>
    );
  };


  return (
    <AppContext.Consumer>
      {(appState) => {
        const key = navigation.getParam('key');
        const event = appState.getEventFromKey(key);
        return (
          <View style={styles.container}>
            <View style={[{ flex: 1 }, styles.elementsContainer]}>
              <View style={[{ flex: 2, backgroundColor: '#424242' }, styles.topView]}>
                <Text style={styles.eventTitle}>
                  {event.title}
                </Text>
              </View>
              <View style={{ flex: 4, backgroundColor: '#6D6D6D' }}>
                <Text style={styles.eventTitle}>
                  Score:
                  {event.drinks.length}
                </Text>
              </View>
              <View style={{ flex: 3, flexDirection: 'row', marginHorizontal: 30 }}>
                {descriptionOrButtons(event, key, appState)}
              </View>
              <View style={{ flex: 6, backgroundColor: '#6D6D6D' }}>
                <Graph drinks={event.drinks} />
              </View>
            </View>
          </View>);
      }}
    </AppContext.Consumer>
  );
};

export default EventScreen;

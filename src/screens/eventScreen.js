import React from 'react';
import {
  View, TouchableOpacity, Text, Vibration,
} from 'react-native';
import Image from 'react-native-remote-svg';
import moment from 'moment';
import Graph from '../components/graph/index';
import { AppContext } from '../components/AppProvider';

const wineGlass = require('./../Icons/wine-glass-solid.svg');
const drinkGlass = require('./../Icons/glass-martini-solid.svg');
const beerGlass = require('./../Icons/beer-solid.svg');

const styles = ({ // Styling for different components
  eventTitle: {
    fontSize: 36,
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
      type: 'beer 0.5',
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
                <View style={{ flex: 1, alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    appState.addDrinkAsync(drinkTypes.beer, key);
                  }}
                  >
                    <Image source={beerGlass} style={{ width: 80, height: 80 }} />
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    appState.addDrinkAsync(drinkTypes.drink, key);
                  }}
                  >
                    <Image
                      source={drinkGlass}
                      style={{ width: 75, height: 75, marginTop: 2.5 }}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    appState.addDrinkAsync(drinkTypes.wine, key);
                  }}
                  >
                    <Image
                      source={wineGlass}
                      style={{ width: 75, height: 75, marginTop: 2.5 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ flex: 6, backgroundColor: '#6D6D6D' }}>
                <View>
                  <Graph drinks={event.drinks} />
                </View>
              </View>
            </View>
          </View>);
      }}
    </AppContext.Consumer>
  );
};

export default EventScreen;

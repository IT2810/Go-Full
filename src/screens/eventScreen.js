import React from 'react';
import {
  View, TouchableOpacity, Text, Vibration,
} from 'react-native';
import Image from 'react-native-remote-svg';
import Graph from '../components/graph/index';

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
  // const drinkScore = 0;
  // this.setState({drinkScore: this.state.drinkScore + 1});


  const clickFunction = (drinkParam) => {
    Vibration.vibrate();
    // TODO: if -> sjekke om button disabled -> if true, returnere feilmelding til bruker / timer på 1 min?
    if (drinkParam === 'beer') {
      console.log('Beer added! 18,03 grams');
    } else if (drinkParam === 'drink') {
      console.log('Drink added! 12,8 grams');
    } else if (drinkParam === 'wine') {
      console.log('Wine added! 14,4 grams');
    }
    // TODO: legge til popup med lagt til(enhet), i tilleg til å aktivere timer / button disabled
  };

  return (
  // Components placed in Views, accomodating flex - e.g. title will be located in flex: 1
  // TODO: Legge inn enkel counter - variable ++

    <View style={styles.container}>
      <View style={[{ flex: 1 }, styles.elementsContainer]}>
        <View style={[{ flex: 2, backgroundColor: '#424242' }, styles.topView]}>
          <Text style={styles.eventTitle}>
            {navigation.getParam('title')}
          </Text>
        </View>
        <View style={{ flex: 4, backgroundColor: '#6D6D6D' }}>
          <Text style={styles.eventTitle}>
             Score:
            {navigation.getParam('drinks').length}
          </Text>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', marginHorizontal: 30 }}>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => clickFunction('beer')}>
              <Image source={beerGlass} style={{ width: 80, height: 80 }} />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => clickFunction('drink')}>
              <Image
                source={drinkGlass}
                style={{ width: 75, height: 75, marginTop: 2.5 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity onPress={() => clickFunction('wine')}>
              <Image
                source={wineGlass}
                style={{ width: 75, height: 75, marginTop: 2.5 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 6, backgroundColor: '#6D6D6D' }}>
          <View>
            <Graph drinks={navigation.getParam('drinks')} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventScreen;

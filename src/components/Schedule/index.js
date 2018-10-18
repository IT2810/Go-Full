import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListItem from './listItem';

const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
});

function Schedule(props) {
  const { navigation } = props;
  const handlePress = (key) => {
    navigation.navigate('Event', { key });
  };
  const { appState } = props;

  return (
    <ScrollView>
      <View style={styles.list}>
        {appState.events.map(event => ( // Generate items based on events in state
          <ListItem
            key={event.key}
            keyItem={event.key}
            time={event.time}
            title={event.title}
            handlePress={() => handlePress(event.key)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

export default Schedule;

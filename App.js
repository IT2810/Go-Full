import React from 'react';
import { StyleSheet, View } from 'react-native';
import CreateEventClass from './src/components/createEvent';

const App = () => {
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#6D6D6D',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <CreateEventClass />
    </View>
  );
};

export default App;

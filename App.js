import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateEventClass from './src/components/createEvent';

const App = () => {
  const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
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
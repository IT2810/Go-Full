import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePickerClass from './src/components/dateTimePicker';

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
      <DateTimePickerClass />
    </View>
  );
};

export default App;
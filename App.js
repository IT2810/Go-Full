import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppProvider from './src/components/AppProvider';

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
      <AppProvider>
        <Text>Open up App.js to start working on your app!</Text>
      </AppProvider>
    </View>
  );
};

export default App;

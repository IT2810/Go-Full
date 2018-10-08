import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import AppProvider from './src/components/AppProvider';
import Navigator from './Navigator';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });


  return (
    <View style={styles.container}>
      <AppProvider>
        <Navigator />
      </AppProvider>
    </View>
  );
};

export default App;

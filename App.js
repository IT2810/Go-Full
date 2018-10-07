import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import AppProvider from './src/components/AppProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'TestButton',
    };
  }

  onPressTestButton() {
    this.setState({ buttonText: 'Tested' });
    return true;
  }

  render() {
    const { buttonText } = this.state;
    return (
      <View style={styles.container}>
        <AppProvider>
          <Text>Open up App.js to start working on your app!</Text>
          <Button
            onPress={() => this.onPressTestButton()}
            title={buttonText}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </AppProvider>
      </View>
    );
  }
}

export default App;

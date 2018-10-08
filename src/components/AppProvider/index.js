import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';

export const AppContext = React.createContext();

const storeData = async (data) => {
  try {
    await AsyncStorage.setItem('@go-full:state', JSON.stringify(data));
  } catch (error) {
    // Error saving data
  }
};

const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('@go-full:state');
    if (value !== null) {
      // We have data in the store
      return value;
    }
    // There is no data in the store
    return false;
  } catch (error) {
    // Error retrieving data
    return error;
  }
};

class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: 'heisann',
      setStorageAndState: this.setStorageAndState,
    };
  }

  async setStorageAndState(key, value) {
    await this.setState({ key, value });
    storeData(this.state);
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider value={this.state}>
        {children}
      </AppContext.Provider>
    );
  }
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;

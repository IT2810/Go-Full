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

// This is a different implementation of the stuff that is
// currently in the constructor, we might need it for later.

// const retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('@go-full:state');
//     if (value !== null) {
//       // We have data in the store
//       return value;
//     }
//     // There is no data in the store
//     return false;
//   } catch (error) {
//     // Error retrieving data
//     return error;
//   }
// };

class AppProvider extends React.Component {
  constructor(props) {
    super(props);

    AsyncStorage.getItem('@go-full:state')
      .then((result) => {
        if (result) {
          // Here state is set from async storage.
          this.state = result;
        } else {
          this.state = {
            // This is where we set initial state, if there is nothing in the store.
            buttonText: 'heisann',
            setStorageAndState: (key, value) => this.setStorageAndState(key, value),
          };
        }
      });
  }

  async setStorageAndState(key, value) {
    await this.setState({
      key: value,
    }, () => true);
    await storeData(this.state);
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

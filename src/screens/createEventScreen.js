import React from 'react';
import InputForm from '../components/inputForm/index';
import { AppContext } from '../components/AppProvider';

const CreateEventScreen = (props) => {
  const { navigation } = props;
  return (
    // We insert AppState into navigation from the consumer, through props.
    <AppContext.Consumer>
      {appState => (
        <InputForm navigation={navigation} appState={appState} />
      )}
    </AppContext.Consumer>
  );
};

export default CreateEventScreen;

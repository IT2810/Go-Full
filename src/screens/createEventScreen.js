import React from 'react';
import InputForm from '../components/inputForm/index';

const CreateEventScreen = (props) => {
  const { navigation } = props;
  return (
    <InputForm navigation={navigation} />
  );
};

export default CreateEventScreen;

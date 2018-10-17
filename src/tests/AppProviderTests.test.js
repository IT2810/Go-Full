import React from 'react';
import renderer from 'react-test-renderer';
import AppProvider from '../components/AppProvider';

// Mocking AsyncStorage
const mockFoo = {
  keyOne: 'valueOne',
  keyTwo: 'valueTwo',
};

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn((key, value) => new Promise((resolve) => {
      mockFoo[key] = value;
      resolve(value);
    })),
    getItem: jest.fn(key => new Promise((resolve) => {
      resolve(mockFoo[key]);
    })),
  },
}));

const AsyncStorage = require('react-native');

const provider = renderer.create(<AppProvider><p>I am a child</p></AppProvider>).getInstance();

describe('storage', () => {
  test('setStorageAndState should set state with no errors', () => {
    provider.setStorageAndState('keyOne', 'testValue').then((error) => {
      expect(error).toEqual(null);
      expect(provider.setState({ keyOne: 'testValue' })).toBeCalled();
    });
  });

  test('setStorageAndState should store in AsyncStorage with no errors', () => {
    provider.setStorageAndState('keyOne', 'testValue').then((error) => {
      expect(error).toEqual(null);
      expect(AsyncStorage.setItem).toBeCalledWith('@go-full:testState', JSON.stringify({ keyOne: 'testValue' }));
    });
  });
});

jest.unmock('react-native');

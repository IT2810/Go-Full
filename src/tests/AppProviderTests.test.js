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


jest.unmock('react-native');

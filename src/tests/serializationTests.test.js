import moment from 'moment';
import Serializer from '../utils/serialization';

jest.mock('moment', () => () => ({ valueOf: () => 12312444212 }));

const events = [
  {
    title: 'Steve jobs memorial',
    time: moment(),
    drinks: [
      {
        type: 'beer 0.5',
        gramsOfAlcohol: 19.39,
        timeStamp: moment(),
      },
    ],
  },
  {
    title: 'a',
    time: moment(),
    drinks: [],
  },
  {
    title: 'cool party i guess',
    time: moment(),
    drinks: [],
  },
];

describe('event serialization', () => {

});

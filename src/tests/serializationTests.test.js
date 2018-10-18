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
  test('deserialized serialized data should be equal to original data', () => {
    expect(JSON.stringify(events))
      .toEqual(JSON.stringify(Serializer.deserializeState(Serializer.serializeState(events))));
  });

  test('serializer should run without errors', () => {
    expect(() => Serializer.serializeState(events)).not.toThrowError();
  });

  test('deserializer should run without errors', () => {
    const serialized = Serializer.serializeState(events);

    expect(() => Serializer.deserializeState(serialized)).not.toThrowError();
  });
});

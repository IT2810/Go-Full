import React from 'react';
import renderer from 'react-test-renderer';
import moment from 'moment';
import Graph from '../components/graph';

const drinks = [
  {
    type: 'beer 0.5',
    gramsOfAlcohol: 19.39,
    timeStamp: moment(1539717057000),

  },
  {
    type: 'beer 0.5',
    gramsOfAlcohol: 19.39,
    timeStamp: moment(1539717057000).add(1, 'hours'),

  },
  {
    type: 'beer 0.5',
    gramsOfAlcohol: 19.39,
    timeStamp: moment(1539717057000).add(6, 'hours'),
  },
];


const graph = renderer.create(<Graph drinks={drinks} />).getInstance();

test('renders correctly empty graph correctly', () => {
  const tree = renderer.create(<Graph drinks={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly filled graph correctly', () => {
  const tree = renderer.create(<Graph drinks={drinks} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('generate labels should return correct labels', () => {
  const startTime = moment();
  const labels = graph.generateLabels(startTime.clone());
  const expectedLabels = Array(8).fill(0).map(() => {
    startTime.add(1, 'hours');
    return startTime.format('HH:MM');
  });

  expect(labels).toEqual(expectedLabels);
});

test('calculate dataset calculates correctly', () => {
  const expectedAlcoholLevels = [
    0.4041812068965518,
    0.7933624137931036,
    0.7783624137931036,
    0.7633624137931035,
    0.7483624137931035,
    0.7333624137931035,
    1.1225436206896553,
    1.1075436206896554,
  ];
  const alcoholLevels = graph.calculateDataset();

  expect(alcoholLevels.datasets[0].data).toEqual(expectedAlcoholLevels);
});

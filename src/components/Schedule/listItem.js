import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-material-ui';

const listItemStyle = {
  card: {
    borderWidth: 2,
    borderColor: '#888888',
    alignSelf: 'center',
  },
  timeView: {
    borderLeftWidth: 1,
  },
};


const ListItem = (props) => {
  const {
    title, time, handlePress, keyItem,
  } = props;
  return (

    <Card style={listItemStyle.card} onPress={handlePress}>
      <View>
        <Text>
          {title}
          <Text style={listItemStyle.timeView}>{time}</Text>
        </Text>
      </View>
    </Card>
  );
};

ListItem.propTypes = {
  keyItem: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default ListItem;

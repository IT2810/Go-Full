import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Card } from 'react-native-material-ui';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  timeView: {
    padding: 10,
    borderLeftWidth: 1,
  },
  titleView: {
    width: 200,
    padding: 10,
  },
});


const ListItem = (props) => {
  const {
    title, time, handlePress,
  } = props;
  return (

    <Card style={styles.card} onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text>
            {title}
          </Text>
        </View>
        <View style={styles.timeView}>
          <Text>{time.format('HH:MM')}</Text>
        </View>
      </View>
    </Card>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.instanceOf(moment).isRequired,
  handlePress: PropTypes.func.isRequired,
};

export default ListItem;

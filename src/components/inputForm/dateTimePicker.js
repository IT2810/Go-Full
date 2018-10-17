import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingTop: 12.5,
    backgroundColor: '#AE52D4',
    height: 45,
    margin: 15,
    width: 200,
    alignSelf: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default class DateTimePickerTester extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      chosenDate: ""
    };
  }

  showDateTimePicker() {
    this.setState({
      isDateTimePickerVisible: true,
    });
  }

  hideDateTimePicker() {
    this.setState({ isDateTimePickerVisible: false });
  }

  handleDatePicked = (datetime) => {
    this.setState({
      chosenDate: moment(datetime)
    })
    console.log('A date has been picked: ', datetime);
  };

  render() {
    const { isDateTimePickerVisible } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={() => this.showDateTimePicker()} style={styles.button}>
          <Text style={styles.text}>
            PICCA THE DATE
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={datetime => this.handleDatePicked(datetime)}
          onCancel={() => this.hideDateTimePicker()}
          mode={'datetime'}
        />
      </View>
    );
  }
}

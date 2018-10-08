import React, { Component } from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    paddingTop: 12.5,
    backgroundColor: '#AE52D4',
    height: 45,
    margin: 15,
    width: 300,
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

  handleDatePicked(date) {
    console.log('A date has been picked: ', date);
    this.hideDateTimePicker();
  }

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
          onConfirm={date => this.handleDatePicked(date)}
          onCancel={() => this.hideDateTimePicker()}
        />
      </View>
    );
  }
}

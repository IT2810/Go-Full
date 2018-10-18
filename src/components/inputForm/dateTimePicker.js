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
    };
  }

  showDateTimePicker() {
    this.setState({
      isDateTimePickerVisible: true,
    });
  }

  hideDateTimePicker() {
    this.setState({
      isDateTimePickerVisible: false,
    });
  }

  render() {
    const { isDateTimePickerVisible } = this.state;
    const { onDatePicked } = this.props;
    return (
      <View>
        <TouchableOpacity onPress={() => this.showDateTimePicker()} style={styles.button}>
          <Text style={styles.text}>
            Choose Date
          </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={isDateTimePickerVisible}
          onConfirm={(datetime) => {
            onDatePicked(datetime);
            this.hideDateTimePicker();
          }}
          onCancel={() => this.hideDateTimePicker()}
          mode="datetime"
        />
      </View>
    );
  }
}

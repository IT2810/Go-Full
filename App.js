import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, AsyncStorage } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
    chosenDate: ''
  };

  componentDidMount = () => AsyncStorage.getItem('chosenDate').then((value) => this.setState({ 'chosenDate': value }));

  setDate = (value) => {
    value = JSON.stringify(value);
    AsyncStorage.setItem('chosenDate', value);
    this.setState({ 'chosenDate': value });
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ 
    isDateTimePickerVisible: false });

  _handleDatePicked = (datetime) => {
    console.log('A date and time has been picked: ', datetime);
    /*this.setState({
      isDateTimePickerVisible: false,
      chosenDate: moment(datetime).format('MMMM, Do YYYY HH:mm'),
    })*/
    this.setState({isDateTimePickerVisible: false});
    this.setDate(datetime);
  };

  render () {
    console.log(typeof this.state['chosenDate']);
    const chosenDate = JSON.stringify(this.state.chosenDate);
    return ( 
      <View style={styles.container}>
        <Text>
          {chosenDate}
        </Text>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text> Show DatePicker </Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode={'datetime'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  }
})
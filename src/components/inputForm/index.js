import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import {
  Container, Content, Form, Item, Input, Label, Textarea,
} from 'native-base';
import moment from 'moment';
import DateTimePickerTester from './dateTimePicker';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.inputs = {
      title: '',
      description: '',
      date: null,
    };
  }

  async submitEvent() {
    const { appState } = this.props;
    const eventObject = {
      title: this.inputs.title,
      description: this.inputs.description,
      time: this.inputs.date,
    };

    if (eventObject.time === null || eventObject.title === '') {
      Alert.alert('OOPSIE DOOPSIE U MADE A WOOPSIE');
    } else {
      await appState.createEventAsync(eventObject);
      this.goBack();
    }
  }

  // Here we have a lot of smaller functions that have been spun out to
  // ensure readability and future extensibility.

  handleDatePicked(datetime) {
    this.inputs.date = moment(datetime);
  }

  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  changeTitle(titleText) {
    this.inputs.title = titleText;
  }

  changeDescription(descriptionText) {
    this.inputs.description = descriptionText;
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#6D6D6D',
        }}
      >
        <Content>
          <Form>
            {/* This is the input field for the event title. */}
            <Item
              stackedLabel
              style={{
                backgroundColor: '#38006B',
                width: 300,
                alignSelf: 'center',
                margin: 10,
              }}
            >
              <Label
                style={{
                  color: 'white',
                }}
              >
                Title
              </Label>
              <Input
                onChangeText={text => this.changeTitle(text)}
                style={{
                  color: 'white',
                }}
              />
            </Item>
          </Form>
          <Form>
            {/* This is the input field for the event description. */}
            <Textarea
              onChangeText={text => this.changeDescription(text)}
              rowSpan={5}
              placeholder="Description"
              style={{
                backgroundColor: '#38006B',
                width: 300,
                alignSelf: 'center',
                color: 'white',
              }}
            />
          </Form>
          {/* This is the input field for the date. */}
          <DateTimePickerTester
            onDatePicked={datetime => this.handleDatePicked(datetime)}
          />
          {/* This is our submit button. */}
          <TouchableOpacity
            onPress={() => this.submitEvent()}
          >
            <Text
              style={{
                // it could be we should have spun the styles out into a const, but we
                // decided to keep them here. As it was easier to work with while styling.
                alignItems: 'center',
                paddingTop: 12.5,
                backgroundColor: '#AE52D4',
                height: 45,
                margin: 15,
                width: 200,
                alignSelf: 'center',
                fontSize: 20,
                textAlign: 'center',
                color: 'white',
              }}
            >
              Create Event
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default CreateEvent;

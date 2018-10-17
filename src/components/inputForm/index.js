import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
  Container, Content, Form, Item, Input, Label, Textarea,
} from 'native-base';
import DateTimePickerTester from './dateTimePicker';
import moment from 'moment';
import AppProvider from '../AppProvider';

class createEvent extends Component {
  constructor(props) {
    super(props);

    this.submitEvent = this.submitEvent.bind(this);
    
    this.inputs = {
      title: '',
      description: '',
      date: null,
    };
  }

  async submitEvent() {
    console.log(this.inputs.title);
    console.log(this.inputs.description);
    console.log(this.inputs.date)
    const { appState } = this.props;
    const eventObject = {
      title: this.inputs.title,
      description: this.inputs.description,
      time: this.inputs.date,
      drinks: []
    }

    await appState.createEventAsync(eventObject)
  }

  handleDatePicked = (datetime) => {
    this.inputs.date = moment(datetime)
    console.log('A date has been picked: ', datetime);
  };

  render() {
    return (
      <Container style={{ backgroundColor: '#6D6D6D' }}>
        <Content>
          <Form>
            <Item
              stackedLabel
              style={{
                backgroundColor: '#38006B',
                width: 300,
                alignSelf: 'center',
                margin: 10,
                fontColor: 'white',
                border: 0,
              }}
            >
              <Label style={{
                color: 'white',
              }}
              >
              Title
              </Label>
              <Input
                onChangeText={text => this.inputs.title = text}
                style={{
                  color: 'white',
                }}
              />
            </Item>
          </Form>
          <Form>
            <Textarea
              onChangeText={text => this.inputs.description = text}
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
          <DateTimePickerTester 
          onDatePicked = {(datetime)=> this.handleDatePicked(datetime)}
          />
          <TouchableOpacity
            onPress={() => this.submitEvent()}
          >
            <Text
              style={{
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
              CREATE EVENT BBY
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default createEvent;

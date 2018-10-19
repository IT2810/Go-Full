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
    }
    if (eventObject.time === null || eventObject.title === ''){
      Alert.alert(
        'OOPSIE DOOPSIE U MADE A WOOPSIE'        
      )
    }
    else{
      await appState.createEventAsync(eventObject)
      this.goBack();
    }
  }

  handleDatePicked = (datetime) => {
      this.inputs.date = moment(datetime)
  };
  
  goBack(){
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#6D6D6D'
        }}>
        <Content>
          <Form>
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
            onDatePicked={(datetime) => this.handleDatePicked(datetime)}
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
              Create Event
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default CreateEvent;

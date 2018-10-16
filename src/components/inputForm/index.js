import React, { Component } from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import {
  form, struct, maybe, String,
} from 'tcomb-form-native';
import DateTimePickerTester from './dateTimePicker';

// this component creates the form to create an event

const { Form } = form;

const Events = struct({
  Title: String,
});

const desc = struct({
  Description: maybe(String), // maybe says that this field is optional
});


// TODO: Figure out how to change the fontcolor on the placeholdertext
const options = {
  auto: 'placeholders',
  i18n: {
    optional: ' ',
    required: ' ',
  },
  fields: {
    Title: {
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 50,
            width: 300,
            auto: 'placeholders',
            backgroundColor: '#38006B',
            color: 'white',
            borderWidth: 0,
            alignSelf: 'center',
          },
        },
      },
    },
    Description: {
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
          ...Form.stylesheet.textbox,
          normal: {
            ...Form.stylesheet.textbox.normal,
            height: 200,
            width: 300,
            auto: 'placeholders',
            backgroundColor: '#38006B',
            color: '#FFFFFF',
            borderWidth: 0,
            alignSelf: 'center',
          },
        },
      },
    },
  },
};

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

export default class InputForm extends Component {
  /* handleFriendInvite = () => {
        //todo
    }

    handleCreateEvent = () => {
        //todo
    } */

  render() {
    return (
      <View>
        <Form type={Events} options={options} />
        <Form type={desc} options={options} />
        <DateTimePickerTester />
        <TouchableOpacity style={styles.button} onpress={this.handleCreateEvent}>
          <Text style={styles.text}>
            Create Event
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

import React, { Component } from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet,
} from 'react-native';
import {
  form, struct, maybe, String,
} from 'tcomb-form-native';
import { cloneDeep } from 'lodash';
import DateTimePickerTester from './dateTimePicker';

// this component creates the form to create an event

// clone the default stylesheet that comes with tcomb-form-native so that we can change it locally
const stylesheet = cloneDeep(form.Form.stylesheet);

const { Form } = form;

const Events = struct({
  Title: String,
});

const desc = struct({
  Description: maybe(String), // maybe says that this field is optional
});


const options = {
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
            color: '#FFFFFF',
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

stylesheet.textbox.normal.backgroundColor = '#38006B'; // sets the background color of the input fields
stylesheet.textbox.normal.color = '#FFFFFF'; // sets the textcolor
stylesheet.textbox.normal.borderWidth = 0; // removes borders of the input fields
stylesheet.textbox.normal.height = 50;
stylesheet.textbox.normal.width = 300;
stylesheet.textbox.normal.alignSelf = 'center';

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

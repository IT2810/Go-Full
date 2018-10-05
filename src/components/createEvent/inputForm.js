import React, { Component } from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import DateTimePickerTester from './dateTimePicker';


var t = require('tcomb-form-native');
var _ = require('lodash');

//this component creates the form to create an event

const stylesheet = _.cloneDeep(t.form.Form.stylesheet); // clone the default stylesheet that comes with tcomb-form-native so that we can change it locally

const Form = t.form.Form;

const Events = t.struct({
  Title: t.String,
  Description: t.maybe(t.String)    //maybe says that this field is optional
});

const Friend = t.struct({
    FriendsMail: t.maybe(t.String)  //maybe says that this field is optional
})

const options = {
    auto: 'placeholders',   //Tells the fields to have placeholder text instead of titles above the fields
    i18n: {     //Removes the (optional) in the fields when nothing is written
        optional: ' '
    },
    stylesheet: stylesheet,
};

stylesheet.textbox.normal.backgroundColor = '#38006B'; //sets the background color of the input fields
stylesheet.textbox.normal.color = '#FFFFFF'; //sets the textcolor
stylesheet.textbox.normal.borderWidth = 0; //removes borders of the input fields

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#AE52D4'
  },
  text: {
    color: '#FFFFFF',
  }
});

export default class CreateEventClass extends Component {
    handleFriendInvite = () => {
        //todo
    } 

    handleCreateEvent = () => {
        //todo
    }

    render() {
        return(
            <View>
                <Form type={Events} options={options} />
                <DateTimePickerTester />
                <Form type={Friend} options={options} />
                <TouchableOpacity style={styles.button} onPress={this.handleFriendInvite}>
                  <Text style={styles.text}>
                    Invite Friend
                  </Text>
                </TouchableOpacity> />
                <TouchableOpacity style={styles.button} onpress={this.handleCreateEvent}>
                  <Text style={styles.text}> 
                    Create Event
                  </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

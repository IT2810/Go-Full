import React, { Component } from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import t from 'tcomb-form-native';
import DateTimePickerTester from './dateTimePicker';

//this component creates the form to create an event

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
    stylesheet: formStyles,
};

const formStyles = StyleSheet.create({
    formGroup: {
        color: '#38006B'
    },
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
                <Form type={Events} options={options} style={formStyles.formGroup} />
                <DateTimePickerTester />
                <Form type={Friend} options={options} />
                <Button title="INVITE FRIEND" onPress={this.handleFriendInvite} />
                <Button title="CREATE EVENT BBBY" onpress={this.handleCreateEvent} />
            </View>
        )
    }
}

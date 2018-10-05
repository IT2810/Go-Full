import React, { Component } from 'react';
import {Button, Text, View} from 'react-native';
import t from 'tcomb-form-native';
import DateTimePickerTester from './dateTimePicker';

const Form = t.form.Form;

const Events = t.struct({
  Title: t.String,
  Description: t.maybe(t.String),
});

const Friend = t.struct({
    FriendsMail: t.maybe(t.String)
})

const options = {
    auto: 'placeholders'
};

export default class CreateEventClass extends Component {

    handleFriendInvite = () => {
        //
    }

    handleCreateEvent = () => {
        //
    }

    render() {
        return(
            <View>
                <Form type={Events} options={options} />
                <DateTimePickerTester />
                <Form type={Friend} options={options} />
                <Button title="INVITE FRIEND" onPress={this.handleFriendInvite} />
                <Button title="CREATE EVENT" onpress={this.handleCreateEvent} />
            </View>
        )
    }
}


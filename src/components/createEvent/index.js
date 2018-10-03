import React, { Component } from 'react';
import {Button, Text, View} from 'react-native';
import t from 'tcomb-form-native';



const Form = t.form.Form;

const User = t.struct({
  Title: t.String,
  Description: t.maybe(t.String),
  FriendsMail: t.maybe(t.String),
});

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
                <Form type={User} options={options} />
                <Button title="Invite Friend" onPress={this.handleFriendInvite} />
                <Button title="Create Event!" onpress={this.handleCreateEvent} />
            </View>
        )
    }
}


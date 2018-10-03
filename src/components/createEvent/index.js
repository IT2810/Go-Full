import React, { Component } from 'react';
import {Text, View} from 'react-native';
import t from 'tcomb-form-native';



const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
});

export default class CreateEventClass extends Component {
    render() {
        return(
            <View>
                <Form type={User} />
            </View>
        )
    }
}
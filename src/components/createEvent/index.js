import React, { Component } from 'react';
import {Text, View} from 'react-native';
import t from 'tcomb-form-native';



const Form = t.form.Form;

const User = t.struct({
  Title: t.String,
  Description: t.String,
});

const options = {
    auto: 'placeholders'
};

export default class CreateEventClass extends Component {
    render() {
        return(
            <View>
                <Form type={User} options={options} />
            </View>
        )
    }
}


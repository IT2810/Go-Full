import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ListItem from './listItem';


const styles = StyleSheet.create({
  list: {
    marginTop: 40,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
  },
});

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          key: 1,
          title: 'Steve jobs memorial',
          time: '20:38',
        },
        {
          key: 2,
          title: 'a',
          time: '01:00',
        },
        {
          key: 3,
          title: 'cool party i guess',
          time: '13:13',
        },
      ],
    };
  }

  handlePress(key) {
    const { events } = this.state;
    const { navigation } = this.props;
    const eventPressed = events.find(element => element.key === key); // finds the clicked element
    navigation.navigate('Event', eventPressed);
  }

  render() {
    const { events } = this.state;
    return (
      <ScrollView>
        <View style={styles.list}>
          {events.map(event => ( // Generate items based on events in state
            <ListItem
              key={event.key}
              keyItem={event.key}
              time={event.time}
              title={event.title}
              handlePress={() => this.handlePress(event.key)}
            />
          ))}
        </View>

      </ScrollView>
    );
  }
}

export default Schedule;

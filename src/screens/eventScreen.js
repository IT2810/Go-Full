import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TouchableOpacity, Text} from 'react-native';
import StyleSheet from 'react-native-material-ui';


const styles = ({        // Styling for different components
    eventTitle: {
        width: 132,
        height: 24,
        fontFamily: Roboto,
        fontStyle: Medium,
        fontSize: 20,
        lineHeight: 23,
        alignItems: Left,
    },

    container: {         // container - buttons
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    addBeer: {
        width: '25%',
        backgroundColor: "#38006B"
    },

    addDrink: {
        width: '25%',
        backgroundColor: "#38006B"
    },

    addWine: {
        width: '25%',
        backgroundColor: "#38006B"
    },
})

const EventScreen = (props) => {
  const { navigation } = props;
  return (
    <View>
        <Text>
            {navigation.getParam('title')}
        </Text>

        <View style={styles.container}>
            <View style={styles.addBeer}>
                <TouchableOpacity onPress={() => console.log("Beer added! 19,3 grams")}>
                    icon = {<Icon name={"fa-beer"} onAction/>}
                </TouchableOpacity>
            </View>

            <View style={styles.addDrink}>
                <TouchableOpacity onPress={() => console.log("Drink added! 12,8 grams")}>
                    icon = {<Icon name={"glass-martini"}/>}
                </TouchableOpacity>
            </View>

            <View style={styles.addWine}>
                <TouchableOpacity onPress={() => console.log("Wine added! 14,4 grams")}>
                    icon ={<Icon name={"wine-glass"}/>}

                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

export default EventScreen;

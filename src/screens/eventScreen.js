import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Graph from '../components/graph/index';
import Image from 'react-native-remote-svg';


const styles = ({        // Styling for different components
    eventTitle: {
        width: 132,
        height: 24,
        fontSize: 20,
        lineHeight: 23,
    },

    container: {         // container - buttons
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    addBeer: {
        width: '50%',
        height: '50%',
        backgroundColor: "#38006B"
    },

    addDrink: {
        width: '50%',
        height: '50%',
        backgroundColor: "#38006B"
    },

    addWine: {
        width: '50%',
        height: '50%',
        backgroundColor: "#38006B"
    },
})

const EventScreen = (props) => {
    const { navigation } = props;
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.addBeer}>
                    <TouchableOpacity style={styles.addBeer} onPress={() => console.log("Beer added! 19,3 grams")}>
                        <Image source={require('./../Icons/beer-solid.svg')}>
                        
                        </Image>
                    </TouchableOpacity>
                </View>

                <View style={styles.addDrink}>
                    <TouchableOpacity style={styles.addDrink} onPress={() => console.log("Drink added! 12,8 grams")}>
                        <Image source={require('./../Icons/glass-martini-solid.svg')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.addWine}>
                    <TouchableOpacity style={styles.addWine} onPress={() => console.log("Wine added! 14,4 grams")}>
                        <Image source={require('./../Icons/wine-glass-solid.svg')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Graph drinks={navigation.getParam('drinks')} />
            </View>
        </View>
    );
};

export default EventScreen;

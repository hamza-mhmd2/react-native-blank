import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { percent } from '@layouts/percent';


export default function Counter({ navigation }) {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }


    return (
        <View style={{ ...screenStyles.container }}>
            <TouchableOpacity style={screenStyles.plus} onPress={increment} >
                <Text>
                    +
                </Text>
            </TouchableOpacity>
            <View style={screenStyles.count}>
                <Text>
                    {count}
                </Text>
            </View>
            <TouchableOpacity style={screenStyles.plus} onPress={decrement} >
                <Text> - </Text>
            </TouchableOpacity>
        </View>
    );
}


const screenStyles = StyleSheet.create({
    container: {
        width: percent(50),
        height: "auto",
        flexDirection: 'row'
    },
    plus: {
        width: percent(10),
        height: 25,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    minus: {
        width: percent(10),
        height: 25,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    count: {
        width: percent(20),
        height: 25,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    }
});





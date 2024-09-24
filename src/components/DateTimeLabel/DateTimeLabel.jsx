import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { percent } from '@layouts/percent';
import Clock from '../../assets/Clock.png'
import Date from '../../assets/Date.png'

export default function DateTimeLabel({ toggleDateCalendar }) {
    return (
        <View style={screenStyles.container}>
            <View style={{ ...screenStyles.timeWrap, marginRight: 20 }} >
                <View style={screenStyles.time} >
                    <Text> 9 : 58 </Text>
                </View>
                <View style={screenStyles.ampm} >
                    <Text> AM </Text>
                </View>
                <Image style={screenStyles.icon} source={Clock} />
            </View>

            <TouchableOpacity style={screenStyles.timeWrap} onPress={toggleDateCalendar} >
                <Image style={screenStyles.icon} source={Date} />
                <View style={screenStyles.date}>
                    <Text> DD / MM/ YY </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const screenStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    timeWrap: {
        backgroundColor: 'white',
        width: percent(38),
        height: 35,
        borderWidth: 0.5,
        borderColor: '#222',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    time: {
        width: percent(15),
        height: 30,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    ampm: {
        backgroundColor: 'lightgray',
        width: percent(10),
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    date: {
        width: percent(25),
        height: 30,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5
    },
    icon: {
        marginLeft: 5,
        marginRight: 5
    }
});





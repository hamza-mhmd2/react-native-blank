import React from 'react';
import {  View, StyleSheet } from 'react-native';
import { percent } from '@layouts/percent';
import { Calendar } from 'react-native-calendars'
import { theme } from '@layouts/stylesheet';

export default function CalendarView({ navigation }) {

    const INITIAL_DATE = '2022-07-06';

    return (
        <View style={{ flex: 1, ...styles.verticalCenter, ...screenStyles.background }}>
            <Calendar
                enableSwipeMonths
                current={INITIAL_DATE}
                style={theme.calendar}
            />
        </View>
    );
}


const screenStyles = StyleSheet.create({
    background: {
        backgroundColor: '#F15929E5',
        height: "auto"
    },
    topSegment: {
        width: percent(100),
        height: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerSegment: {
        width: percent(100),
        height: 600,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 50
    },
    title: {
        fontWeight: '800',
        fontSize: 32,
        fontFamily: 'inter',
        lineHeight: 38.73
    },
    subtitle: {
        fontWeight: '300',
        fontSize: 16,
        fontFamily: 'inter',
        lineHeight: 22,
        marginBottom: 25
    },
});





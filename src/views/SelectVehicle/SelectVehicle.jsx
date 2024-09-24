import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { percent } from '@layouts/percent';
import CarCard from '@components/CarCard/CarCard';
import Counter from '@components/Counter/Counter';
import CalendarView from '@components/Calendar/Calendar';
import DateTimeLabel from '@components/DateTimeLabel/DateTimeLabel';


const carCardsInfo = [
    {
        title: 'Ride AC'
    },
    {
        title: 'Ride AC'
    },
    {
        title: 'Courier'
    },
]


export default function SelectVehicle({ navigation }) {

    const [dateClick, setDateClick] = useState(false)
    const [timeClick, setTimeClick] = useState(false)

    const toggleDateCalendar = () => {
        setDateClick(dateClick ? false : true)
    }


    const toggleTimeCalendar = () => {
        setTimeClick(timeClick ? false : true)
    }

    return (
        <ScrollView contentContainerStyle={{ ...screenStyles.container }} >
            <Text style={screenStyles.title} >
                Select Vehicle
            </Text>

            <View style={screenStyles.carWrap}>
                {carCardsInfo.map((item) => {
                    return (
                        <CarCard key={Math.random()} title={item.title} />
                    )
                })}
            </View>

            <Text style={screenStyles.title}> Select Destination</Text>

            <ScrollView style={{ height: 'auto', backgroundColor: 'white' }}  >
                <Text style={screenStyles.title}>
                    Date and Time
                </Text>

                <DateTimeLabel toggleDateCalendar={toggleDateCalendar} toggleTimeCalendar={toggleTimeCalendar} />
                {dateClick && <CalendarView />}
            </ScrollView>



            <Text style={screenStyles.title}> Seats</Text>
            <Counter />


            <Text style={screenStyles.title}> Select Fare</Text>


            {/* <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyDtXKDh9X7rTW5qdp4b169mYjs9oAZvxs0',
                    language: 'en',
                }}
                key={Math.random()}
            /> */}
            
            <Text style={screenStyles.title}> Checkpoints </Text>


        </ScrollView>
    );
}


const screenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15
    },
    carWrap: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: percent(100),
    },
    title: {
        fontWeight: '600',
        fontSize: 22,
        fontFamily: 'inter',
        lineHeight: 38.73
    }
});





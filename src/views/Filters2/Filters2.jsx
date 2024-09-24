import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { percent } from '@layouts/percent';
import CarCard from '@components/CarCard/CarCard';
import AvailableNow from '@components/AvailableNow/AvailableNow';
import DateTimePicker from '@react-native-community/datetimepicker';
import CounterIncDec from '@components/CounterIncDec/CounterIncDic';
import moment from 'moment-timezone';
import RedButton from '@components/RedButton/RedButton';

const carCardsInfo = [
  {
    title: 'Ride AC',
  },
  {
    title: 'Ride AC',
  },
  {
    title: 'Bike',
  },
];

export default function Filters2({ navigation }) {
  const sourceMoment = moment.unix(1636765200);
  const sourceDate = sourceMoment.local().toDate();
  const [date, setDate] = useState(sourceDate);
  const [time, setTime] = useState(undefined);

  const [dateClick, setDateClick] = useState(false);
  const [timeClick, setTimeClick] = useState(false);

  const toggleDateCalendar = () => {
    setDateClick(dateClick ? false : true);
  };

  const toggleTimeCalendar = () => {
    setTimeClick(timeClick ? false : true);
  };

  const initialTime = new Date();
  initialTime.setHours(9);
  initialTime.setMinutes(30);

  return (
    <ScrollView contentContainerStyle={{ ...screenStyles.container }}>
      <View style={screenStyles.whiteSegment}>
        <Text style={screenStyles.title}>Vehicle Type</Text>

        <View style={screenStyles.carWrap}>
          {carCardsInfo.map(item => {
            return <CarCard key={Math.random()} title={item.title} showImages={false} />;
          })}
        </View>
      </View>

      <View style={screenStyles.whiteSegment}>
        <AvailableNow />
      </View>

      <View style={screenStyles.whiteSegment}>
        <Text style={screenStyles.title}> Fare </Text>
        <View style={screenStyles.fareWrap}>
          <CounterIncDec placeholder={'Min'} marginRight={50} />
          <CounterIncDec placeholder={'Max'} />
        </View>
      </View>

      <View style={screenStyles.whiteSegment}>
        <Text style={screenStyles.title}> Options</Text>

        <View style={{ ...screenStyles.options, ...screenStyles.whiteSegment }}>
          <View style={screenStyles.grayland}>
            <Text style={screenStyles.grayHeader}> Time </Text>

            <View style={screenStyles.timeRow}>
              <TouchableOpacity
                style={{ ...screenStyles.dateTimeDisplay, marginRight: 5 }}
                onPress={toggleTimeCalendar}>
                <Text style={screenStyles.dateTimeText}> 9 : 56 </Text>
              </TouchableOpacity>

              <TouchableOpacity style={screenStyles.dateTimeDisplay} onPress={toggleTimeCalendar}>
                <Text style={screenStyles.dateTimeText}> AM </Text>
              </TouchableOpacity>
            </View>

            {timeClick && (
              <DateTimePicker
                mode="time"
                value={initialTime}
                style={{ width: 300, opacity: 1, height: 30, marginTop: 50 }}
                is24Hour={true}
                // onChange={(e)=>{alert(e.nativeEvent)}}
              />
            )}
          </View>

          <View style={screenStyles.grayland}>
            <Text style={screenStyles.grayHeader}> Date </Text>

            <TouchableOpacity
              style={{ ...screenStyles.dateTimeDisplay, width: 120 }}
              onPress={toggleDateCalendar}>
              <Text style={screenStyles.dateTimeText}> 10/1/2111 </Text>
            </TouchableOpacity>

            {dateClick && (
              <DateTimePicker
                mode="date"
                value={new Date()}
                style={{ width: 300, opacity: 1, height: 30, marginTop: 50 }}
                is24Hour={true}
              />
            )}
          </View>

          <View style={screenStyles.grayland}>
            <Text style={screenStyles.grayHeader}> Seats </Text>

            <View style={screenStyles.timeRow}>
              <TouchableOpacity style={{ ...screenStyles.dateTimeDisplay, marginRight: 5 }}>
                <Text style={screenStyles.dateTimeText}> + </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ ...screenStyles.dateTimeDisplay, marginRight: 5 }}>
                <Text style={screenStyles.dateTimeText}> 1 </Text>
              </TouchableOpacity>

              <TouchableOpacity style={screenStyles.dateTimeDisplay}>
                <Text style={screenStyles.dateTimeText}> - </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={screenStyles.whiteSegment}
        onPress={() => {
          navigation.navigate('Filters3');
        }}>
        <RedButton title={'Apply'} navigation={navigation} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 0,
  },

  whiteSegment: {
    backgroundColor: 'white',
    width: percent(100),
    marginBottom: 3,
    padding: 5,
  },

  carWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: percent(100),
  },
  fareWrap: {
    width: percent(100),
    flexDirection: 'row',
  },
  title: {
    fontWeight: '600',
    fontSize: 22,
    fontFamily: 'inter',
    lineHeight: 38.73,
    marginBottom: 10,
  },
  options: {
    width: percent(100),
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grayland: {
    backgroundColor: '#D9D9D9',
    width: percent(60),
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  grayHeader: {
    fontFamily: 'inter',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21.78,
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  dateTimeDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
    backgroundColor: 'white',
  },
  timeRow: {
    flexDirection: 'row',
  },
  dateTimeText: {
    fontFamily: 'inter',
  },
  applyButton: {
    backgroundColor: 'red',
    color: '#222',
  },
});

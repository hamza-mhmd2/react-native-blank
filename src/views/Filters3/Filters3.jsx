import PickDropTextInput from '@components/PickDropTextInput/PickDropTextInput';
import ScheduleTab from '@components/ScheduleTab/ScheduleTab';
import { percent } from '@layouts/percent';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import Drop from '../../assets/Drop.png';

export default function Filters3({ navigation, title }) {
  return (
    <View style={screenStyles.container}>
      <View style={{ marginBottom: 15 }} />
      <PickDropTextInput />

      <View style={screenStyles.rideWrap}>
        <Text style={screenStyles.select}> Select Ride </Text>
        <TouchableOpacity>
          <Image style={screenStyles.selectIcon} source={Drop} />
        </TouchableOpacity>
      </View>

      <View style={screenStyles.tabsWrap}>
        <ScheduleTab navigation={navigation} />
        <ScheduleTab  navigation={navigation} />
      </View>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    width: percent(100),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rideWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: percent(70),
    marginBottom: 20,
  },

  selectIcon: {
    marginRight: 10,
  },
  tabsWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: percent(100),
    marginBottom: 15,
  },
});

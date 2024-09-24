import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { percent } from '@layouts/percent';
import ToggleSwitch from 'toggle-switch-react-native';

export default function AvailableNow({ navigation }) {
  return (
    <View style={screenStyles.background}>
      <Text style={screenStyles.avail}>Available Now</Text>
      <ToggleSwitch
        style={{  marginTop: 2 }}
        isOn={true}
        onColor="green"
        offColor="red"
        size="small"
      />
    </View>
  );
}

const screenStyles = StyleSheet.create({
  background: {
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: percent(100),
    padding: 20,
  },

  avail: {
    width: percent(70),
    height: 25,
  },
});

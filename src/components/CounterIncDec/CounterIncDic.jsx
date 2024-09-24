import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';

export default function CounterIncDec({ placeholder, marginRight }) {
  return (
    <View style={{ ...screenStyles.background, marginRight: marginRight }}>
      <View style={{ ...screenStyles.arrowsWrap, ...theme.center }}>
        <Text> ^ </Text>
        <Text> ^ </Text>
      </View>
      <View style={{ ...screenStyles.numericWrap, ...theme.center }}>
        <TextInput keyboardType="numeric" style={screenStyles.input} placeholder={placeholder} />
      </View>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  background: {
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: percent(25),
    backgroundColor: '#D9D9D9',
  },
  arrowsWrap: {
    flexDirection: 'column',
    width: 20,
  },
  numericWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    marginTop: 5,
  },
  input: {},
});

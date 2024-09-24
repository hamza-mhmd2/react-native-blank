import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';

export default function RedButton({ title, navigation }) {
  return (
    <TouchableOpacity
      style={screenStyles.container}
      title={title}
      onPress={() => navigation.navigate('Filters3')}>
      <View style={{...screenStyles.btn, ...theme.center}} title={title}>
        <Text> {title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    width: percent(100),
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: percent(50),
    height:200,
    backgroundColor: 'red',
    elevation:10
    
  },
});

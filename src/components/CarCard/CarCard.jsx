import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { percent } from '@layouts/percent';
import Car from '../../assets/Car.png';

export default function CarCard({ title, showImages }) {
  return (
    <View style={screenStyles.carWrap}>
      {showImages && <Image source={Car} />}
      <Text style={screenStyles.title}> {title} </Text>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  carWrap: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'orange',
    marginRight: 15,
    width: percent(25),
    height: 'auto',
  },
  title: {
    marginBottom: 5,
  },
});

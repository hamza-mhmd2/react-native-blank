import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';
import RoundFace from '../../assets/RoundFace.png';

export default function DriverTab() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textColumn}>
        <Text style={theme.name}>Muhammad Zubair</Text>
        <Text>Suzuki Alto 2190</Text>
      </View>
      <View>
        <Image source={RoundFace} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: percent(95),
    height: 70,
    borderWidth: 2,
    borderColor: '#F15929',
    marginBottom: 5,
    borderRadius: 15,
  },
  textColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 100,
  },
  imageSegment: {
    height: 300,
    width: percent(100),
    borderWidth: 1,
  },
  image: {
    width: 325,
    height: 267,
    padding: 15,
  },
});

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@theme';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';
import RoundFace from '../../assets/RoundFace.png';

export default function FaceName({ navigation }) {
  return (
    <View style={styles.faceName}>
      <Image style={styles.face} source={RoundFace} />
      <Text style={theme.name}> Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  faceName: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  face: {},
});

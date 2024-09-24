import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';

export default function PrivacyPolicy({ navigation }) {
  return (
    <View style={{ ...styles.container, ...theme.center }}>
      <View style={{ ...styles.cyanSegment, ...theme.center }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: percent(100),
  },
  cyanSegmentL: {
    width: percent(60),
    backgroundColor: 'cyan',
  },
});

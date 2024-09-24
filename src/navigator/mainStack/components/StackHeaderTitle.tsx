import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { images } from '@theme';

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
});

export function StackHeaderTitle() {
  return <Image source={images.logo} style={styles.logo} />;
}

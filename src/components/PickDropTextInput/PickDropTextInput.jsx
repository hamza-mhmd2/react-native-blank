import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { percent } from '@layouts/percent';
import Pick from '../../assets/Pickup.png';
import Drop from '../../assets/Drop.png';

export default function PickDropTextInput({ navigation }) {
  return (
    <View style={screenStyles.container}>
      <View style={{ marginBottom: 25 }} />

      <View style={screenStyles.backButtonWrap}>{/* <Image source={} /> */}</View>

      <View style={screenStyles.inputWrap}>
        <TouchableOpacity
          style={screenStyles.textWrap}
          onPress={() => navigation.navigate('Search')}>
          <Image style={screenStyles.locIcon} source={Pick} />
          <TextInput
            style={screenStyles.textInput}
            placeholder="Pickup location"
            onPress={() => navigation.navigate('Search')}
          />
        </TouchableOpacity>
      </View>

      <View style={screenStyles.inputWrap}>
        <TouchableOpacity
          style={screenStyles.textWrap}
          onPress={() => navigation.navigate('Search')}>
          <Image style={screenStyles.locIcon} source={Drop} />
          <TextInput
            style={screenStyles.textInput}
            placeholder="Destination"
            onPress={() => navigation.navigate('Search')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  textWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: percent(99),
    height: 36,
    borderRadius: 50,
    padding: 10,
  },
  textInput: {
    height: 35,
    width: percent(70),
    backgroundColor: 'white',
    borderRadius: 50,
  },
  locIcon: {
    marginRight: 10,
  },
  inputWrap: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: percent(85),
    marginBottom: 10,
    borderRadius: 50,
  },
});

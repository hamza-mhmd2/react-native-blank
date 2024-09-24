import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { percent } from '@layouts/percent';
import Menu from '../../assets/Menu.png';
import Cross from '../../assets/Cross.png';
import Bell from '../../assets/Notification.png';

export default function SearchTab({ navigation }) {
  return (
    <View style={screenStyles.background}>
      <View style={screenStyles.center}>
        <TouchableOpacity onPress={()=> navigation.openDrawer()} >
          <Image source={Menu} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={screenStyles.textWrap} onPress={() => navigation.navigate('Search')}>
        <TextInput
          style={screenStyles.textInput}
          placeholder="Pickup location"
          onPress={() => navigation.navigate('Search')}
        />
        <Image source={Cross} />
      </TouchableOpacity>
      <TouchableOpacity style={screenStyles.center}>
        <Image source={Bell} />
      </TouchableOpacity>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  background: {
    height: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: percent(97),
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
    width: percent(70),
    backgroundColor: 'white',
    height: 36,
    borderRadius: 50,
  },
  textInput: {
    width: percent(58),
    marginRight: 10,
  },
});

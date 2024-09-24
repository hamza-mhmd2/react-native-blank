import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { percent } from '@layouts/percent';
import PickDropTextInput from '@components/PickDropTextInput/PickDropTextInput';
import { theme } from '@layouts/stylesheet';
import Drop from '../../assets/Drop.png';


export default function Filters({ navigation }) {
  const recentRides = [
    {
      searchTitle: 'E-11/4',
      fullAddress: 'E-9/4,Islamabad, Pakistan',
    },
    {
      searchTitle: 'E-11/4',
      fullAddress: 'E-9/4,Islamabad, Pakistan',
    },
    {
      searchTitle: 'E-11/4',
      fullAddress: 'E-9/4,Islamabad, Pakistan',
    },
    {
      searchTitle: 'E-11/4',
      fullAddress: 'E-9/4,Islamabad, Pakistan',
    },
  ];

  return (
    <View style={screenStyles.background}>
      <View style={{ marginBottom: 10 }}></View>
      <PickDropTextInput />

      <View style={screenStyles.align}>
        <TouchableOpacity style={screenStyles.chooseOnMapWrap}>
          <Image style={screenStyles.selectIcon} source={Drop} />

          <Text style={screenStyles.select}> Select on Map </Text>
        </TouchableOpacity>
        <Text style={theme.name}> Recent Searches</Text>

        <View style={screenStyles.listWrap}></View>
        {recentRides.map(ride => {
          return (
            <TouchableOpacity
              style={screenStyles.listItemWrap}
              onPress={() => navigation.navigate('Filters2')}>
              <View style={screenStyles.listItemCol1}>
                <Image source={Drop} />
              </View>

              <View style={screenStyles.listItemCol2}>
                <Text style={theme.name}> {ride.searchTitle} </Text>
                <Text> {ride.fullAddress} </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const screenStyles = StyleSheet.create({
  background: {
    height: 'auto',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: percent(97),
    padding: 10,
  },
  align: {
    marginLeft: 10,
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
  chooseOnMapWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: percent(70),
    marginBottom: 20,
  },
  listWrap: {
    backgroundColor: 'white',
    width: percent(80),
  },
  listItemWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: percent(90),
    height: 90,
    marginBottom: 3,
    backgroundColor: 'white',
    padding: 5,
  },
  listItemCol1: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 15,
  },
  listItemCol2: {
    flexDirection: 'column',
  },
  selectIcon: {
    marginRight: 10,
  },
});

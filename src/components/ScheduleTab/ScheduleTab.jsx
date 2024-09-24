import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@theme';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';
import RoundFace from '../../assets/RoundFace.png';

export default function ScheduleTab({navigation}) {
  return (
    <View style={styles.mainColumn}>
      <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('RideDetail')} >
        <View style={styles.textColumn}>
          {/* <Text style={theme.name}>Muhammad Zubair</Text> */}
          <Text>2:30 pm </Text>
          <Text>30 minutes</Text>
        </View>

        <View style={styles.middleSection}>
          <Text style={theme.name}>F8 Markaz </Text>
          <Text>To </Text>
          <Text style={theme.name}>Blue Area,Islamabad </Text>
          <Text>370 pkr ___ Suzuki Cultus </Text>
        </View>

        <View>
          <Image source={RoundFace} />
        </View>
      </TouchableOpacity>
      <View style={styles.secondSegment}>
        <Text style={{ marginRight: percent(40) }}>AC Available</Text>
        <Text> PKR 230</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainColumn: {
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#F15929',

    marginBottom: 5,
    borderRadius: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: percent(95),
    height: 90,
  },
  secondSegment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: 'white',
  },
  textColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 10,
    marginLeft: 5,
    width: percent(20),
  },
  middleSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginRight: 1,
    width: percent(50),
    borderSegment: 1,
  },
  imageSegment: {
    height: 300,
    width: percent(20),
    borderWidth: 1,
  },
  image: {
    width: 325,
    height: 267,
    padding: 15,
  },
});

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';
import Arrow from '../../assets/LeftArrow.png';
import ChatFrame from '../../assets/ChatFrame.png';
import FaceName from '@components/FaceName/FaceName';
import RedButton from '@components/RedButton/RedButton';

export default function RideDetails({ navigation }) {
  return (
    <View style={styles.mainColumn}>
      <View style={styles.container}>
        <Image style={styles.arrow} source={Arrow} />
        <Text style={styles.name}> Driver Name </Text>
        <Image source={ChatFrame} />
      </View>

      {/* <View style={styles.reviewWrap}> </View>
        <View style={styles.vehicleWrap}></View> */}

      <FaceName />

      <TouchableOpacity style={styles.tabWrap} onPress={() => navigation.navigate('Finalize')}>
        <Text style={styles.tabText}>Fare</Text>
        <Text style={styles.tabNums}>PKR 276</Text>
      </TouchableOpacity>

      <Text style={theme.title}> Car Details</Text>

      <View style={styles.tabWrap}>
        <Text style={styles.tabText}>Fare</Text>
        <Text style={styles.tabNums}>PKR 276</Text>
      </View>

      <View style={styles.tabWrap}>
        <Text style={styles.tabText}>Fare</Text>
        <Text style={styles.tabNums}>PKR 276</Text>
      </View>

      <View style={styles.tabWrap}>
        <Text style={styles.tabText}>Fare</Text>
        <Text style={styles.tabNums}>PKR 276</Text>
      </View>

      <View style={styles.tabWrap}>
        <Text style={styles.tabText}>Fare</Text>
        <Text style={styles.tabNums}>PKR 276</Text>
      </View>

      <Text style={theme.title}> Reviews </Text>

      <FaceName />

      <View style={styles.driverDescription}>
        <Text>
          Lorem ipsum dolor sit amet consectetur. Eros ut tempus ac ac malesuada scelerisque
          consectetur.
        </Text>
      </View>

      <View style={styles.buttonsRow}>
        <RedButton title={'Book Now'} />
        <RedButton title={'Save'} />
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
  arrow: {
    marginRight: percent(15),
  },
  name: {
    marginRight: percent(20),
  },
  reviewWrap: {
    width: percent(100),
    height: 50,
  },
  tabWrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 70,
  },
  tabText: {},
  tabNums: {},
});

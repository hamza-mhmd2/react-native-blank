import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackProps } from '@navigator/verificationStack';
import { colors } from '@theme';
import MainCar from '../../assets/MainCar.png';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';
import DriverTab from '@components/DriverTab/DriverTab';
import ScheduleTab from '@components/ScheduleTab/ScheduleTab';
import { WelcomeBottomSheetContents } from '@layouts/BottomSheetContents';
import BottomSheet from '@components/BottomSheet';
import SearchTab from '@components/SearchTab/SearchTab';

export default function Home({ navigation }: StackProps) {

  const close = () => {};

  const [isOpen, setOpen] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{marginBottom:25}} />
      <SearchTab navigation={navigation} />
      <View style={styles.imageSegment}>
        <Image style={styles.image} source={MainCar} />
      </View>
      
      <View style={theme.center}>
        <Text style={{ ...theme.title, marginBottom: 5 }}>Recent Driver</Text>
      </View>
      <View style={styles.tabsWrap}>
        <DriverTab />
        <DriverTab />
      </View>

      <View style={theme.center}>
        <Text style={{ ...theme.title, marginBottom: 5 }}>Scheduled Rides</Text>
      </View>

      <View style={styles.tabsWrap}>
        <ScheduleTab navigation={navigation} />
        <ScheduleTab navigation={navigation} />
      </View>

        <BottomSheet isOpen={isOpen} initialOpen>
          <WelcomeBottomSheetContents onClose={() => setOpen(false)} />
        </BottomSheet>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGrayPurple,
    width: percent(100),
    padding: 5,
  },
  tabsWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: percent(100),
    marginBottom: 15,
  },
  imageSegment: {
    height: 300,
    width: percent(100),
  },
  image: {
    width: 325,
    height: 267,
    padding: 15,
  },
});

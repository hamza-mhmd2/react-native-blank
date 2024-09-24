import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors } from '@theme';
import MainCar from '../../assets/MainCar.png';
import { percent } from '@layouts/percent';
import { theme } from '@layouts/stylesheet';
import DriverTab from '@components/DriverTab/DriverTab';
import ScheduleTab from '@components/ScheduleTab/ScheduleTab';
import { WelcomeBottomSheetContents } from '@layouts/BottomSheetContents';
import BottomSheet from '@components/BottomSheet';

export default function Messaging({ navigation }) {
  const close = () => {};

  const conversations = [
    {
      displayName: 'Ehmed',
      photoURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp002KTJLlrNzSfvS_2F-vBkhP6AizkjqDww&s',
    },
    {
      displayName: 'Ehmed',
      photoURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp002KTJLlrNzSfvS_2F-vBkhP6AizkjqDww&s',
    },
    {
      displayName: 'Ehmed',
      photoURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp002KTJLlrNzSfvS_2F-vBkhP6AizkjqDww&s',
    },
    {
      displayName: 'Ehmed',
      photoURL:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp002KTJLlrNzSfvS_2F-vBkhP6AizkjqDww&s',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {conversations.map(conversation => {
        return (
          <View style={styles.listItemWrap}>
            {/* <Image style={styles.face} src={{ uri: conversation.photoURL }} /> */}
            <Text style={styles.username}> {conversation.displayName} </Text>
          </View>
        );
      })}
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
    backgroundColor: 'whitesmoke',
  },
  listItemWrap: {
    width: percent(97),
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  face: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  username: {
    fontFamily: 'inter',
    // fontWeight: 300,
    fontSize: 16,
    lineHeight: 21,
  },
});

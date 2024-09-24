import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@theme';
import { percent } from '@layouts/percent';

export default function SelectChat({ navigation }) {
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
      <View style={{ marginBottom: 15 }} />
      {conversations.map(conversation => {
        return (
          <TouchableOpacity
            style={styles.listItemWrap}
            onPress={() => navigation.navigate('Messaging')}>
            <Image style={styles.face} source={{ uri: conversation.photoURL }} />
            <Text style={styles.username}> {conversation.displayName} </Text>
          </TouchableOpacity>
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
    justifyContent: 'flex-start',
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

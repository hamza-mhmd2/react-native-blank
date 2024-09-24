import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { colors } from '@theme';
import { TabParamList, TabBarStatus } from './Tab.typeDefs';
import ChatStack from '@navigator/stacks/chatStack/chatStack';
import HomeStackNavigation from '@navigator/stacks/homeStack/HomeStack';
import FavourStackNavigation from '@navigator/stacks/favourStack/FavourStack';
import ProfileStackNavigation from '@navigator/stacks/profileStack/ProfileStack';

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBarIcon = (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
  switch (tabName) {
    case "HomeStack":
      return <AntDesign name="home" size={24} color={tabStatus.color} />;
    case 'ChatStack':
      return <AntDesign name="message1" size={24} color={tabStatus.color} />;
    case 'ProfileStack':
      return <Ionicons name="person-circle-outline" size={24} color={tabStatus.color} />;
    case 'FavorStack':
      return <MaterialCommunityIcons name="bow-tie" size={24} color={tabStatus.color} />;
    // add more...
  }
};

export default function DrawerTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: renderTabBarIcon(route.name),
        headerShown: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.lightPurple,
        tabBarActiveBackgroundColor: colors.white,
      })}>
      <Tab.Screen name="HomeStack" component={HomeStackNavigation} options={{ title: 'Home' }} />
      <Tab.Screen name="ChatStack" component={ChatStack} options={{ title: 'Chat' }} />
      <Tab.Screen
        name="FavorStack"
        component={FavourStackNavigation}
        options={{ title: 'Favour' }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackNavigation}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

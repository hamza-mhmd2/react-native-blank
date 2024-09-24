import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerParamList } from './Drawer.typeDefs';
import DrawerTabNavigator from '@navigator/drawerTabs/Tab';
import PrivacyPolicy from '@views/PrivacyPolicy/PrivacyPolicy';

const Drawer = createDrawerNavigator<DrawerParamList>();

const drawerContents = ({ navigation }: any) => (
  <SafeAreaView>
    <View style={{ marginBottom: 25 }}></View>
    <View style={styles.root}>
      <Text>Side Menu Conts</Text>
      <TouchableOpacity onPress={() => navigation.navigate('PrivacyPolicy')}>
      <Text>Navigate</Text>
    </TouchableOpacity>
    </View>

  </SafeAreaView>
);

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MainDrawer"
      screenOptions={{ headerShown: false }}
      drawerContent={drawerContents}>
      <Drawer.Screen name="MainDrawer" component={DrawerTabNavigator} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    padding: 10,
    borderWidth:2
  },
});

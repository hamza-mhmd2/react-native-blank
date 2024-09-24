import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filters from '@views/Filters/Filters';
import Home from '@views/Home';

const Stack = createNativeStackNavigator();

export default function ProfileStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Filters} />
    </Stack.Navigator>
  );
}

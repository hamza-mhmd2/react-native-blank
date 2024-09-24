import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ReusableStack({ componentsInfo, screenOptions }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SignIn">
      {componentsInfo.map(compInfo => {
        return <Stack.Screen name={compInfo.name} component={compInfo.components} />;
      })}
    </Stack.Navigator>
  );
}

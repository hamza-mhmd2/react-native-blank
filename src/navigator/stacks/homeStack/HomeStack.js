import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Filters from '@views/Filters/Filters';
import Home from '@views/Home';
import Filters2 from '@views/Filters2/Filters2';
import Filters3 from '@views/Filters3/Filters3';
import RideDetails from '@views/RideDetails/RideDetail';
import FinalizeRide from '@views/RideFinalized/Ridefinalized';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Filters} />
      <Stack.Screen name="Filters2" component={Filters2} />
      <Stack.Screen name="Filters3" component={Filters3} />
      <Stack.Screen name="RideDetail" component={RideDetails} />
      <Stack.Screen name="Finalize" component={FinalizeRide} />


    </Stack.Navigator>
  );
}

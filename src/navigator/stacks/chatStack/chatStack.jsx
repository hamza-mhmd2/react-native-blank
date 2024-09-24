import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectChat from '@views/SelectChat/SelectChat';
import Messaging from '@views/Messaging/Messaging';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="SelectChat" component={SelectChat} />
            <Stack.Screen name="Messaging" component={Messaging} />
        </Stack.Navigator>
    )
};

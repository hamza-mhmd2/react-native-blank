import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '@views/Register/Register';
import Login from '@views/Login/Login';
import SelectVehicle from '@views/SelectVehicle/SelectVehicle';
import DrawerTabNavigator from '@navigator/drawerTabs/Tab';
import DrawerNavigator from '@navigator/drawer/Drawer';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn' >
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SelectVehicle" component={SelectVehicle} />
            <Stack.Screen name="MainScreen" component={DrawerNavigator} />
        </Stack.Navigator>
    )
};

import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { percent } from '@layouts/percent';
import IconTextbox from '@components/IconTextbox/IconTextbox';
import { Entypo } from 'react-native-vector-icons';
import SocialButton from '@components/SocialButton/SocialButton';
import SimpleButton from '@components/SimpleButton/SimpleButton';
import Divider from '@components/Divider/Divider';
import AlreadyHaveAccount from '@components/AlreadyHaveAccount/AlreadyHaveAccount';
import { theme } from '@layouts/stylesheet';

export default function Login({ navigation }) {

    const navigate = () => {
        navigation.navigate('MainScreen')
    }

    return (
        <View style={{ flex: 1, ...theme.verticalCenter, ...screenStyles.background }}>
            <View style={screenStyles.topSegment}></View>

            <ScrollView contentContainerStyle={{ ...theme.topCenter, ...screenStyles.registerSegment }} >
                <Text style={screenStyles.title}> Welcome back </Text>
                <Text style={screenStyles.subtitle}> Sign in to your account </Text>
                <IconTextbox placeholder={'Phone Number'} IconComponent={Entypo} IconName={'phone'} />
                <IconTextbox placeholder={'Password'} IconComponent={Entypo} IconName={'lock'} />

                <View style={{ marginBottom: 25 }} ></View>
                <SimpleButton title={'Login'} onPress={navigate} />
                <View style={{ marginBottom: 10 }} ></View>

                <Divider />
                <View style={{ marginBottom: 10 }} ></View>

                <SocialButton title={'Sign in with Google'} />
                <View style={{ marginBottom: 10 }} ></View>
                <AlreadyHaveAccount navigation={navigation} navigateTo={'Register'} text={'Sign Up'} />

            </ScrollView>
        </View >
    );
}



const screenStyles = StyleSheet.create({
    background: {
        backgroundColor: '#F15929E5',
        height: "auto"
    },
    topSegment: {
        width: percent(100),
        height: 180,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerSegment: {
        width: percent(100),
        height: 600,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 50
    },
    title: {
        fontWeight: '800',
        fontSize: 32,
        fontFamily: 'inter',
        lineHeight: 38.73
    },
    subtitle: {
        fontWeight: '300',
        fontSize: 16,
        fontFamily: 'inter',
        lineHeight: 22,
        marginBottom: 25
    },
});





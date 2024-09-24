import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native';
import { theme } from '@layouts/stylesheet';
import { percent } from '@layouts/percent';
import IconTextbox from '@components/IconTextbox/IconTextbox';
import { Entypo } from 'react-native-vector-icons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import SocialButton from '@components/SocialButton/SocialButton';
import SimpleButton from '@components/SimpleButton/SimpleButton';
import Divider from '@components/Divider/Divider';
import AlreadyHaveAccount from '@components/AlreadyHaveAccount/AlreadyHaveAccount';

export default function Register({ navigation }) {
    return (
        <View style={{ flex: 1, ...theme.verticalCenter, ...screenStyles.background }}>
            <View style={screenStyles.topSegment}></View>

            <ScrollView contentContainerStyle={{ ...theme.topCenter, ...screenStyles.registerSegment }} >
                <Text style={screenStyles.title}> Register </Text>
                <Text style={screenStyles.subtitle}> Create your new account </Text>
                <IconTextbox placeholder={'Fullname'} IconComponent={FontAwesome6} IconName={'person'} />
                <IconTextbox placeholder={'Phone Number'} IconComponent={Entypo} IconName={'phone'} />
                <IconTextbox placeholder={'Password'} IconComponent={Entypo} IconName={'lock'} />

                <View style={{ marginBottom: 25 }} ></View>.
                
                <SimpleButton title={'Sign Up'} backgroundColor={'#F15929E5'} />
                <View style={{ marginBottom: 10 }} ></View>

                <Divider />
                <View style={{ marginBottom: 10 }} ></View>

                <SocialButton title={'Sign up with Google'} backgroundColor={'#F15929E5'} />
                <View style={{ marginBottom: 10 }} ></View>
                <AlreadyHaveAccount navigation={navigation} navigateTo={'Login'} text={'Sign In'} />

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





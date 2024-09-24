import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import { colors } from '@theme';
import { percent } from '@layouts/percent';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SocialButton({
    title,
    titleStyle,
    image,
    style,
    disabled,
    isLoading,
    loaderColor = colors.white,
    imageStyle,
    children,
    backgroundColor,
    ...others
}) {
    return (
        <TouchableOpacity
            style={{ ...styles.root, backgroundColor: backgroundColor ? backgroundColor : 'white' }}
            disabled={disabled ?? isLoading}
            {...others}>

            <View style={styles.buttonLeftSegment} >
                <AntDesign name="google" size={24} color="black" />
            </View>

            <Text style={styles.buttonText} > {title ? title : 'Sign in with Google'} </Text>


        </TouchableOpacity>
    );
}

export default SocialButton;

const styles = StyleSheet.create({
    root: {
        width: percent(90),
        height: 54,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },
    buttonLeftSegment: {
        width: percent(20)
    },
    buttonText: {
        fontFamily: 'inter',
        fontSize: 16,
        fontWeight: '400px',
        lineHeight: 19.36
    }
});

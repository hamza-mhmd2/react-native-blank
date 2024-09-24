import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
} from 'react-native';
import Image from '../Image';
import { colors } from '@theme';
import { percent } from '@layouts/percent';

function SimpleButton({
    title,
    backgroundColor,
    onPress,
    ...others
}) {
    return (
        <TouchableOpacity
            style={{
                ...styles.root, backgroundColor: backgroundColor ? backgroundColor : 'white'
            }}
            onPress={onPress}
            {...others}>

            <Text style={styles.buttonText} > {title ? title : 'Title'}</Text>


        </TouchableOpacity>
    );
}

export default SimpleButton;

const styles = StyleSheet.create({
    root: {
        width: percent(90),
        height: 54,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    buttonText: {
        fontFamily: 'inter',
        fontSize: 16,
        fontWeight: '400px',
        lineHeight: 19.36
    }
});

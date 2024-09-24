import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { percent } from '@layouts/percent';
import Line from '../../assets/Line.png'

function AlreadyHaveAccount({ navigation, navigateTo, text }) {
    return (
        <View
            style={{ ...styles.root }}>
            <Text style={styles.already} >
                Already have an account ?
            </Text>
            <TouchableOpacity>
                <Text style={styles.signIn} onPress={() => {
                    navigation.navigate(navigateTo)
                }}> {text} </Text>
            </TouchableOpacity>

        </View>
    );
}

export default AlreadyHaveAccount;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    already: {
        fontFamily: 'inter',
        fontWeight: '600px'

    },
    signIn: {
        marginLeft: 5,
        marginRight: 5
    }
});





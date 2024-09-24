import {
    Text,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import { percent } from '@layouts/percent';
import Line from '../../assets/Line.png'

function Divider({
    title,
    backgroundColor,
    ...others
}) {
    return (
        <View
            style={{ ...styles.root }}
            {...others}>
            {/* <Image src={require('../../assets/Line.png')} /> */}
            <Image source={Line} />
            <Text style={styles.or} > OR </Text>
            <Image source={Line} />
        </View>
    );
}

export default Divider;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    or: {
        marginLeft: 10,
        marginRight: 10
    }
});





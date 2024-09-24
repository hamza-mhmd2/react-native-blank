import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: "auto",
        backgroundColor: '#DE927A',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'orange'
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
    },
});

function IconTextbox({
    IconComponent,
    IconName,
    placeholder,
    margin
}) {
    return (
        <View style={{ ...styles.searchSection, marginBottom: margin ? margin : 15 }}>
            {/* <Entypo style={styles.searchIcon} name="person" size={24} color="black" /> */}

            <IconComponent style={styles.searchIcon} name={IconName} size={24} color="black" />

            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={(searchString) => { this.setState({ searchString }) }}
                underlineColorAndroid="transparent"
            />
        </View>
    );
}

export default IconTextbox;

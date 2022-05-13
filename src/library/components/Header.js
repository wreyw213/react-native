import React from 'react'
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icons from '../Icons';

const { height, width } = Dimensions.get('window')
function Header({ navigation, onPress }) {
    console.log(navigation, 'navigation')
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.menu}
                onPress={onPress}>
                <Image
                    source={Icons.Menu}
                />
            </TouchableOpacity>
            <Image
                source={Icons.Logo}
                style={styles.logo}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: width / 1.44,
        borderBottomLeftRadius: width / 9.75,
        borderBottomRightRadius: width / 9.75,
        backgroundColor: '#2C8FF2',
        flexDirection: 'row',
    },
    menu: {
        width: width / 21.66,
        height: width / 32.5,
        marginTop: width / 9.75,
        marginLeft: width / 26,
    },
    logo: {
        marginTop: width / 9.75,
        marginLeft: width / 4.33
    }
})

export default Header
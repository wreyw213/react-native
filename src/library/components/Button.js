import {
    Text, StyleSheet, Dimensions,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { Texts } from '../constants'
const { width } = Dimensions.get('window')

export default function Button({ style, label, inactive, onPress, color, ...props }) {

    return (
        <TouchableOpacity
            {...props}
            onPress={onPress}
            style={[inactive ? styles.inactibeButtonStyle : styles.buttonStyle, style]}>
            <Text style={[styles.label, { color: color }]}>{label}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        width: width / 2.76,
        height: width / 6.94,
        backgroundColor: "#06BBF9",
        borderColor: "#06BBF9",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inactibeButtonStyle: {
        width: width / 2.76,
        height: width / 6.94,
        backGroundColor: "#FFF",
        borderColor: "#D7D7D7",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // marginRight: width / 25
    },
    label: {
        fontSize: 18,
        lineHeight: 24.51,
        fontFamily: Texts.OPENSANS_SEMIBOLD
    }
})
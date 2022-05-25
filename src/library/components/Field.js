import { View,Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import React, { forwardRef,useState,useEffect } from 'react';
import { Colors, Texts } from '../constants';
const { width } = Dimensions.get('window')

const Field = forwardRef(({ style, onChange, placeHolder, value, label, keyItem, data, ...props }, ref) => {
const [isFocused, setIsFocused] = useState(false)
    return (
        <View style={{ marginBottom: width / 18.75 }}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                ref={ref}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                // {...props}
                onChangeText={(e) => onChange(e, keyItem)}
                value={value}
                style={[styles.input, isFocused && { borderColor: Colors.RED }, style,]}
                placeholder={placeHolder}
            />
        </View>
    )
}
)

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        borderColor: Colors.BACKGROUND_COLOR,
        height: width / 7.5,
        borderWidth: 1,
        backgroundColor: Colors.INACTIVE_WHITE,
        padding: width / 22.86,
    },
    label: {
        fontSize: 14,
        fontFamily: Texts.OPENSANS_MEDIUM,
        marginBottom: 10,
    }
})

export default Field;
import React from 'react';
import {Pressable,StyleSheet} from 'react-native'

function Card({ style = {}, children,onPress }) {
    return (
        <Pressable style={[styles.card,style]} onPress={onPress}>
            {children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "#F8FAFB",
        borderRadius: 10,
        padding: 10,
    }
})
export default Card
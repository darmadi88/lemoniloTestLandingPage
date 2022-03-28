import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../atoms/Icon'
import { COLOR } from '../config/style'

export default function BottomNavButton({icon, text, active}) {
    return (
        <View style={styles.buttonContainer}>
            <Icon source={icon} size={24} color={active ? COLOR.primary : COLOR.textLight} />
            <Text style={[styles.buttonText, {color: active ? COLOR.primary : COLOR.textLight}]}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    buttonText: {
        marginTop: 4,
    }
})
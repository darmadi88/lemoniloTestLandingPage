import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Icon from '../atoms/Icon'
import { COLOR } from '../config/style'

export default function ServicesButton({icon, text}) {
    return (
        <Pressable style={styles.buttonContainer}>
            <View style={styles.iconContainer}>
                <Icon source={icon} size={32} />
            </View>
            <Text style={styles.buttonText}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginVertical: 16
    },
    iconContainer: {
        height: 64,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
        backgroundColor: '#fafafa',
        elevation: 2,
        marginBottom: 8
    },
    buttonText: {
        fontSize: 16,
        color: COLOR.text,
        textAlign: 'center'
    }
})
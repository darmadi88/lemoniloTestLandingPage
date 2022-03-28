import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Icon from '../atoms/Icon'

export default function ButtonIcon({source, onPress, iconColor}) {
    return (
        <Pressable style={styles.buttonContainer} onPress={onPress}>
            <Icon source={source} color={iconColor} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16,
        borderRadius: 30,
        width: 56,
        height: 56,
        alignContent: 'center',
        alignItems: 'center'
    }
})
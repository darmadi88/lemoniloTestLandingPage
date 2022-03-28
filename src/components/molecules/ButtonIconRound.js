import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Icon from '../atoms/Icon'

export default function ButtonIconRound({source, onPress}) {
    return (
        <Pressable style={styles.buttonContainer} onPress={onPress}>
            <Icon source={source} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 16,
        borderRadius: 30,
        backgroundColor: '#fff',
        width: 56,
        height: 56,
        alignContent: 'center',
        alignItems: 'center'
    }
})
import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { COLOR } from '../config/style'
import Icon from '../atoms/Icon'

export default function ButtonIconTextSmall({source, text, onPress}) {
    return (
        <Pressable style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.iconContainer}>
                <Icon source={source} />
            </View>
            <Text style={styles.textButton}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 10,
        elevation: 1,
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fafafa'
    },
    textButton: {
        color: COLOR.text
    }
})
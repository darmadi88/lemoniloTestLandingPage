import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Logo() {
    return (
        <View>
            <Text style={styles.logoStyle}>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoStyle: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#fff'
    },
})
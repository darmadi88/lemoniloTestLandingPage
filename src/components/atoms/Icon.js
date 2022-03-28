import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { COLOR } from '../config/style'

export default function Icon({ source, size = 24, iconStyle, color = COLOR.text }) {
    return (
        <Image tintColor={color} source={source} style={[styles.icon, { ...iconStyle }]} width={size} height={size} />
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
})
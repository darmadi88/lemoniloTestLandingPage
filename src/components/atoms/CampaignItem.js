import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { COLOR } from '../config/style'

export default function CampaignItem({item}) {
    return (
        <View style={styles.campaignContainer}>
            <Image style={styles.campaignImage} source={{ uri: item.image }} />
            <Text style={styles.campaignTitle}>{item.title}</Text>
            <Text style={styles.campaignMessage}>{item.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    campaignContainer: {
        width: 320,
        marginRight: 16
    },
    campaignImage: {
        width: '100%',
        aspectRatio: 2/1,
        backgroundColor: '#ddd',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 8,
    },
    campaignTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: COLOR.text
    },
    campaignMessage: {
        fontSize: 16,
        color: COLOR.text
    }
})
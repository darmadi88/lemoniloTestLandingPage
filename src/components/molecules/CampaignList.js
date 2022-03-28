import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import CampaignItem from '../atoms/CampaignItem'
import { COLOR } from '../config/style'

export default function CampaignList({title, data}) {
    return (
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <FlatList 
                horizontal={true}
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({item}) => <CampaignItem item={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 16,
        marginBottom: 24,
        paddingVertical: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 16,
        marginBottom: 16,
        color: COLOR.text
    },
    listContainer: {
        paddingLeft: 16
    },
})

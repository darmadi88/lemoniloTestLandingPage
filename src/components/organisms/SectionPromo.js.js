import React from 'react'
import { View, StyleSheet } from 'react-native'
import CampaignList from '../molecules/CampaignList'

export default function SectionPromo() {
    const DATA = [{
        id: 1,
        image: 'https://placeimg.com/300/150/tech',
        title: 'Lorem ipsum dolor sit',
        message: 'Lorem ipsum dolor sit amet'
    }, {
        id: 2,
        image: 'https://placeimg.com/300/150/arch',
        title: 'Lorem ipsum dolor sit',
        message: 'Lorem ipsum dolor sit amet'
    },{
        id: 3,
        image: 'https://placeimg.com/300/150',
        title: 'Lorem ipsum dolor sit',
        message: 'Lorem ipsum dolor sit amet'
    }]

    return (
        <View style={styles.sectionContainer}>
            <CampaignList title="Promo" data={DATA} />
        </View>
    )
}

const styles = StyleSheet.create({

})
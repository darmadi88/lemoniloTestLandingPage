import React from 'react'
import { View, StyleSheet } from 'react-native'
import ServicesButton from '../molecules/ServicesButton'

import iconTaxi from '../../assets/icons/car.png';
import iconDelivery from '../../assets/icons/box.png';
import iconFood from '../../assets/icons/hamburger-soda.png';
import iconMart from '../../assets/icons/shop.png';
import iconGroceries from '../../assets/icons/apple.png';
import iconMed from '../../assets/icons/medicine.png';
import iconMovers from '../../assets/icons/truck.png';
import iconOther from '../../assets/icons/apps.png';

export default function SectionServices() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <ServicesButton icon={iconTaxi} text="Taxi" />
                <ServicesButton icon={iconDelivery} text="Delivery" />
                <ServicesButton icon={iconFood} text="Food" />
                <ServicesButton icon={iconMart} text="Mart" />
            </View>
            <View style={styles.row}>
                <ServicesButton icon={iconGroceries} text="Groceries" />
                <ServicesButton icon={iconMed} text="Med" />
                <ServicesButton icon={iconMovers} text="Movers" />
                <ServicesButton icon={iconOther} text="More" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginBottom: 16
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    }
})
import React from 'react'
import { View, StyleSheet } from 'react-native'
import BottomNavButton from '../molecules/BottomNavButton'

import iconHomeWhite from '../../assets/icons/home.png';
import iconPromo from '../../assets/icons/promo.png';
import iconHistory from '../../assets/icons/history.png';
import iconSetting from '../../assets/icons/setting.png';

export default function BottomNav() {
    return (
        <View style={styles.navContainer}>
            <BottomNavButton icon={iconHomeWhite} text="Home" active={true} />
            <BottomNavButton icon={iconPromo} text="Promo" />
            <BottomNavButton icon={iconHistory} text="History" />
            <BottomNavButton icon={iconSetting} text="Setting" />
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        // position: 'absolute',
        // bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#f0f0f0',
        padding: 8,
    }
})
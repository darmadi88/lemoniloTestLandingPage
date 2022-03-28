import React from 'react'
import { View, StyleSheet } from 'react-native'

import Logo from '../atoms/Logo';
import ButtonIcon from '../molecules/ButtonIcon';
import ButtonIconRound from '../molecules/ButtonIconRound';

import iconNotif from '../../assets/icons/bell.png';
import iconUser from '../../assets/icons/user.png';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Logo />
            <View style={styles.row}>
                <View style={{marginRight: 16}}>
                    <ButtonIcon source={iconNotif} iconColor="#fff" />
                </View>
                <ButtonIconRound source={iconUser} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logoStyle: {

    },
    row: {
        flexDirection: 'row'
    }
})

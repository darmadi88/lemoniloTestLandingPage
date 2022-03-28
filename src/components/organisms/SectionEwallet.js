import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from '../atoms/Icon'
import ButtonIconTextSmall from '../molecules/ButtonIconTextSmall'

import iconEwallet from '../../assets/icons/credit-card.png'
import iconTopUp from '../../assets/icons/topup.png'
import iconScanQr from '../../assets/icons/scan_qr.png'
import { COLOR } from '../config/style'

export default function SectionEwallet() {
    return (
        <View style={styles.sectionContainer}>
            <View style={styles.componentContainer}>
                <View style={[styles.row, styles.justify]}>
                    <View styles={styles.justify}>
                        <View style={styles.row}>
                            <View style={{ marginRight: 16 }}>
                                <Icon source={iconEwallet} />
                            </View>
                            <Text style={styles.textTitle}>E Wallet</Text>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amountUnit}>Rp.</Text>
                            <Text style={styles.amount}>400.000</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <ButtonIconTextSmall source={iconTopUp} text="Top Up" />
                        <View style={{ width: 16 }} />
                        <ButtonIconTextSmall source={iconScanQr} text="Pay" />
                    </View>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 16,
    },
    componentContainer: {
        padding: 16,
        backgroundColor: '#fff',
        elevation: 2,
        borderRadius: 16,
        elevation: 2,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 8,
        color: COLOR.text
    },
    amountContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    amountUnit: {
        marginRight: 8,
        fontSize: 18,
        color: COLOR.text
    },
    amount: {
        fontSize: 32,
        fontWeight: 'bold',
        bottom: -2,
        color: COLOR.primary
    },
    row: {
        flexDirection: 'row',
    },
    justify: {
        justifyContent: 'space-between',
    }
})
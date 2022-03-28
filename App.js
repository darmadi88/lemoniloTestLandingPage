import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { COLOR } from './src/components/config/style';

import BottomNav from './src/components/organisms/BottomNav';
import Header from './src/components/organisms/Header';
import SectionCampaign from './src/components/organisms/SectionCampaign';
import SectionEwallet from './src/components/organisms/SectionEwallet';
import SectionPromo from './src/components/organisms/SectionPromo.js';
import SectionServices from './src/components/organisms/SectionServices';

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={COLOR.primary} />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Header />
                <SectionEwallet />
                <View style={styles.sectionBody}>
                    <SectionServices />
                    <SectionCampaign />
                    <SectionPromo />
                </View>
            </ScrollView>
            <BottomNav />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.primary,
        position: 'relative',
        paddingBottom: 60,
    },
    sectionBody: {
        paddingTop: 16,
        backgroundColor: "#fff",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: 16,
    },
});

export default App;

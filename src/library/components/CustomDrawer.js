import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react'
import Images from '../Icons';
import { Colors, DrawerItems, Texts } from '../constants';
const { width } = Dimensions.get('window')

export default function CustomDrawer(props) {
    // const focused = props.state.index
    const currentRouteName = props.nav()?.getCurrentRoute()?.name;
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <View style={{ flexDirection: 'row', marginTop: width / 10.5, alignItems: 'center' }}>
                    <Image
                        source={Images.Profile}
                    />
                    <Text style={styles.drawerProfileName}>Hugo Tester</Text>
                </View>
                <View style={styles.insurenceProviderView}>
                    <Image
                        source={Images.SupportIcon}
                        style={{ tintColor: Colors.WHITE }}
                    />
                    <View style={styles.insurenceDetailsView}>
                        <Text style={styles.insurenceProviderText}>{Texts.PROVIDER}</Text>
                        <Text style={styles.insurenceAquityText}>{Texts.AQUITY_INSURANCE}</Text>
                        <Text style={styles.insurencePolicyText}>{Texts.POLICY_NUMBER} - <Text style={{ color: Colors.WHITE }}>AquiTy@123</Text></Text>
                    </View>
                </View>
            </View>
            {
                DrawerItems.map((item, index) => {
                    const focused = currentRouteName== item.focusedRoute ? true : false
                    return (
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate(item.Screen);
                        }} style={[styles.DrawerListItem, focused  && styles.DrawerListActiveItem]}>

                            <View style={[styles.InActiveDrawerListIcon, focused  && styles.DrawerListIconView]}>
                                <Image
                                    source={Images[item.Icon]}
                                    style={[{ tintColor: Colors.INACTIVE_BLUE }, focused && styles.DrawerListIcon]}
                                />
                            </View>
                            <Text style={[styles.drawerItemText, focused  && styles.drawerItemActiveText]}>{item.label}</Text>
                        </TouchableOpacity >
                    )
                })
            }
        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    drawerHeader: {
        height: width / 1.93,
        backgroundColor: Colors.SKY_BLUE,
        borderBottomRightRadius: 20,
        padding: width / 18.17,
        marginTop: -10,
        marginBottom: width / 12
    },
    drawerProfileName: {
        fontSize: 22,
        fontFamily: Texts.OPENSANS_BOLD,
        marginLeft: width / 18.7,
        color: Colors.WHITE
    },
    InActiveDrawerListIcon: {
        tintColor: Colors.INACTIVE_BLUE,
        backgroundColor: Colors.LIGHT_BLUE,
        padding: 5,
        borderRadius: 100
    },
    DrawerListItem: {
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        padding: width / 25.93,
    },
    DrawerListActiveItem: {
        backgroundColor: Colors.INACTIVE_BLUE,
        borderRadius: 10
    },
    DrawerListIcon: {
        tintColor: Colors.WHITE
    },
    DrawerListIconView: {
        backgroundColor: Colors.INACTIVE_BLUE,
    },
    drawerItemText: {
        marginLeft: width / 37.4,
        color: Colors.GREY,
        fontSize: 14,
        fontFamily: Texts.OPENSANS_SEMIBOLD,
        textTransform: 'uppercase',
    },
    drawerItemActiveText: {
        color: Colors.WHITE,
    },
    insurenceProviderView: {
        marginTop: width / 16.26,
        flexDirection: 'row',
    },
    insurenceDetailsView: {
        marginLeft: width / 43.16
    },
    insurenceProviderText: {
        color: Colors.WHITE,
        fontSize: 12
    },
    insurenceAquityText: {
        fontFamily: Texts.OPENSANS_SEMIBOLD,
        color: Colors.WHITE,
        fontSize: 14
    },
    insurencePolicyText: {
        color: Colors.WHITE_9D,
        fontFamily: Texts.OPENSANS_REGULAR,
        fontSize: 12,
    }
})

import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react'
import Images from '../Icons';
import { DrawerItems } from '../constants';
const { width } = Dimensions.get('window')

export default function CustomDrawer(props) {
    const focused = props.state.index
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
                        style={{tintColor:"#FFF"}}
                    />
                    <View style={styles.insurenceDetailsView}>
                        <Text style={styles.insurenceProviderText}>PROVIDER</Text>
                        <Text style={styles.insurenceAquityText}>AQUITY INSURANCE</Text>
                        <Text style={styles.insurencePolicyText}>Policy No - <Text style={{ color: '#FFFFFF' }}>AquiTy@123</Text></Text>
                    </View>
                </View>
            </View>
            {
                DrawerItems.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate(item.Screen);
                        }} style={[styles.DrawerListItem, focused === index && styles.DrawerListActiveItem]}>

                            <View style={[styles.InActiveDrawerListIcon, focused === index && styles.DrawerListIconView]}>
                                <Image
                                    source={Images[item.Icon]}
                                    style={[{ tintColor: "#11AFF7" }, focused === index && styles.DrawerListIcon]}
                                />
                            </View>
                            <Text style={[styles.drawerItemText, focused === index && styles.drawerItemActiveText]}>{item.label}</Text>
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
        backgroundColor: '#06BBF9',
        borderBottomRightRadius: 20,
        padding: width / 18.17,
        marginTop: -10,
        marginBottom: width / 12
    },
    drawerProfileName: {
        fontSize: 22,
        fontFamily: 'OpenSans-Bold',
        marginLeft: width / 18.7,
        color: "#FFFFFF"
    },
    InActiveDrawerListIcon: {
        tintColor: "#11AFF7",
        backgroundColor: '#425CB11A',
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
        backgroundColor: "#11AFF7",
        borderRadius: 10
    },
    DrawerListIcon: {
        tintColor: '#FFF'
    },
    DrawerListIconView: {
        backgroundColor: "#11AFF7",
    },
    drawerItemText: {
        marginLeft: width / 37.4,
        color: "#333333",
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        textTransform: 'uppercase',
    },
    drawerItemActiveText: {
        color: "#FFF",
    },
    insurenceProviderView: {
        marginTop: width / 16.26,
        flexDirection: 'row',
    },
    insurenceDetailsView: {
        marginLeft: width / 43.16
    },
    insurenceProviderText: {
        color: '#FFFFFF',
        fontSize: 12
    },
    insurenceAquityText: {
        fontFamily: 'OpenSans-SemiBold',
        color: '#FFFFFF',
        fontSize: 14
    },
    insurencePolicyText: {
        color: '#FFFFFF9D',
        fontFamily: 'OpenSans-Regular',
        fontSize: 12,
    }
})

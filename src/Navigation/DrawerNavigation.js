import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../library/components/CustomDrawer';
import BottomNavigation from './BottomNavigation';

export default function DrawerNavigation({ nav }) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} nav={nav} />}
            screenOptions={{ headerShown: false, drawerType: 'front' }} initialRouteName="HomeStack"
        >
            <Drawer.Screen name="HomeStack" component={BottomNavigation} />
        </Drawer.Navigator>
    )
}
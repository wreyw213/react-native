import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../containers/Home';
import MyAccount from '../containers/MyAccount';
import CustomDrawer from '../library/components/CustomDrawer';
import PaginationDemo from '../containers/PaginationDemo';
import Emergency from '../containers/Emergency';
import Insurence from '../containers/Insurence';
import BottomNavigation from './BottomNavigation';

export default function DrawerNavigation({ nav }) {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} nav={nav} />}
            screenOptions={{ headerShown: false, drawerType: 'front' }} initialRouteName="HomeStack"
        >
            <Drawer.Screen name="HomeStack" component={BottomNavigation} />
            {/* <Drawer.Screen name="MyAccount" component={MyAccount} />
            <Drawer.Screen name="SubmitClaim" component={Home} />
            <Drawer.Screen name="Towing" component={PaginationDemo} />
            <Drawer.Screen name="Emergency" component={Emergency} />
            <Drawer.Screen name="FindTruckInsurence" component={Insurence} /> */}
        </Drawer.Navigator>
    )
}
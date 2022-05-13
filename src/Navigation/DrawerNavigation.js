import React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../containers/Home';
import MyAccount from '../containers/MyAccount';
import CustomDrawer from '../library/components/CustomDrawer';

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false, drawerType: 'front' }} initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="MyAccount" component={MyAccount} />
            <Drawer.Screen name="SubmitClaim" component={Home} />
            <Drawer.Screen name="Towing" component={MyAccount} />
            <Drawer.Screen name="Emergency" component={MyAccount} />
            <Drawer.Screen name="FindTruckInsurence" component={MyAccount} />
        </Drawer.Navigator>
    )
}
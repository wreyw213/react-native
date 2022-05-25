import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../containers/Home';
import PaginationDemo from '../containers/PaginationDemo';
import MyAccount from '../containers/MyAccount';
import CustomBottomTab from '../library/components/CustomBottomTab';
import Emergency from '../containers/Emergency';
import Insurence from '../containers/Insurence';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
    return (
        <Tab.Navigator
            labeled={false}
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <CustomBottomTab {...props} />}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="MyAccount" component={MyAccount} />
            <Tab.Screen name="Emergency" component={Emergency} />
            <Tab.Screen name="SubmitClaim" component={Home} />
            <Tab.Screen name="Towing" component={PaginationDemo} />
            <Tab.Screen name="FindTruckInsurence" component={Insurence} />
        </Tab.Navigator>
    )
}

import React, { createRef } from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './src/Navigation/DrawerNavigation';

export default App = () => {
  const navigationRef = createRef()
  const nav = () => navigationRef.current
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer ref={navigationRef}>
        <DrawerNavigation nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  );
};
 

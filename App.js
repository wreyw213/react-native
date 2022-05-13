
import React from 'react';
import {
  SafeAreaView,  
} from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
 import DrawerNavigation from './src/Navigation/DrawerNavigation';


export default App = () => {
   return (
     <SafeAreaView style={{ flex: 1 }}>
       <NavigationContainer>
         <DrawerNavigation />
       </NavigationContainer>
     </SafeAreaView>
   );
};
 
import { View, Text,TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import { BottomTabItems } from '../constants';
import Images from '../Icons';

export default function CustomBottomTab({state,navigation}) {
  return (
          <View style={{ flexDirection: 'row',backgroundColor:'#1f9b9a',paddingVertical : 15,borderRadius :10}}>
            {BottomTabItems.map((route, index) => {
              const isFocused = state.index === index;
              console.log(state.index,index,isFocused,"isFOcused");
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.Screen,
                  canPreventDefault: true,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate({ name: route.Screen, merge: true });
                }
              };
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.Screen,
                });
              };
      
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ flex: 1,alignItems:'center' }}
                >
                  <Image source={Images[route.Icon]} style={[index == 1 ? styles.absoluteIcon : styles.tabIcon, { tintColor: isFocused ? '#0bf459' : '#FFF' }]} />
                </TouchableOpacity>
              );
            })}
          </View>
        );
}

const styles = StyleSheet.create({
    tabIcon:{
      width:30,
      height:30
    },
    absoluteIcon:{
      width:70,
      height:70,
      // position:'absolute',
      marginTop:-40,
      borderRadius :50,
      borderWidth:2,
      borderColor:"#0bf459",
      backgroundColor:'#1f9b9a'
    }
  })
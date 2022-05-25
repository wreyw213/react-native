import { View, Text, Dimensions,Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps';
import Geolocation from "react-native-geolocation-service";
import { Linking } from 'react-native';
import { Texts } from '../../library/constants';
let { width, height } = Dimensions.get('window')
//for ios only 
export default function Emergency() {
    const [currentRegion, setCurrentRegion] = useState(null)
    const handleRegionChange = (region) => {
        setCurrentRegion(region)
    }
    const getPermission = async () => {
        await Geolocation.requestAuthorization("whenInUse")
        Geolocation.getCurrentPosition((pos) => {
            setCurrentRegion({
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            })
        }, (error) => {
            if (error.code == 1) {
                Alert.alert(Texts.APP_NAME, Texts.ENABLE_LOCATION, [{ text: Texts.OK, onPress: () => Linking.openSettings() },{
                    text: Texts.CANCEL,
                    style: "cancel"
                  }])
            } else {
                Alert.alert(Texts.APP_NAME, error.message)
            }
        })
    }
    useEffect(() => {
        getPermission();
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                region={currentRegion}
                onRegionChange={handleRegionChange}
                mapType="hybrid"
            >
                <Marker
                draggable
                    coordinate={currentRegion}
                    title={"current location"}
                    onDragEnd={(e) => setCurrentRegion({
                        latitude : e.nativeEvent.coordinate.latitude,
                        longitude : e.nativeEvent.coordinate.longitude
                    })}
                />
            </MapView>
        </View>
    )
}
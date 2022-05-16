import { View, Image, Dimensions,Share,Vibration } from 'react-native'
import React, { useState, useEffect } from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../../library/components/Button';
import { useIsFocused } from '@react-navigation/native';
import IsFocusedHoc from '../../library/components/Hoc';
const { width } = Dimensions.get('window')

function MyAccount(props) {
    const { navigation,isFocused } = props;

    // const isFocused = useIsFocused()
    const [images, setImages] = useState([])
    useEffect(() => {
        setImages([])
    }, [isFocused])
    const handleOpenPicker = () => {
        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
        }).then(image => {
            setImages([...images, image])
        }).catch((err) => {
            alert(err)
        })
        // const res = await Share.share({
        //     message:
        //   'React Native | A framework for building native apps using React',
        //   options:{
        //     dialogTitle:"Share",
        //     tintColor:'#FFFFFF'
        //   }
        // })
    }
    const handleCameraPicker = () => {
        ImagePicker.openCamera({
            width: 200,
            height: 200,
            cropping: true,
        }).then(image => {
            setImages([...images, image])
        }).catch((err) => {
            alert(err)
        })
    }
    console.log(props,"props")
    return (
        <View
            style={{ flex: 1 }}
        >
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {images.map((item, id) => {
                    return (
                        <Image
                            source={{ uri: item.path }}
                            style={{
                                width: width / 4,
                                height: width / 4,
                            }}
                        />
                    )
                })
                }
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                <Button
                    label={'Open Drawer'}
                    onPress={() => navigation.openDrawer()}
                    color={'#FFF'}
                    style={{ margin: 10, width: width - 40 }}
                />
                <Button
                    label={'Open Picker'}
                    onPress={handleOpenPicker}
                    color={'#FFF'}
                    style={{ margin: 10, width: width - 40, }}
                />
                <Button
                    label={'Open Camera'}
                    onPress={handleCameraPicker}
                    color={'#FFF'}
                    style={{ margin: 10, width: width - 40 }}
                />
            </View>
        </View>
    )
}
export default IsFocusedHoc(MyAccount)
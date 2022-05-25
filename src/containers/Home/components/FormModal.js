import { View, Text, Modal, StyleSheet, Dimensions, Image, Pressable, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import Field from '../../../library/components/Field';
import Icons from '../../../library/Icons';
import SelectField from '../../../library/components/SelectField';
import Button from '../../../library/components/Button';
const { width } = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const insurenceData = [
    {
        id: 1,
        title: "Can't find my insurance agency"
    },
    {
        id: 2,
        title: 'Tuscon Big Rig Insurance'
    },
    {
        id: 3,
        title: 'Appleseed & Stein'
    },
    {
        id: 4,
        title: 'Aquity Insurance'
    }
]

export default function FormModal({ hideModal, }) {
    let emailRef = useRef()
    let policyInputRef = useRef()
    let selectRef = useRef()
    const [formData, setFormData] = useState({
        email: '',
        insurence: '',
        policy: ''
    })
    const onChange = (e, key) => {
        setFormData((prev) => ({
            ...prev,
            [key]: e
        }))
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
            style={styles.container}
            onRequestClose={() => {
                hideModal();
            }}
        >
            <View style={styles.container}>
                <View style={styles.modalView}>
                    <Pressable
                        style={{ alignSelf: 'flex-end'}}
                        onPress={() => hideModal()}
                    >
                        <Image
                            source={Icons.Close}
                        />
                    </Pressable>
                    <Text style={styles.headingText}>Welcome to
                        Big Rig Wizard</Text>
                    <Text style={styles.text}>Please enter your insurance agency
                        and policy number</Text>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Field
                            label={'Email'}
                            value={formData.email}
                            keyItem={'email'}
                            onChange={onChange}
                            placeHolder={'Enter Email'}
                            returnKeyType='next'
                            onSubmitEditing={() => {
                                selectRef.openDropdown()
                            }}
                        />
                        <SelectField
                            ref={ref => { selectRef = ref }}
                            label={'Insurance Agency'}
                            value={formData.insurence}
                            keyItem={'insurence'}
                            onChange={(e, key) => {
                                onChange(e, key);
                                policyInputRef.current && policyInputRef.current.focus();
                            }}
                            data={insurenceData}
                        />

                        <Field
                            ref={policyInputRef}
                            label={'Policy Number'}
                            value={formData.policy}
                            keyItem={'policy'}
                            isFocused={policyInputRef.current && policyInputRef.current.isFocused()}
                            onChange={onChange}
                            placeHolder={'Enter number'}
                            returnKeyType='done'
                            onSubmitEditing={() => hideModal()}
                        />

                        <View style={{ flexDirection: 'row', marginTop: width / 26 }}>
                            <Button
                                label={'Cancel'}
                                color={'#999999'}
                                inactive={true}
                                style={{ marginRight: width / 25 }}
                                onPress={() => hideModal()}
                            />
                            <Button
                                label={'Save'}
                                color={'#FFFFFF'}
                                onPress={() => console.log('pressed')}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0000004D'
    },
    modalView: {
        marginLeft: width / 18.75,
        marginRight: width / 18.75,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: width / 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        width: width / 1.19,
        // marginTop:width/2.55,
        // marginBottom:width/2.55,
        height: width / 0.68,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    headingText: {
        width: width / 2.48,
        color: '#333333',
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'OpenSans-SemiBold',
        alignSelf: 'center'
    },
    text: {
        width: width / 1.6,
        color: '#666666',
    textAlign: 'center',
        marginTop: width / 46.87,
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        alignSelf: 'center'
    }
})
import { View, Text, Modal, Alert, StyleSheet, Dimensions, Image, Pressable, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import Field from 'library/components/Field';
import Icons from 'library/Icons';
import SelectField from 'library/components/SelectField';
import Button from 'library/components/Button';
const { width } = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Texts, ValidationTypes } from 'library/constants';
import { validate, validateAll } from 'library/utils/Validation';

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

export default function FormModal({ hideModal }) {
    let policyInputRef = useRef()
    let selectRef = useRef()
    const [formData, setFormData] = useState({
        email: '',
        insurence: '',
        policy: ''
    })
    const [errorData, setErrorData] = useState({
        data: {},
        message: {}
    });
    const onChange = (e, key) => {
        setErrorData({
            ...errorData,
            data:{
                ...errorData.data,
                [key] : false
            }
        })
        setFormData((prev) => ({
            ...prev,
            [key]: e
        }))
    }

    const handleSubmit = () => {
        const keys = [
            { type: ValidationTypes.REQUIRED, key: 'email', message: 'Please Enter Email Id' },
            { type: ValidationTypes.EMAIL, key: 'email', message: 'Please Enter Valid Email Id' },
            { type: ValidationTypes.REQUIRED, key: 'insurence', message: 'Please Select Insurence Agency' },
            { type: ValidationTypes.REQUIRED, key: 'policy', message: 'Please Enter policy No' },
            { type: ValidationTypes.NUMBER, key: 'policy', message: 'Please Enter Valid policy No' },
        ]
        // const response = validate(formData,keys);

        const response = validateAll(formData,keys);
        console.log(response, "response")
        if(!response.valid){
            console.log(response, "response");
            // Alert.alert(Texts.APP_NAME,response.message)
            setErrorData(response)
            return
        }
        hideModal()
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
                    <Text style={styles.headingText}>{Texts.WELCOME_TEXT}</Text>
                    <Text style={styles.text}>{Texts.INSURENCE_POLICY}</Text>
                    <KeyboardAwareScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <Field
                            label={Texts.EMAIL}
                            value={formData.email}
                            keyItem={'email'}
                            onChange={onChange}
                            hasError={errorData.data.email}
                            errorMessage={errorData.message.email}
                            placeHolder={Texts.EMAIL_PLACEHOLDER}
                            returnKeyType='next'
                            onSubmitEditing={() => {
                                selectRef.openDropdown()
                            }}
                        />
                        <SelectField
                            ref={ref => { selectRef = ref }}
                            label={Texts.INSURENCE_AGENCY}
                            value={formData.insurence}
                            keyItem={'insurence'}
                            hasError={errorData.data.insurence}
                            errorMessage={errorData.message.insurence}
                            onChange={(e, key) => {
                                onChange(e, key);
                                policyInputRef.current && policyInputRef.current.focus();
                            }}
                            data={insurenceData}
                        />

                        <Field
                            ref={policyInputRef}
                            label={Texts.POLICY_NUMBER}
                            value={formData.policy}
                            keyItem={'policy'}
                            hasError={errorData.data.policy}
                            errorMessage={errorData.message.policy}
                            isFocused={policyInputRef.current && policyInputRef.current.isFocused()}
                            onChange={onChange}
                            placeHolder={Texts.POLICY_PLACEHOLDER}
                            returnKeyType='done'
                            onSubmitEditing={() => hideModal()}
                        />

                        <View style={{ flexDirection: 'row', marginTop: width / 26 }}>
                            <Button
                                label={Texts.CANCEL}
                                color={'#999999'}
                                inactive={true}
                                style={{ marginRight: width / 25 }}
                                onPress={() => hideModal()}
                            />
                            <Button
                                label={Texts.SAVE}
                                color={'#FFFFFF'}
                                onPress={handleSubmit}
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
        fontFamily: Texts.OPENSANS_SEMIBOLD,
        alignSelf: 'center'
    },
    text: {
        width: width / 1.6,
        color: '#666666',
        textAlign: 'center',
        marginTop: width / 46.87,
        fontSize: 14,
        fontFamily: Texts.OPENSANS_REGULAR,
        alignSelf: 'center'
    }
})
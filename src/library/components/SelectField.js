import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react';
import DropDownPicker from 'react-native-select-dropdown'
import Icons from '../Icons';
const { width } = Dimensions.get('window')

const SelectField = React.forwardRef(({ onChange, value, label, keyItem, data = [], ...props }, ref) => {

    const renderIcon = (isOpened) => (
        <Image
            source={isOpened ? Icons.ArrowUp : Icons.ArrowDown}
        />
    )
    return (
        <View style={{ marginBottom: width / 18.75 }}>
            <Text style={styles.label}>{label}</Text>
            <DropDownPicker
                ref={ref}
                data={data}
                onSelect={(e, index) => onChange(e.title, keyItem, index)}
                // buttonTextAfterSelection={(selectedItem, index) => {
                //     return value;
                // }}
                // rowTextForSelection={(item, index) => {
                //     return item;
                // }}
                renderCustomizedButtonChild={(selectedItem, index) => {
                    return (
                        <View>
                            <Text style={styles.dropdownBtnTxtStyle}>{selectedItem ? selectedItem.title : 'Select'}</Text>
                        </View>
                    );
                }}
                renderCustomizedRowChild={(item, index) => {
                    return (
                        <View style={styles.dropdownDropdownStyle}>
                            <Text style={styles.dropdownRowTxtStyle}>{item.title}</Text>
                        </View>
                    );
                }}
                // defaultButtonText={'Select'}
                buttonStyle={styles.dropdownBtnStyle}
                buttonTextStyle={styles.dropdownBtnTxtStyle}
                renderDropdownIcon={renderIcon}
                dropdownStyle={styles.dropdownDropdownStyle}
                rowTextStyle={styles.dropdownRowTxtStyle}
            />
        </View>
    )
}
)

const styles = StyleSheet.create({

    label: {
        fontSize: 14,
        fontFamily: 'OpenSans-Medium',
        marginBottom: 10,
    },
    dropdownBtnStyle: {
        width: '100%',
        height: width / 7.5,
        backgroundColor: '#FCFCFC',
        borderRadius: 10,
        paddingVertical: width / 32.86,
        paddingHorizontal: width / 22.86,
        borderWidth: 1,
        borderColor: '#D7D7D7',
    },
    dropdownBtnTxtStyle: {
        fontSize: 14,
        color: '#333333',
        fontFamily: 'OpenSans-Regular',
        textAlign: 'left'
    },
    dropdownDropdownStyle: {
        backgroundColor: '#EFEFEF',
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    dropdownRowTxtStyle: {
        color: '#333333',
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'OpenSans-Regular'
    },
})

export default SelectField;
//format//
// keys=[
//     {type :'email',key:'emailData',message:'Please Enter vald Email ID'},
//     {type :'required',key:'name',message:'Please Enter name'},
// ]

import { ValidationTypes } from "../constants"

// validate single item at a time and gives error when first error is found
export const validate = (data, keys = []) => {
    for (let i = 0; i < keys.length; i++) {
        if (!validateKey(data[keys[i].key], keys[i].type)) {
            return {
                valid: false,
                message: keys[i].message
            }
        }
    }
    return {
        valid: true,
    }
}

// validate all items and returns Object of errors and messages
export const validateAll = (data, keys = []) => {
    const errObj = {};
    const messageObj = {}
    for (let i = 0; i < keys.length; i++) {
        if (!validateKey(data[keys[i].key], keys[i].type) && !errObj[keys[i].key]) {
            errObj[keys[i].key] = true;
            messageObj[keys[i].key] = keys[i].message
        }
    }
    if(Object.keys(errObj).length){
        return {
            valid: false,
            data: errObj,
            message: messageObj
        }
    }
    return {
        valid: true
    }
}
const validateKey = (data,key) => {
    switch(key){
        case ValidationTypes.EMAIL:
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)){
                return true
            }
            return false
        case ValidationTypes.REQUIRED:
            if(data && data.length){
                return true
            } return false
        case ValidationTypes.NUMBER:
            if(/^\d+$/.test(data)){
                return true
            } return false
        default:
            return true
    }
}

import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../library/components/Button';
const { io } = require("socket.io-client");
const socket = io("http://localhost:3000");
export default function Insurence() {
    const [data, setData] = useState({});
    useEffect(() => {
        socket.on('connect', () => {
            // Alert.alert("Test App","Socket is connected")
        })
        socket.on("getmsg", (data) => {
            setData(data)
        })
    }, [])

    const handlePresss = () => {
        try {
            socket.emit("newMsg", {
                userid: data.user || 12121212189,
                message: "this message is sent from mm "
            }, (res) => {
                console.log(res, "response");
            })
        } catch (err) {
            console.log(err, "error")
        }
    }

    return (
        <View>
            <Text>Insurence with socket</Text>
            <Text>{data.user}</Text>
            <Text>{data.message}</Text>
            <Text>{data.date ? new Date(data.date).toString() : null}</Text>
            <Button color={"#FFF"} label={"Send Message"} onPress={handlePresss} />
        </View>
    )
}
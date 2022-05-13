import React, { useState } from "react";
import { Dimensions, TouchableOpacity, FlatList, View, Text, Image } from 'react-native';
import Card from "../../library/components/Card";
import Header from "../../library/components/Header";
import Icons from '../../library/Icons';
import FormModal from "./components/FormModal";
import styles from "./style";

const { width } = Dimensions.get('window')
const Home = (props) => {
    const [showFormModal, setShowFormModal] = useState(false)
    const Cards = [
        {
            id: 1,
            icon: Icons.Road,
            content: "Road Side Care",
            showCheck: false
        },
        {
            id: 2,
            icon: Icons.Tow,
            content: "Need a Tow?",
            showCheck: false
        },
        {
            id: 3,
            icon: Icons.Emergency,
            content: "Emergency",
            showCheck: true
        },
        {
            id: 4,
            icon: Icons.Insurence,
            content: "Find Insurance",
            showCheck: false
        },
        {
            id: 5,
            icon: Icons.Account,
            content: "My Account",
            showCheck: false
        },
        {
            id: 6,
            icon: Icons.Finder,
            content: "Part Finder",
            showCheck: false
        }
    ]
    const renderItem = ({ item }) => {
        return (
            <Card style={styles.card} onPress={() => setShowFormModal(true)}>
                {
                    item.showCheck ?
                        <Image
                            source={Icons.SelectIcon}
                            style={styles.checkIcon}
                        /> : null
                }
                <View style={{ justifyContent: 'center', flex: 4 }}>
                    <Image
                        source={item.icon}
                    />
                </View>
                <Text style={[styles.heading, { flex: 2, marginTop: 10 }]}>{item.content}</Text>
            </Card>
        )
    }
    return (
        <View style={styles.container}>
            <Header navigation={props.navigation}
                onPress={() =>{
                    props.navigation.openDrawer()
                }} />
            <Card style={styles.subClaimView}>
                <Image
                    source={Icons.VectorSmart}
                    style={{
                        flex: 1,
                        alignSelf: 'center'
                    }}
                />
                <View style={styles.claimCard}>
                    <Text style={styles.heading}>Submit a Claim</Text>
                    <Text style={styles.lightText}>Have you been in an accident? Start here by filing a claim with your insurace agency.</Text>
                </View>
            </Card>
            <FlatList
                numColumns={2}
                data={Cards}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{
                    marginHorizontal: width / 25,
                }}
            />
            {showFormModal && <FormModal hideModal={() => setShowFormModal(false)} />}
        </View>
    )
}



export default Home
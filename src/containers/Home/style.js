import {StyleSheet,Dimensions} from 'react-native';
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    card: {
        marginLeft: width/25,
        marginRight: width/25,
        marginTop:width/23.43,
        backgroundColor: "#F8FAFB",
        height: width / 3.07,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    checkIcon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    lightText: {
        fontSize: 12,
        lineHeight: 16,
        color: '#666666',
        marginTop: 10,
        fontFamily: "Inter-Regular"
    },
    heading: {
        fontSize: 14,
        fontFamily: "OpenSans-Bold"
    },

    subClaimView: {
        height: width/3.07,
        marginTop:-(width/5.5),
        padding:width/19.5,
        width:width/1.19,
        alignSelf:'center',
        backgroundColor: '#F8FAFB',
        flexDirection: 'row',
    },
    claimCard: {
        flex: 5,
        marginLeft: width/19.5,
        flexDirection: 'column',
    },

})

export default styles
import {StyleSheet,Dimensions} from 'react-native';
import { Colors, Texts } from '../../library/constants';
const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.WHITE,
        flex: 1,
    },
    card: {
        marginLeft: width/25,
        marginRight: width/25,
        marginTop:width/23.43,
        backgroundColor: Colors.F8FAFB,
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
        color: Colors.A666666,
        marginTop: 10,
        fontFamily: Texts.INTER_REGULAR
    },
    heading: {
        fontSize: 14,
        fontFamily: Texts.OPENSANS_BOLD
    },

    subClaimView: {
        height: width/3.07,
        marginTop:-(width/5.5),
        padding:width/19.5,
        width:width/1.19,
        alignSelf:'center',
        backgroundColor: Colors.F8FAFB,
        flexDirection: 'row',
    },
    claimCard: {
        flex: 5,
        marginLeft: width/19.5,
        flexDirection: 'column',
    },

})

export default styles
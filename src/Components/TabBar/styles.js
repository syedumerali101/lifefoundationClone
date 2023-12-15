import { StyleSheet } from "react-native";
import { vh } from "../../utils/units";
import defaultColors from "../../utils/defaultColors";

const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: defaultColors.primary,
        borderTopWidth: 0,
        shadowColor: defaultColors.shadowColor,
        shadowOffset: {
            height: 5,
            width: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 11,
        width: '100%',
        flexDirection: 'row',
        height: 7 * vh,
        position:'absolute',
        bottom:0
    },
    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },
    icon: {
        height: vh * 2.5,
        width: vh * 2.5,
        resizeMode: 'contain',
    },
    text: {
        color:defaultColors.white,
        fontSize:1.2*vh,
        marginTop:0.2*vh
    },
    homeContainer: {
        backgroundColor: defaultColors.primary,
        top: -vh * 3.5,
        borderRadius: vh * 10,
        height: vh * 6,
        width: vh * 6,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            height: 3,
            width: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 3,
    },
    homeIcon: {
        height: vh * 2.5,
        width: vh * 2.5,
    },
    focusedIconContainer: {},
    focusedIcon: {
        tintColor: defaultColors.primary,
    },
    focusedText: { color: defaultColors.primary },
    focusedHomeContainer: {
        backgroundColor: defaultColors.secondary,
    },
    focusedHomeIconContainer: {
        tintColor: defaultColors.primary,
    },
    separator: {
        width: 1,
        backgroundColor: defaultColors.white,
        height: vh * 3,
        alignSelf: 'center',
    },
})
export default styles
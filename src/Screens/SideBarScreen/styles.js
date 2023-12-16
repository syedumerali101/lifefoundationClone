import { StyleSheet } from "react-native";
import defaultColors from "../../utils/defaultColors";
import { vh, vw } from "../../utils/units";

const styles = StyleSheet.create({
    imageBackgroundStyle: {
        flex: 1,
        backgroundColor: 'rgb(0,0,0,0.2)'
    },

    mainViewStyle: {
        backgroundColor: defaultColors.blue2,
        height: 100 * vh,
        width: 85 * vw,
        borderTopRightRadius: 10 * vw,
        borderBottomRightRadius: 10 * vw,

    },

    logoViewStyle: {
        backgroundColor: defaultColors.white,
        width: 20 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20 * vw,
        marginLeft: 3 * vw,
        marginTop: 3 * vh

    },

    logoStyle: {
        resizeMode: 'contain',
        height: 10 * vh,
        width: 18 * vw
    },

    listViewStyle: {
        marginTop: 3 * vh,
        paddingBottom: 3 * vh
    },

    contentContainerStyle: {
        paddingBottom: 10 * vh
    },

    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4 * vw,
        borderBottomWidth: 0.7,
        borderBottomColor: defaultColors.white,
        width: 70 * vw,
        paddingVertical: 1.8 * vh
    },

    circleView: {
        height: 3.5 * vw,
        width: 3.5 * vw,
        borderRadius: 3.5 * vw,
        backgroundColor: defaultColors.white
    },

    titleView: {
        justifyContent: 'center',
        marginLeft: 2 * vw,
        width: 60 * vw
    },

    titleTextStyle: {
        fontSize: 2 * vh,
        color: defaultColors.white,
    },

    dropDownIconView: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    dropDownIcon: {
        resizeMode: 'contain',
        height: 3 * vh,
        width: 3 * vw
    },

    mainOptionsView: {
        justifyContent: 'center',
        marginTop: 2 * vh,
        marginLeft: 2 * vw,
        width: 72 * vw,
        alignItems: 'flex-end'

        // position: 'absolute',
        // right: 10 * vw,
        // marginTop: 21 * vh
    },

    helpButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultColors.red,
        width: 45 * vw,
        height: 6 * vh,
        borderRadius: 2 * vw,

    },

    betterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultColors.yellow,
        width: 45 * vw,
        height: 6 * vh,
        borderRadius: 2 * vw,
        marginTop: 2 * vh


    },

    thirdButtonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: defaultColors.green2,
        width: 45 * vw,
        height: 6 * vh,
        borderRadius: 2 * vw,
        marginTop: 2 * vh


    },

    whatsappIcon: {
        resizeMode: 'contain',
        height: 4 * vh,
        width: 4 * vw
    },

    helpTextStyle: {
        color: defaultColors.white,
        fontSize: 1.8 * vh,
        marginLeft: 2 * vw
    },

    betterTextStyle: {
        color: defaultColors.white,
        fontSize: 1.8 * vh
    },

    thirdButtonTextStyle: {
        color: defaultColors.white,
        fontSize: 1.8 * vh
    }
})

export default styles;
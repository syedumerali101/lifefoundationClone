import { StyleSheet } from "react-native";
import defaultColors from "../../utils/defaultColors";
import { vh, vw } from "../../utils/units";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    contentContainerStyle: {
        paddingBottom: 10 * vh
    },

    mainScrollView: {
        flex: 1
    },

    headerView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: defaultColors.blue,
        width: 100 * vw,
        height: 10 * vh
    },


    headerTextStyle: {
        color: defaultColors.white,
        fontSize: 2 * vh,
    },

    paragraphsContainer: {
        paddingHorizontal: 5 * vw
    },

    paragraphView: {
        justifyContent: 'center',
        marginTop: 1 * vh
    },

    paragraphTextStyle: {
        color: defaultColors.darkGray,
        fontSize: 2 * vh
    },

    footerViewStyle: {
        paddingHorizontal: 5 * vw
    },

    contactUsButton: {
        backgroundColor: defaultColors.primary,
        width: 30 * vw,
        padding: 2.5 * vw,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2 * vw,
        marginTop: 2 * vh
    },

    contactUsTextStyle: {
        color: defaultColors.white,
        fontSize: 1.8 * vh,
    },

    contactURl: {
        color: defaultColors.green,
        fontSize: 2 * vh,
        marginTop: 1 * vh
    }

})

export default styles
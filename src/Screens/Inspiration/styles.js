import { StyleSheet } from "react-native";
import defaultColors from "../../utils/defaultColors";
import { vh, vw } from "../../utils/units";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    contentContainerStyle: {
        paddingBottom: 2 * vh
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

    imageViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageStyle: {
        width: 100 * vw,
        height: 20 * vh,
        resizeMode: 'contain'
    },

    paragraphViewStyle: {
        paddingHorizontal: 5 * vw
    },

    paragraphMainHeadingStyle: {
        fontSize: 2 * vh,
        color: defaultColors.black,
        width: 80 * vw,
        marginTop: 2 * vh
    },

    paragraphSubHeadingStyle: {
        color: defaultColors.darkGray,
        fontSize: 2 * vh,
        marginTop: 1.5 * vh,
        width: 90 * vw
    },

    authorName: {
        color: defaultColors.blue2,
        fontSize: 1 * vh,
        marginTop: 1.5 * vh
    },

    authorUrl: {
        textDecorationLine: 'underline',
        fontSize: 1.1 * vh,
        color: defaultColors.blue2,
    }

})

export default styles
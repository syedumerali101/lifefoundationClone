import { StyleSheet } from "react-native";
import { vh } from "../../utils/units";
import defaultColors from "../../utils/defaultColors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.white,
        height: 8 * vh,
        width: 8 * vh,
        borderRadius: 4 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        resizeMode: 'contain',
        height: 7 * vh,
        width: 7 * vh,
    }
})
export default styles
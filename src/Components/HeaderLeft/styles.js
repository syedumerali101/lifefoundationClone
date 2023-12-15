import { StyleSheet } from "react-native";
import { vh } from "../../utils/units";
import defaultColors from "../../utils/defaultColors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultColors.white,
        height: 3 * vh,
        width: 3 * vh,
        borderRadius: 1.5 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        resizeMode: 'contain',
        height: 2 * vh,
        width: 2 * vh,
    }
})
export default styles
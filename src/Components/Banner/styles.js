import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/units";
import defaultColors from "../../utils/defaultColors";
import { defaultSizes } from "../../utils/defaultSizes";

const styles = StyleSheet.create({
    bannerContainer: {
        width: defaultSizes.bannerWidth,
        height: defaultSizes.bannerWidth * 0.35
    },
    bannerContentContainer: {
        flex:1,
        marginRight:'20%',
        marginLeft:'5%',
        // 
        justifyContent:'center'
    },
    buttonContainer:{
        alignItems:'flex-start',
    },
    bannerText: {
        color: defaultColors.white,
        fontSize: 2.5* vh
    },
})
export default styles
import { Image, View } from "react-native"
import { images } from "../../assets"
import styles from "./styles"

 const HeaderLogo = (props) => {
    return <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
    </View>
}
export default HeaderLogo
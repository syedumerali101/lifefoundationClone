import { Image, TouchableOpacity, View } from "react-native"
import { icons } from "../../assets"
import styles from "./styles"

const HeaderLeft = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}>
            <Image
                source={icons.menu}
                style={styles.icon}
            />
        </TouchableOpacity>
    )
}
export default HeaderLeft
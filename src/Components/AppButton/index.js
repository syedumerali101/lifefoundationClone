import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../Text';
import {icons} from '../../assets';
import defaultColors from '../../utils/defaultColors';
import {vh, vw} from '../../utils/units';

const AppButton = props => {
  const {text, onPress, icon, buttonStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      {icon && <Image source={icon} style={styles.icon} />}
      <AppText weight="Bold" style={styles.text}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: defaultColors.red,
    borderRadius: 4,
    padding: 3,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: defaultColors.white,
    fontSize: 1.3 * vh,
    textAlignVertical: 'center',
  },
  icon: {
    height: 1.5 * vh,
    width: 1.5 * vh,
    resizeMode: 'contain',
    marginRight: 5,
  },
});
export default AppButton;

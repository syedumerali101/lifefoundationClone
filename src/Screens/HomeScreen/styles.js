import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import colors from '../../utils/defaultColors';
import {defaultSizes} from '../../utils/defaultSizes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonStyle: {height: vh * 4, width: vw * 40, marginTop: vh},
  helplineConatiner: {
    height: vh * 10,
    justifyContent: 'center',
    width: vw * 90,
  },
  highlightedText: {
    textDecorationLine: 'underline',
    color: colors.blue,
    fontSize: defaultSizes.regularFont,
  },
});
export default styles;

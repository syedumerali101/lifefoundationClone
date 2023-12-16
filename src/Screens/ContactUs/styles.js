import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import {defaultSizes} from '../../utils/defaultSizes';
import colors from '../../utils/defaultColors';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: 'center',
    paddingBottom: vh * 10,
  },
  headerContainer: {
    backgroundColor: colors.blue,
    height: vh * 10,
    width: vw * 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTxtContainer: {
    height: vh * 10,
    width: vw * 90,
    justifyContent: 'center',
    marginTop: vh * 3,
  },
  headerTxt: {
    fontSize: defaultSizes.regularFont,
    color: colors.txtColor,
  },
  contactusContainer: {
    height: vh * 55,
    width: vw * 90,
    borderRadius: vh * 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.borderColor,
    marginVertical: vh * 3,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: vh * 2,
    paddingHorizontal: vw,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  leftContainer: {
    height: vh * 6,
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    height: vh * 6,
    width: '75%',
    backgroundColor: colors.borderColor,
    paddingHorizontal: vw,
    borderRadius: vh,
  },
  dropDownContainer: {
    height: vh * 6,
    width: '75%',
    backgroundColor: colors.borderColor,
    paddingHorizontal: vw * 4,
    borderRadius: vh,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtStyle: {
    fontSize: defaultSizes.regularFont,
    color: colors.txtColor,
  },
  submitbtnStyle: {
    height: vh * 5,
    width: vw * 80,
    backgroundColor: colors.primary,
  },
  horizontalContainer: {
    flexDirection: 'row',
    height: vh * 10,
    width: vw * 90,
    paddingVertical: vh,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.borderColor,
    justifyContent: 'space-between',
    marginVertical: vh,
  },
  iconContainer: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: vh * 7,
    width: vw * 7,
    resizeMode: 'contain',
  },
  textContainer: {
    height: '100%',
    width: '77%',
    justifyContent: 'space-around',
  },
});

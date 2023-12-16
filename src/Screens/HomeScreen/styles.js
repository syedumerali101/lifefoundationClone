import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/units';
import colors from '../../utils/defaultColors';
import {defaultSizes} from '../../utils/defaultSizes';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonStyle: {height: vh * 5, width: vw * 50, marginTop: vh * 4},
  helplineConatiner: {
    height: vh * 10,
    justifyContent: 'center',
  },
  highlightedText: {
    textDecorationLine: 'underline',
    color: colors.blue,
    fontSize: defaultSizes.regularFont,
  },
  textStyle: {
    color: colors.txtColor,
    fontSize: defaultSizes.txtColor,
  },
  rightContainer: {
    width: vw * 35,
    alignItems: 'center',
  },
  centerContainer: {
    width: vw * 20,
    alignItems: 'center',
  },
  phoneTxt: {
    color: colors.blue,
    fontSize: defaultSizes.regularFont,
  },
  betterbtnStyle: {
    height: vh * 5,
    width: vw * 50,
    marginTop: vh * 3,
    backgroundColor: colors.yellow,
  },
  headingTxtStyle: {
    width: vw * 70,
    color: colors.black,
    fontSize: vh * 2.5,
    lineHeight: vh * 3,
    // marginVertical: vh * 3,
    // fontWeight: 'bold',
  },
  bottomBorder: {
    height: 1,
    backgroundColor: colors.txtColor,
    width: vw * 60,
  },
  bottomContainer: {
    width: vw * 90,
  },
  crisisInterventionStyle: {
    width: vw * 90,
    height: vh * 28,
  },
  highlightedNumberStyle: {
    color: colors.greenColor,
    fontSize: defaultSizes.regularFont,
    marginVertical: vh,
  },
  bulletNumberStyle: {
    color: colors.greenColor,
    fontSize: defaultSizes.regularFont,
  },
  helpContainer: {
    width: vw * 90,
    height: vh * 53,
  },
  servicesContainer: {
    width: vw * 90,
    height: vh * 13,
    justifyContent: 'center',
  },
  renderBulletsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: vh * 5,
  },
  bulletStyle: {
    height: vh * 1,
    width: vh * 1,
    borderRadius: (vh * 1) / 2,
    backgroundColor: 'blue',
  },
  bulletContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  bulletTextContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
  },
  communityServiceStyle: {
    height: vh * 29,
    width: vw * 90,
  },
  moreHelpLineContainer: {
    height: vh * 20,
    width: vw * 90,
  },
});
export default styles;

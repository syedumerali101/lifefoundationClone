import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import {defaultSizes} from '../../utils/defaultSizes';

interface AppTextProps {
  weight: 'Regular' | 'Bold' | 'SemiBold';
  font: 'Poppins';
  style?: TextStyle;
  textProps: TextProps;
  children: React.ReactNode;
}

const AppText: React.FC<AppTextProps> = props => {
  const {font = 'Poppins', weight = 'Regular', style} = props;
  return (
    <Text
      allowFontScaling={false}
      {...props}
      style={[styles.text, style, {fontFamily: `${font}-${weight}`}]}>
      {props.children}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: defaultSizes.regularFont,
  },
  'Poppins-Regular': {
    fontFamily: 'Poppins-Regular',
  },
  'Poppins-semiBold': {
    fontFamily: 'Poppins-semiBold',
  },
  'Poppins-Bold': {
    fontFamily: 'Poppins-Bold',
  },
});
export default AppText;

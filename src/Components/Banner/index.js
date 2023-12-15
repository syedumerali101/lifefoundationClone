import {Image, ImageBackground, View} from 'react-native';
import {icons, images} from '../../assets';
import styles from './styles';
import AppText from '../Text';
import AppButton from '../AppButton';

const Banner = props => {
  const {onButtonPress, buttonText, text, bannerContainer, buttonStyle} = props;
  return (
    <ImageBackground
      style={[styles.bannerContainer, bannerContainer]}
      source={images.banner}>
      <ImageBackground style={styles.bannerContainer} source={images.gradient}>
        <View style={styles.bannerContentContainer}>
          <AppText weight="SemiBold" style={styles.bannerText}>
            {text}
          </AppText>
          {onButtonPress && (
            <View style={styles.buttonContainer}>
              <AppButton
                buttonStyle={buttonStyle}
                icon={icons.callCircle}
                onPress={onButtonPress}
                text={buttonText}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </ImageBackground>
  );
};
export default Banner;

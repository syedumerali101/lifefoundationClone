import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {images} from '../../assets';
import AppText from '../../Components/Text';
// import { BlurView } from "@react-native-community/blur";
import {vh, vw} from '../../utils/units';
import {useNavigation} from '@react-navigation/native';

const SideBarScreen = () => {
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      title: 'Choose Your Button',
      showDropDown: true,
    },
    {
      id: 2,
      title: 'What to expect when calling a HelpLine?',
    },
    {
      id: 3,
      title: 'Useful National Organizations',
    },
    {
      id: 4,
      title: 'Inspiration',
      onPress: () => navigation.navigate('Inspiration'),
    },
    {
      id: 5,
      title: 'Resources (Will Be Redirect to website)',
    },
    {
      id: 6,
      title: 'About LiFe Foundation',
      onPress: () => navigation.navigate('AboutLifeFoundation'),
    },
    {
      id: 7,
      title: 'Our Mission & Vision',
      onPress: () => navigation.navigate('MissionAndVisionStatements'),
    },
    {
      id: 8,
      title: "Luc's and Freddie's Stories",
      onPress: () => navigation.navigate('Stories'),
    },
    {
      id: 9,
      title: 'Contact LiFe Foundation',
      onPress: () => navigation.navigate('ContactUs'),
    },
    {
      id: 10,
      title: 'Please Donate (Will Be Redirect to website)',
      onPress: () => console.log('Website'),
    },
    {
      id: 11,
      title: 'Did you find our App useful? Rate Us',
      onPress: () => console.log('Website'),
    },
    {
      id: 12,
      title: 'Website  https://lifefoundation.net/',
      onPress: () => console.log('Website'),
    },
    {
      id: 13,
      title: 'Feedback or Testimonials ',
      onPress: () => navigation.navigate('Feedback'),
    },
  ];
  const [showOptions, setShowOptions] = useState(false);
  const handleShowOptions = () => {
    setShowOptions(!showOptions);
  };

  const renderOptions = () => {
    return (
      <View style={styles.mainOptionsView}>
        <TouchableOpacity
          onPress={handleShowOptions}
          style={styles.helpButtonView}>
          <Image style={styles.whatsappIcon} source={images.whatsapp} />
          <AppText weight="SemiBold" style={styles.helpTextStyle}>
            I Need Some Help
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShowOptions} style={styles.betterView}>
          <AppText style={styles.betterTextStyle}>I Could Be Better</AppText>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleShowOptions}
          style={styles.thirdButtonView}>
          <AppText style={styles.thirdButtonTextStyle}>
            I am pretty good today
          </AppText>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ImageBackground
      source={images.drawerBackground}
      style={[styles.imageBackgroundStyle]}>
      <View style={styles.mainViewStyle}>
        <View style={styles.logoViewStyle}>
          <Image source={images.logo} style={styles.logoStyle} />
        </View>

        <ScrollView
          style={styles.listViewStyle}
          contentContainerStyle={styles.contentContainerStyle}>
          {data?.map((item, index) => (
            <>
              <TouchableOpacity
                style={styles.rowContainer}
                onPress={item?.onPress}>
                <View style={styles.circleView} />
                <View style={styles.titleView}>
                  <AppText
                    weight="Regular"
                    font="Poppins"
                    style={styles.titleTextStyle}>
                    {item?.title}
                  </AppText>
                </View>
                {item?.showDropDown ? (
                  <TouchableOpacity
                    onPress={handleShowOptions}
                    style={styles.dropDownIconView}>
                    <Image
                      style={styles.dropDownIcon}
                      source={images.dropDown}
                    />
                  </TouchableOpacity>
                ) : null}
              </TouchableOpacity>
              {item?.showDropDown && showOptions ? renderOptions() : null}
            </>
          ))}
        </ScrollView>
      </View>

      {/* {
                setShowOptions && <BlurView
                    style={{
                        height: 100 * vh,
                        width: 100 * vw,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                    }}
                    blurType="dark"
                    blurAmount={5}
                    reducedTransparencyFallbackColor="black"
                >
                    {renderOptions()}
                </BlurView>
            } */}
    </ImageBackground>
  );
};

export default SideBarScreen;

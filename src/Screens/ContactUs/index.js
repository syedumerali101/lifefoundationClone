import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import AppText from '../../Components/Text';
import colors from '../../utils/defaultColors';
import {vh, vw} from '../../utils/units';
import AppButton from '../../Components/AppButton';
import {icons} from '../../assets';
import TabBar from '../../Components/TabBar';

export default function ContactUs() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.headerContainer}>
        <AppText
          style={[styles.headerTxt, {color: colors.white, fontSize: vh * 2.5}]}>
          Contact Us
        </AppText>
      </View>
      <View style={styles.headerTxtContainer}>
        <AppText style={styles.headerTxt}>
          Please use this form to contact us with any questions or to request
          more information. We will try to reply within 24 hours. You can also
          contact us via the methods listed below. If we cannot answer, please
          leave a voicemail.
        </AppText>
      </View>
      <View style={styles.contactusContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <AppText style={styles.txtStyle}>Name*</AppText>
          </View>
          <View style={styles.rightContainer}>
            <TextInput placeholder="Enter Your Name" />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <AppText style={styles.txtStyle}>Email*</AppText>
          </View>
          <View style={styles.rightContainer}>
            <TextInput
              placeholder="Enter Your Email"
              keyboardType="email-address"
            />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <AppText style={styles.txtStyle}>
              State{' '}
              <AppText style={[styles.txtStyle, {fontSize: vh * 0.8}]}>
                (optional)
              </AppText>
            </AppText>
          </View>
          <TouchableOpacity style={styles.dropDownContainer}>
            <AppText>Select State</AppText>
            <Image source={icons.dropDownIcon} />
          </TouchableOpacity>
        </View>
        <View style={[styles.rowContainer, {height: vh * 15}]}>
          <View
            style={[
              styles.leftContainer,
              {height: '80%', justifyContent: 'flex-start'},
            ]}>
            <AppText style={styles.txtStyle}>Message*</AppText>
          </View>
          <View style={[styles.rightContainer, {height: '100%'}]}>
            <TextInput
              placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              multiline
            />
          </View>
        </View>
        <AppButton text="Submit" buttonStyle={styles.submitbtnStyle} />
      </View>
      <View>
        <View style={styles.horizontalContainer}>
          <View style={styles.iconContainer}>
            <Image source={icons.phoneIcon} style={styles.iconStyle} />
          </View>
          <View style={styles.textContainer}>
            <AppText style={[styles.txtStyle, {color: colors.blue}]}>
              Phone
            </AppText>
            <AppText style={[styles.txtStyle]}>
              760-543-3988 (760-LIFE988)
            </AppText>
            <AppText style={[styles.txtStyle]}>
              855-543-3988 (855-LIFE988) Toll-free
            </AppText>
          </View>
        </View>
        <View style={styles.horizontalContainer}>
          <View style={styles.iconContainer}>
            <Image source={icons.emailIcon} style={styles.iconStyle} />
          </View>
          <View style={styles.textContainer}>
            <AppText style={[styles.txtStyle, {color: colors.blue}]}>
              Fax And Email
            </AppText>
            <AppText style={[styles.txtStyle]}>Fax: 870-218-4303)</AppText>
            <AppText style={[styles.txtStyle]}>
              Email: info@lifefoundation.net
            </AppText>
          </View>
        </View>
        <View style={[styles.horizontalContainer, {height: vh * 12}]}>
          <View style={styles.iconContainer}>
            <Image source={icons.locationIcon} style={styles.iconStyle} />
          </View>
          <View style={[styles.textContainer, {paddingRight: vw}]}>
            <AppText style={[styles.txtStyle, {color: colors.blue}]}>
              Address
            </AppText>
            <AppText style={[styles.txtStyle]}>
              4022 E Greenway Road Suite #11 - 220 Phoenix, AZ 85032
            </AppText>
            <AppText style={[styles.txtStyle]}>
              (for mail & packages only)
            </AppText>
          </View>
        </View>
      </View>
      <TabBar />
    </ScrollView>
  );
}

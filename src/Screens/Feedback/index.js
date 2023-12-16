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
export default function Feedback() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.headerContainer}>
        <AppText
          style={[styles.headerTxt, {color: colors.white, fontSize: vh * 2.5}]}>
          Feedback or Testimonials
        </AppText>
      </View>
      <View style={styles.headerTxtContainer}>
        <AppText style={styles.headerTxt}>
          We would appreciate your feedback or testimonials. Providing your name
          or email is optional.
        </AppText>
      </View>
      <View style={styles.contactusContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <AppText style={styles.txtStyle}>
              Name*
              <AppText style={[styles.txtStyle, {fontSize: vh * 0.8}]}>
                (optional)
              </AppText>
            </AppText>
          </View>
          <View style={styles.rightContainer}>
            <TextInput placeholder="Enter Your Name" />
          </View>
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.leftContainer}>
            <AppText style={styles.txtStyle}>
              Email*
              <AppText style={[styles.txtStyle, {fontSize: vh * 0.8}]}>
                (optional)
              </AppText>
            </AppText>
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
            <AppText style={styles.txtStyle}>State*</AppText>
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
    </ScrollView>
  );
}
